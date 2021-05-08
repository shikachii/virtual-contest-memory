<template>
  <div class="$style.root">
    <h2>新規登録</h2>
    <input type="text" v-model="username" />
    <input type="password" v-model="password" />
    <button @click="signup">送信</button>
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
    async signup() {
      const user = await firebase.auth()
        .createUserWithEmailAndPassword(this.username, this.password);
      console.log(user);
    },
  },
});
</script>

<style module>
</style>
