<template>
  <v-app-bar fixed app>
    <v-toolbar-title>NUXT + TS APP</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-for="item in routes" :key="item.title" :to="item.to" text>
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon dark v-bind="attrs" v-on="on" class="hidden-md-and-up">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="item in routes"
          :key="item.title"
          :to="item.to"
          exact
        >
          {{ item.title }}
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Navigation",
  data() {
    return {
      routes: [
        { title: "Catalog", to: "/" },
        { title: "other random page", to: "/other" },
      ],
      showMenu: true,
    };
  },
});
</script>

<style scoped></style>
