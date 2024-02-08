export const serverConfig = {
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  HOST_URL: process.env.HOST_URL,
}

export const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  collection: process.env.COLLECTION
}

export const shopifyConfig = {
  store: process.env.STORE_NAME,
  accesToken: process.env.ACCES_TOKEN,
};

export const routesConfig = {
  home: "/",
  api: "/api",
  products: "/products",
};
