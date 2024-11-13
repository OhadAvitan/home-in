<template>
  <v-app>
    <v-main>
      <Header />
      <!-- <Home /> -->
       <router-view></router-view>
      <Footer />
    </v-main>
  </v-app>
</template>

<script setup>
import Home from './views/Home.vue';

//
</script>

<style lang="scss">
.v-main {
  font-family: "Fredoka", sans-serif;
  text-align: right;
  // font-family: "Afacad", sans-serif;
  // font-family: "Secular One", sans-serif;
}
</style>