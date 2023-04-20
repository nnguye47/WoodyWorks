// Import the functions you need from the SDKs you need
// require('dotenv');
const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');
// const { getAnalytics } = require('firebase/analytics');
const {
  getFirestore,
} = require('firebase/firestore');
const { getStorage } = require('firebase/storage');

// Create a reference to the cities collection
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // projectId: process.env.PROJECT_DOMAIN,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MSG_SENDER_ID,
  // appId: process.env.APP_ID,
  // measurementId: process.env.MEASUREMENT_ID,

  apiKey: 'AIzaSyCBoKIyywd7uE8LiLOf0CI86JX2ovifSlk',
  authDomain: 'woodyshop-7e6ca.firebaseapp.com',
  projectId: 'woodyshop-7e6ca',
  storageBucket: 'woodyshop-7e6ca.appspot.com',
  messagingSenderId: '307497042088',
  appId: '1:307497042088:web:8ed3aae3db90fbfdbe829d',
  measurementId: 'G-72ET6JY8KY',

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

module.exports.auth = getAuth(app);

// module.exports.storage = storage;
// module.exports.db = db;

module.exports = { db, storage };
