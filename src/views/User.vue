<template>
  <div class="$style.root">
    Hello, {{ uid }}!
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    uid() {
      return this.$route.params.id;
    },
  },
});
</script>

<style module>
</style>
