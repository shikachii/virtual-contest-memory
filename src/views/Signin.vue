<template>
  <div :class="$style.root">
    <h2>ログイン</h2>
    <div :class="$style.email">
      <div :class="$style.label">メールアドレス</div>
      <input type="email" v-model="username" />
    </div>
    <div :class="$style.password">
      <div :class="$style.label">パスワード</div>
      <input type="password" v-model="password" />
    </div>
    <button :class="$style.submit" @click="signin">ログイン</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as firebase from '@/plugins/firebase';

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
      await firebase.auth
        .signInWithEmailAndPassword(this.username, this.password)
        .then((user) => {
          if (user !== null && user.user !== null) {
            console.log(user.user.uid);
          }
          this.$router.push({ name: 'Home' });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
});
</script>

<style module>
.root {
  width: 300px;
  margin: 0px auto;
}

.label {
  text-align: left;
}

.email {
  margin-bottom: 20px;
}

.email input {
  width: 100%;
  padding: 5px 5px;
  font-size: 15px;
  border: 1px #888 solid;
  border-radius: 5px;
}

.password {
  margin-bottom: 30px;
}

.password input {
  width: 100%;
  padding: 5px 5px;
  font-size: 15px;
  border: 1px #888 solid;
  border-radius: 5px;
}

.submit {
  width: 200px;
  padding: 5px 5px;
  background: #5cb85c;
  border: 1px solid #00000000;
  border-radius: 5px;

  font-size: 15px;
  color: #fff;
  cursor: pointer;
}
</style>
