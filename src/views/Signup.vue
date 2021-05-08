<template>
  <div class="$style.root">
    <h2>新規登録</h2>
    <input type="text" v-model="account.username" />
    <input type="password" v-model="account.password" />
    <button @click="signin">送信</button>
    <div>
      {{ account.username }}
    </div>
    <div>
      {{ account.password }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// import firebase from 'firebase';

type AccountType = {
  username: string;
  password: string;
};

type DataType = {
  account: AccountType;
};

export default Vue.extend({
  name: 'Signin',
  data: (): DataType => ({
    account: {
      username: '',
      password: '',
    },
  }),
  methods: {
    signin() {
      console.log(`${this.account.username} : ${this.account.password}`);
    },
  },
});
</script>

<style module>
</style>
