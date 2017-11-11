import firebase from 'firebase'
import 'firebase/firestore'

const fbConfig = {
  apiKey: "AIzaSyCEBB9_V773g6xNoJnqEjvTKt6n2a9BJQs",
  authDomain: "firestore-jest-bug.firebaseapp.com",
  databaseURL: "https://firestore-jest-bug.firebaseio.com",
  projectId: "firestore-jest-bug",
  storageBucket: "firestore-jest-bug.appspot.com",
  messagingSenderId: "847274406807"
}

firebase.initializeApp(fbConfig)
export const firestore = firebase.firestore()

export default firebase
