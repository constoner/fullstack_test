import "dotenv/config";
import express from "express";

import { createProduct } from "./utils/db.js";
import { collectProducts } from "./utils/shop.js";

import router from "./router/router.js";

import { serverConfig, routesConfig } from "./config/config.js";

collectProducts(createProduct);

const app = express();

app.use(express.json());

app.use(routesConfig.home, router);
app.use(routesConfig.api, router);


app.listen(serverConfig.PORT, () => console.log(`===== SERVER STARTED ON PORT ${serverConfig.PORT} =====`));