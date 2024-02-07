import { shopifyConfig } from "../config/config.js";

import { Product } from "../classes/product.js";

const graphqlEndpoint = `https://${shopifyConfig.store}.myshopify.com/admin/api/2023-10/graphql.json`;

const query = `
  {
    products(first: 250, after: null) {
        edges {
            node {
                id
                bodyHtml
                images(first: 1) {
                    edges {
                        node {
                            src
                        }
                    }
                }
            }
        }
    }
  }
`;

const createProducts = (dataArray) => {
    return dataArray.data.products.edges.map((item) => {
        return {
            ...new Product(
                item.node.id,
                item.node.bodyHtml,
                item.node.images.edges[0].node.src,
            )
        };
    });
};

export const collectProducts = async (dbCallback) => {
    await fetch(graphqlEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': shopifyConfig.accesToken,
        },
        body: JSON.stringify({ query }),
    })
        .then(res => res.json())
        .then((output) => createProducts(output)).then((data) => {
            data.forEach((item, index) => {
                dbCallback(item, index);
            })
        }).then(() => console.log("database updated!"))
        .catch(error => console.error('Error fetching products:', error));
};