import "dotenv/config";
import express from "express";
import router from "./router/router.js";

import { createProduct } from "./utils/db.js";
import { collectProducts } from "./utils/shop.js";

import { serverConfig } from "./config/config.js";

collectProducts(createProduct);

const app = express();

app.use(express.json());

app.use("/", router);
app.use("/api", router);


app.listen(serverConfig.PORT, () => console.log(`===== SERVER STARTED ON PORT ${serverConfig.PORT} =====`));