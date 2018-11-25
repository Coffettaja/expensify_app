import * as firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  }

firebase.initializeApp(config)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }

// .ref() gives a reference to a specific part in the database
// .set() sets the database value for that part. It overrides any previous values.
// therefore, to update a value, a parameter for ref() has to be given
// e.g. .ref('name').set('some other name')
// referencing values inside an object done by using / within the string value
// database.ref().set({
//   name: "testi Joonas",
//   age: 26,
//   isFinnish: true
// }).then(() => {
//   console.log('data was saved')
// }).catch((e) => {
//   console.log('error:', e)
// })