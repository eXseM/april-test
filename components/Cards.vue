<template>
  <v-container class="d-flex justify-space-around flex-wrap">
    <v-card class="my-3 mx-1 column d-flex flex-column justify-space-evenly pb-4" v-for="(game, idx) in games" :key="game.id">
      <v-img height="250" :src="game.background_image" @click="openCard(idx)" />
      <v-card-title> {{ game.name }} </v-card-title>
      <v-chip-group column class="ml-3">
        <v-chip v-for="tag in game.tags.slice(0, 4)" :key="tag.id">
          {{ tag.name }}
        </v-chip>
      </v-chip-group>
      <div class="d-flex">
        <v-rating
          class="ml-2"
          background-color="grey lighten-2"
          color="warning"
          half-increments
          readonly
          length="5"
          size="20"
          :value="game.rating"
        />
        <span class="ml-5 my-auto"> {{ game.rating }} </span>
      </div>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "Cards",
  data() {
    return {};
  },
  computed: {
    ...mapState({ games: "data" }),
  },
  methods: {
    openCard(idx: number): void {
      console.log(idx, 'component')
      this.$emit('open-modal', idx)
    },
  }
});
</script>

<style scoped>
.column {
  width: 25%;
}
</style>
