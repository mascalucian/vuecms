<template>
 <Content/>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCVnMpEsvu-8yg_paXbUdUSkNPlJ3xxBGI",
  authDomain: "vuecmsprincipal.firebaseapp.com",
  projectId: "vuecmsprincipal",
  storageBucket: "vuecmsprincipal.appspot.com",
  messagingSenderId: "295754707958",
  appId: "1:295754707958:web:f416aa30eecf4ffe01cdd7"
  };
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // var db = firebase.firestore();
    // var iuseri = db.collection("users");
import Content from './components/Content.vue'

export default {
  name: 'App',
  components: {
    Content
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
