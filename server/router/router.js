import { Router } from "express";

import { rootResponse, getProductsResponse } from "./controllers.js";
import { getProducts } from "../utils/db.js";

const router = Router();

router.get("/", (req, res) => rootResponse(res));

router.get("/products", (req, res) => {
    getProductsResponse(res, getProducts);
});

export default router;