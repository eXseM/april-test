<template>
  <v-container class="d-flex justify-space-around flex-wrap">
    <v-card
      class="my-3 mx-1 column"
      v-for="(game, idx) in games"
      :key="game.id"
    >
      <v-img height="250" :src="game.background_image" />
      <v-card-title> {{ game.name}} </v-card-title>
      <v-card-subtitle> {{ game.tags[idx].name}} </v-card-subtitle>
      <v-divider />
      <v-card-text> Text </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "Cards",
  computed: {
    ...mapState({ games: "data" }),
  },
});
</script>

<style scoped>
.column { width: 25% }
</style>
