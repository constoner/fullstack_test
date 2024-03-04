# Тестовое задание на позицию Junior Fullstack Developer

## Описание

- Сервер получает данные из магазина на **shopify**, загружает их в базу данных **firebase**.При каждом запуске сервера данные в базе обновляются.
- Сервер предоставляет эндпойнт с получением данных из базы.
- На клиенте данные отображаются в виде карточек товаров.
- Клиент полностью на **React**, управление данными через **Redux**.
- Изображение в карточках товаров отображаются через **canvas**

## Стэк

### backend

- node js 20.11
- express 4.18
- firebase 10.8
- shopify api
- graphQL

### frontend

- typescript
- react 18
- rtk query
- bootstrap 5
- bootstrap icons

## Исползование

1. Для работы необходим **nodeJS v20.11.0**
2. Установить модули `npm install` для каждой из папкок: `server/`, `client/`
3. В корень папки `server/` необходимо добавить файл **_.env_** вида:

   ```js
      # server config

      PORT=4000
      HOST=localhost
      HOST_URL=http://localhost:4000

      #firebase config

      API_KEY=your-database-api-key
      AUTH_DOMAIN=your-database-auth-domain
      PROJECT_ID=your-database-project-id
      STORAGE_BUCKET=your-database-storage-bucket
      MESSAGING_SENDER_ID=your-database-messaging-id
      APP_ID=your-database-app-id
      COLLECTION=products

      #shopify config

      STORE_NAME=your-shopify-store-name
      ACCES_TOKEN=your-shopify-acces-token
   ```

4. Запустить сервер:
   - в папке _server/_ `npm start` или `npm run dev` для дев-режима
   - по умолчанию сервер доступен на порте **4000**
5. На клиенте:
   - в папке _client/_ проверить package.json: прокси должен соответствовать серверу proxy: _http://localhost:4000_
   - создать билд `npm run build`
   - запустить клиент `npm start`
