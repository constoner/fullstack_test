import "dotenv/config";
import express from "express";

import { serverConfig } from "./config/config.js";

import { collectProducts } from "./utils/shop.js";
import { createProduct, getProducts } from "./utils/db.js";
import { rootResponse, sendProducts } from "./utils/response.js";

const app = express();
app.use(express.json());

collectProducts(createProduct);

app.get("/", (res) => {
    rootResponse(res);
})

app.get("/api", (res) => {
    sendProducts(res, getProducts);
})

app.listen(serverConfig.PORT, () => console.log(`===== SERVER STARTED ON PORT ${serverConfig.PORT} =====`));