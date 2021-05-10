<template>
  <div :class="$style.root">
    <h2>新規登録</h2>
    <div :class="$style.email">
      <div :class="$style.label">メールアドレス</div>
      <input type="text" v-model="username" />
    </div>
    <div :class="$style.password">
      <div :class="$style.label">パスワード</div>
      <input type="password" v-model="password" />
    </div>
    <div :class="$style.password_confirm">
      <div :class="$style.label">パスワード(確認用)</div>
      <input type="password" v-model="passwordConfirm" />
      <template v-if="password !== passwordConfirm">
        <div :class="$style.alert">
          パスワードが異なります
        </div>
      </template>
    </div>
    <button :class="$style.submit" @click="signup">登録</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as firebase from '@/plugins/firebase';

type DataType = {
  username: string;
  password: string;
  passwordConfirm: string;
};

export default Vue.extend({
  name: 'Signin',
  data: (): DataType => ({
    username: '',
    password: '',
    passwordConfirm: '',
  }),
  methods: {
    async signup() {
      if (this.password === this.passwordConfirm) {
        await firebase.auth
          .createUserWithEmailAndPassword(this.username, this.password)
          .then(async (user) => {
            if (user !== null && user.user !== null) {
              await firebase.db.collection('users_v1')
                .doc(user.user.uid)
                .set({ email: this.username }, { merge: true });
              this.$router.push({ name: 'Home' });
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
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
  margin-bottom: 20px;
}

.password input {
  width: 100%;
  padding: 5px 5px;
  font-size: 15px;
  border: 1px #888 solid;
  border-radius: 5px;
}

.password_confirm {
  margin-bottom: 30px;
}

.password_confirm input {
  width: 100%;
  padding: 5px 5px;
  font-size: 15px;
  border: 1px #888 solid;
  border-radius: 5px;
}

.alert {
  color: #F00;
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
