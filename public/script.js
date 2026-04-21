const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => observer.observe(item));

const formModal = document.getElementById('form-modal');
const openFormButtons = document.querySelectorAll('[data-open-form]');
const closeFormButtons = document.querySelectorAll('[data-close-form]');
const residentForm = document.querySelector('.resident-form');
const formStatus = document.querySelector('.resident-form__status');
const submitButton = residentForm ? residentForm.querySelector('button[type="submit"]') : null;

const openFormModal = (event) => {
  event.preventDefault();
  if (!formModal) return;

  formModal.classList.add('is-open');
  formModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  const firstInput = formModal.querySelector('input, select');
  if (firstInput) firstInput.focus();
};

const closeFormModal = () => {
  if (!formModal) return;

  formModal.classList.remove('is-open');
  formModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
};

const readFormPayload = (form) => {
  const formData = new FormData(form);
  return {
    fullName: String(formData.get('fullName') || '').trim(),
    phone: String(formData.get('phone') || '').trim(),
    email: String(formData.get('email') || '').trim(),
    industry: String(formData.get('industry') || '').trim()
  };
};

const submitNodeRequest = async (payload) => {
  const response = await fetch('/api/resident-request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.ok) {
    throw new Error(data.message || 'Failed to send request.');
  }

  return data.message || 'Request sent successfully.';
};

const submitWordPressRequest = async (payload) => {
  const requestData = new FormData();
  requestData.append('action', 'brilpark_submit_request');
  requestData.append('nonce', window.BRILPARK?.nonce || '');
  requestData.append('fullName', payload.fullName);
  requestData.append('phone', payload.phone);
  requestData.append('email', payload.email);
  requestData.append('industry', payload.industry);

  const response = await fetch(window.BRILPARK.ajaxUrl, {
    method: 'POST',
    body: requestData
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.success) {
    throw new Error(data?.data?.message || 'Failed to send request.');
  }

  return data?.data?.message || 'Request sent successfully.';
};

openFormButtons.forEach((button) => {
  button.addEventListener('click', openFormModal);
});

closeFormButtons.forEach((button) => {
  button.addEventListener('click', closeFormModal);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && formModal && formModal.classList.contains('is-open')) {
    closeFormModal();
  }
});

if (residentForm) {
  residentForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const payload = readFormPayload(residentForm);

    if (!payload.fullName || !payload.phone || !payload.email || !payload.industry) {
      if (formStatus) formStatus.textContent = 'Please fill in all fields.';
      return;
    }

    try {
      if (submitButton) submitButton.disabled = true;
      if (formStatus) formStatus.textContent = 'Sending...';

      const message = window.BRILPARK?.ajaxUrl
        ? await submitWordPressRequest(payload)
        : await submitNodeRequest(payload);

      if (formStatus) formStatus.textContent = message;
      residentForm.reset();
    } catch (error) {
      if (formStatus) formStatus.textContent = error.message || 'Unable to send request right now.';
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
}
