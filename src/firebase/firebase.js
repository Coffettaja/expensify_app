import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCz9KrGfau4XwRSuLKGyIiNFcZsM7bJV9g",
    authDomain: "expense-manager-61834.firebaseapp.com",
    databaseURL: "https://expense-manager-61834.firebaseio.com",
    projectId: "expense-manager-61834",
    storageBucket: "expense-manager-61834.appspot.com",
    messagingSenderId: "379793181329"
  }

firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default }

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

database.ref('isFinnish').remove()