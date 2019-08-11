import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBF6klYzYFxqwO7_9NFCmScc8Q4sXaJC4c",
  authDomain: "clothing-db-a89bc.firebaseapp.com",
  databaseURL: "https://clothing-db-a89bc.firebaseio.com",
  projectId: "clothing-db-a89bc",
  storageBucket: "",
  messagingSenderId: "438982335615",
  appId: "1:438982335615:web:af0e83e9ff87d9fa"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const googleProvider = new firebase.auth.GoogleAuthProvider()
//trigger google auth popup whenever we use this provider variable
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

