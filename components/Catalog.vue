<template>
  <v-container fluid>
    <Cards @open-modal='openModal'/>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Catalog",
  created() {
    this.$store.dispatch('getProducts')
  },
  methods: {
    openModal(idx: number): void{
      this.$emit('open-modal', idx)
    }
  }
});
</script>

<style scoped></style>
