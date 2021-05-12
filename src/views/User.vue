<template>
  <div :class="$style.root">
    <h2>マイページ</h2>
    Hello, {{ uid }}!
    <h3>採用済み問題登録</h3>
    <div :class="$style.text">
      <input type="text" v-model="url" placeholder="URL" />
      <template v-if="isAlreadyUsed">
        <div :class="$style.alert">
          既に使用された問題です。
        </div>
      </template>
    </div>
    <div>
      <input :class="$style.submit" type="submit" value="登録" @click="register" />
    </div>
    <div>
      <button :class="$style.clear" @click="clear">クリア</button>
    </div>

    <h3>登録URL</h3>
    <template v-for="(url, i) in urls">
      <div :key="i">
        {{ url }}
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as firebase from '@/plugins/firebase';

export default Vue.extend({
  data: () => ({
    url: '',
    urls: [],
  }),
  computed: {
    uid() {
      return this.$route.params.id;
    },
    isAlreadyUsed() {
      return this.urls.includes(this.url);
    },
  },
  async mounted() {
    const doc = await firebase.db
      .collection('users_v1')
      .doc(this.uid)
      .get();
    if (doc.exists) {
      const user = doc.data();
      this.urls = user.urls || [];
    }
  },
  methods: {
    async register() {
      if (!this.isAlreadyUsed) {
        await firebase.db.collection('users_v1')
          .doc(this.uid)
          .update({
            urls: firebase.fv.arrayUnion(this.url),
          });
        this.urls.push(this.url);
        this.url = '';
      }
    },
    clear() {
      this.url = '';
    },
  },
});
</script>

<style module>
.root {
  width: 500px;
  margin: 0 auto;
}

.text {
  margin-bottom: 20px;
}

.text input {
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

.clear {
  width: 200px;
  padding: 5px 5px;
  background: #f0ad4e;
  border: 1px solid #00000000;
  border-radius: 5px;

  font-size: 15px;
  color: #fff;
  cursor: pointer;
}
</style>
