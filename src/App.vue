<template>
  <v-app>
    <MainMenu/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import MainMenu from './components/MainMenu.vue'

export default {
  name: 'App',

  components: {
    MainMenu,
  },
  
  data: () => ({
      
    }),
};
</script>