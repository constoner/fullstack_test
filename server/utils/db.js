import { firebaseConfig } from "../config/config.js";

import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    doc,
    setDoc,
    getDocs,
} from 'firebase/firestore';

export const initializeDB = () => {
    const firebase = initializeApp(firebaseConfig);
    const db = getFirestore(firebase);
    return db;
};

const db = initializeDB();

export const createProduct = async (item, index) => {
    await setDoc(doc(db, firebaseConfig.collection, `product_id${index}`), item);
};

export const getProducts = async () => {
    return await getDocs(collection(db, firebaseConfig.collection))
};