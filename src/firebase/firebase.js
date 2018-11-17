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

  firebase.database().ref().set({
    name: "testi Joonas"
  })