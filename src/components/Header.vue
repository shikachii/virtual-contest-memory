<template>
  <div :class="$style.root">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <template v-if="uid">
      <router-link :to="{ name: 'mypage', params: { id: uid }}">マイページ</router-link> |
      <span @click="logout">ログアウト</span>
    </template>
    <template v-else>
      <router-link to="/signin">Signin</router-link> |
      <router-link to="/signup">Signup</router-link>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as firebase from '@/plugins/firebase';

export default Vue.extend({
  name: 'Header',
  computed: {
    uid() {
      return this.$store.state.auth.uid;
    },
  },
  methods: {
    async logout() {
      await firebase.auth.signOut();
      this.$router.push({ name: 'Home' });
    },
  },
});
</script>

<style module>
.root {
  padding: 30px;
  background: #fff;
  border-bottom: 2px solid #5cb85c;
  /* background: #5cb85c; */
}

.root a {
  font-weight: bold;
  color: #2c3e50;
}

.root a.router-link-exact-active {
  /* color: #42b983; */
  color: #fff;
}

.root span {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: underline;
  cursor: pointer;
}
</style>
