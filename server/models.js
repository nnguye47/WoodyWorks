const {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
  where,
  query,
} = require('firebase/firestore');
const { getStorage, ref, getDownloadURL } = require('firebase/storage');
const { db, storage } = require('./firebase');

module.exports = {

  getFeatured: async () => {
    const results = [];
    const q = query(collection(db, 'products'), where('featured', '==', true));
    const snapShot = await getDocs(q)
      .catch((err) => {
        console.log('could not get products in models', err);
      });

    snapShot.forEach((item) => {
      const data = item.data();
      results.push(data);
    });

    // console.log('my results', results);
    return results;
  },

  getAll: async () => {
    const results = [];
    const q = query(collection(db, 'products'), where('featured', '==', false));
    const snapShot = await getDocs(q)
      .catch((err) => {
        console.log('could not get products in models', err);
      });

    snapShot.forEach((item) => {
      const data = item.data();
      results.push(data);
    });

    // console.log('my results', results);
    return results;
  },
};
