<template>
  <div>
    <h1>Catalog</h1>
    <Catalog @open-modal="openModal" />
    <VModal ref="modal" />
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
  methods: {
    openModal(idx: number): void {
      console.log(idx);
      (this.$refs.modal as any).dialog = true;
    },
  },
});
</script>

<style scoped></style>
