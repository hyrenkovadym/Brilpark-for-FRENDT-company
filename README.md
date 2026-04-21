# Bril Park Website

Готовий проєкт у двох форматах:

- `Node.js` сайт для окремого хостингу/сервера.
- WordPress-тема у `wordpress-theme/brilpark` з тим самим дизайном і контентом.

## 1) Запуск Node-версії

```bash
npm install
npm run dev
```

Або прод-режим:

```bash
npm start
```

Сайт відкривається на `http://localhost:3000`.

## 2) Структура

- `server.js` - Node/Express сервер
- `public/index.html` - головна сторінка
- `public/styles.css` - дизайн і адаптив
- `public/script.js` - анімації + відправка форми
- `wordpress-theme/brilpark` - готова тема для WordPress

## 3) Відправка форми на email

Форма надсилає заявки на: `o.sharchuk@brilpark.com`.

### Node.js версія

1. Створи `.env` на основі `.env.example`.
2. Заповни SMTP параметри:
- `MAIL_HOST`
- `MAIL_PORT`
- `MAIL_USER`
- `MAIL_PASS`
- (опційно) `MAIL_SECURE`, `MAIL_FROM`, `MAIL_TO`

Приклад запуску:

```bash
npm start
```

Endpoint для форми: `POST /api/resident-request`

### WordPress версія

У темі вже додано AJAX обробник через `wp_mail` у `functions.php`.
Для стабільної доставки листів на продакшені рекомендовано поставити SMTP плагін, наприклад `WP Mail SMTP`.

## 4) Домен (Node-версія)

1. Прив'яжи DNS:
- `A` запис: `@` -> IP твого сервера
- `A` запис: `www` -> IP твого сервера

2. На сервері підніми Node-проєкт (рекомендовано через PM2):

```bash
npm install -g pm2
pm2 start server.js --name brilpark
pm2 save
```

3. Налаштуй Nginx reverse proxy на порт `3000` і SSL (Let's Encrypt).

## 5) WordPress-версія

### Встановлення теми

1. Заархівуй папку `wordpress-theme/brilpark` у zip.
2. В WordPress: `Зовнішній вигляд -> Теми -> Додати -> Завантажити тему`.
3. Активуй тему `Bril Park Landing`.
4. В `Налаштування -> Читання` постав відображення статичної головної сторінки.

### Редагування контенту

- Основний контент: `wordpress-theme/brilpark/front-page.php`
- Стилі: `wordpress-theme/brilpark/assets/style.css`
- Скрипт анімацій: `wordpress-theme/brilpark/assets/script.js`

## 6) Важливо по домену

Якщо панель показує, що ти **не власник домену** (як на твоєму скріні), потрібно або:

- отримати доступ у власника домену до DNS,
- або попросити власника прописати потрібні DNS-записи на твій хостинг.
