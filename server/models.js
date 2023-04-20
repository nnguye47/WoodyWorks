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
    // const returnResult = (data) => {
    //   results.push(data);
    // };
    const q = query(collection(db, 'products'), where('featured', '==', true));

    await getDocs(q)
      .then((res) => {
        res.forEach((item) => {
          getDownloadURL(ref(storage, item.data().featured_photo))
            .then((url) => {
              console.log('new url', url);
              // console.log(url);
              const obj = item.data();
              obj.featured_photo = url;
              // console.log('here', obj);
              return obj;
            })
            .then((newData) => {
              // console.log('my results', newData);
              results.push(newData);
              console.log('the updates', results);
            })
            // .then(() => {
            //   // console.log(results);
            //   returnResult(data);
            // })
            .catch((err) => {
              console.log('could not convert image', err);
            });
        });
      })
      .catch((err) => {
        console.log('could not get products in models', err);
      });

    // console.log('final', results);
    return results;
  },

};
