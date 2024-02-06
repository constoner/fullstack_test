import express from "express";
import { initializeApp } from "firebase/app";
import { serverConfig, firebaseConfig, shopifyConfig } from "./config.js";
import {
    getFirestore,
    collection,
    doc,
    addDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
} from 'firebase/firestore';

const app = express();
app.use(express.json());

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

class Product {
    constructor(id, bodyHtml, imageSrc) {
        (this.id = id);
        (this.bodyHtml = bodyHtml);
        (this.imageSrc = imageSrc);
    };
}

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

fetch(graphqlEndpoint, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': shopifyConfig.accesToken,
    },
    body: JSON.stringify({ query }),
})
    .then(response => response.json())
    .then(data => {
        // console.log(JSON.stringify(data, null, 2));
        console.log(data.data.products.edges)
    })
    .catch(error => console.error('Error fetching products:', error));

const createProduct = async (req, res) => {
    try {
        const data = req.body;
        await addDoc(collection(db, 'new_collection'), data);
        res.status(200).send('product created successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getProducts = async (req, res) => {
    try {
        const products = await getDocs(collection(db, 'test_collection'));
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
};

app.get("/", (req, res) => {
    res.status(200).json("Hello world!");
})

app.get("/api", (req, res) => {
    getProducts(req, res);
})


app.listen(serverConfig.PORT, () => console.log(`===== SERVER STARTED ON PORT ${serverConfig.PORT} =====`));