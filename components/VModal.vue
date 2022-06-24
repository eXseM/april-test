<template>
  <v-dialog v-model="dialog" width="600" class="text-center">
    <v-card>
      <v-card-title> Title </v-card-title>
      <v-card-text> Text </v-card-text>
      <v-card-actions>
        <v-btn @click="dialog = false"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "VModal",
  props: {
    game: { type: Array, default: () => [] },
  },
  data() {
    return {
      dialog: false,
    };
  },
});
</script>

<style scoped></style>
