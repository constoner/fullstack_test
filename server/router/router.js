import { Router } from "express";

import { rootResponse, getProductsResponse } from "./controllers.js";
import { getProducts } from "../utils/db.js";

import { routesConfig } from "../config/config.js";

const router = Router();

router.get(routesConfig.home, (req, res) => rootResponse(res));

router.get(`${routesConfig.api}${routesConfig.products}`, (req, res) => {
    getProductsResponse(res, getProducts);
});

export default router;