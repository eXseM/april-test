<template>
  <div>
    <h1>Catalog</h1>
    <Catalog />
    {{ helloMessage }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      msg: "hello",
    };
  },
  computed: {
    helloMessage() {
      return this.$store.state.helloMessage
    }
  }
});
</script>

<style scoped></style>
