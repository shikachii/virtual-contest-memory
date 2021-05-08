<template>
  <div class="$style.root">
    Hello, {{ uid }}!
    <button @click="logout">ログアウト</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import firebase from 'firebase';

export default Vue.extend({
  computed: {
    uid() {
      return this.$route.params.id;
    },
  },
  methods: {
    async logout() {
      await firebase.auth().signOut();
      this.$router.push({ name: 'Home' });
    },
  },
});
</script>

<style module>
</style>
