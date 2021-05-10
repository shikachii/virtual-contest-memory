<template>
  <div :class="$style.root">
    <h2>マイページ</h2>
    Hello, {{ uid }}!
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
});
</script>

<style module>
.root {
}
</style>
