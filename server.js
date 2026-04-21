const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

const getArgValue = (name) => {
  const exact = process.argv.find((arg) => arg.startsWith(`${name}=`));
  if (exact) {
    return exact.split('=').slice(1).join('=');
  }

  const index = process.argv.indexOf(name);
  if (index >= 0 && process.argv[index + 1]) {
    return process.argv[index + 1];
  }

  return null;
};

const portFromArg = getArgValue('--port');
const hostFromArg = getArgValue('--host');

const port = Number(portFromArg || process.env.PORT || 3000);
const host = hostFromArg || process.env.HOST || '0.0.0.0';

const defaultMailTo = 'o.sharchuk@brilpark.com';
const mailTo = process.env.MAIL_TO || defaultMailTo;
const mailHost = process.env.MAIL_HOST;
const mailPort = process.env.MAIL_PORT ? Number(process.env.MAIL_PORT) : null;
const mailUser = process.env.MAIL_USER;
const mailPass = process.env.MAIL_PASS;
const mailSecure = String(process.env.MAIL_SECURE || '').toLowerCase() === 'true' || mailPort === 465;
const mailFrom = process.env.MAIL_FROM || (mailUser ? `"BRIL Website" <${mailUser}>` : '"BRIL Website" <o.sharchuk@brilpark.com>');
const sendmailPath = process.env.SENDMAIL_PATH || '/usr/sbin/sendmail';

const hasSmtpConfig = Boolean(mailHost && mailPort && mailUser && mailPass);
const deliveryMode = hasSmtpConfig ? 'smtp' : 'sendmail';

const mailTransport = hasSmtpConfig
  ? nodemailer.createTransport({
      host: mailHost,
      port: mailPort,
      secure: mailSecure,
      auth: {
        user: mailUser,
        pass: mailPass
      }
    })
  : nodemailer.createTransport({
      sendmail: true,
      newline: 'unix',
      path: sendmailPath
    });

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.post('/api/resident-request', async (req, res) => {
  const fullName = String(req.body.fullName || '').trim();
  const phone = String(req.body.phone || '').trim();
  const email = String(req.body.email || '').trim();
  const industry = String(req.body.industry || '').trim();

  if (!fullName || !phone || !email || !industry) {
    return res.status(400).json({
      ok: false,
      message: 'Please fill in all form fields.'
    });
  }

  try {
    await mailTransport.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: email,
      subject: 'New resident request from BRIL website',
      text: [
        'New resident request:',
        `Full name: ${fullName}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Company profile: ${industry}`
      ].join('\n')
    });

    return res.status(200).json({
      ok: true,
      message: 'Request sent successfully.'
    });
  } catch (error) {
    console.error(`Mail send failed (${deliveryMode}):`, error);
    return res.status(500).json({
      ok: false,
      message: hasSmtpConfig
        ? 'Unable to send request right now. Please try again.'
        : 'Sendmail is unavailable on server. Configure SMTP (MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS).'
    });
  }
});

app.use((_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, host, () => {
  console.log(`Bril Park site is running on http://${host}:${port}`);
});
