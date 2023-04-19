const {
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
// const storage = require('./firebase');

module.exports = {

  getFeatured: async () => {
    const results = [];
    const q = query(collection(db, 'products'), where('featured', '==', true));
    const snapShot = await getDocs(q)
      .catch((err) => {
        console.log('could not get products in models', err);
      });

    snapShot.forEach((item) => {
      results.push(item.data());
      getDownloadURL(ref(storage, item.data().featured_photo))
        .then((url) => {
          console.log('my image url', url);
        })
        .catch((err) => {
          console.log('could not get image url', err);
        });
    });

    return results;
  },

};
