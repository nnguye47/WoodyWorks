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
const db = require('./firebase');

module.exports = {

  getFeatured: async (params) => {
    const results = [];
    const q = query(collection(db, 'products'), where('featured', '==', true));
    const snapShot = await getDocs(q)
      .catch((err) => {
        console.log('could not get products', err);
      });

    snapShot.forEach((item) => {
      // doc.data() is never undefined for query doc snapshots
      results.push(item.data());
    });

    return results;
  },

};
