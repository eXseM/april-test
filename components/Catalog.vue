<template>
  <v-container fluid>
    <Cards />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Catalog",
  created() {
    this.$store.dispatch('getProducts')
  }
});
</script>

<style scoped></style>
