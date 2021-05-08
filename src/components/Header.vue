<template>
  <div :class="$style.root">
    Header
    {{ uid }}
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/signin">Signin</router-link> |
    <router-link to="/signup">Signup</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import firebase from 'firebase';

export default Vue.extend({
  name: 'header',
  computed: {
    uid() {
      return firebase.auth().currentUser.uid;
    },
  },
});
</script>

<style module>
.root {
  padding: 30px;
  background: #5cb85c;
}

.root a {
  font-weight: bold;
  color: #2c3e50;
}

.root a.router-link-exact-active {
  /* color: #42b983; */
  color: #fff;
}
</style>
