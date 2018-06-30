import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCP-CO95y_7tAX-ppxEHnHMInY3ivvi2k0",
  authDomain: "catch-of-the-day-tutorial-ilay.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-tutorial-ilay.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp  };

// default export
export default base;
