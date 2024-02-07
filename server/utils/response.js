import { Product } from "../classes/product.js";

export const rootResponse = (res) => {
    return res.status(200);
};

export const sendProducts = (res, dataCallback) => {
    try {
        const products = dataCallback();
        const productArray = [];

        if (products.empty) {
            res.status(400).send('No Products found');
        } else {
            products.forEach((doc) => {
                const product = new Product(
                    doc.id,
                    doc.data().bodyHtml,
                    doc.data().imageSrc,
                );
                productArray.push(product);
            });

            res.status(200).send(productArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}