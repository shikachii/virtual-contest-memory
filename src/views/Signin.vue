<template>
  <div class="$style.root">
    <h2>ログイン</h2>
    <input type="text" v-model="username" />
    <input type="password" v-model="password" />
    <button @click="signin">送信</button>
    <div>
      {{ username }}
    </div>
    <div>
      {{ password }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import firebase from 'firebase';

type DataType = {
  username: string;
  password: string;
};

export default Vue.extend({
  name: 'Signin',
  data: (): DataType => ({
    username: '',
    password: '',
  }),
  methods: {
    async signin() {
      const user = await firebase.auth()
        .signInWithEmailAndPassword(this.username, this.password);
      console.log(user);
      this.$router.push({ name: 'Home' });
    },
  },
});
</script>

<style module>
</style>
