import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const clientCredentails = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PRODUCT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGEING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
}


firebase.initializeApp(clientCredentails);

export default firebase;
