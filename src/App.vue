<template>
  <v-app>
    <MainMenu/>

    <v-main>
      <CardContainer/>
    </v-main>
  </v-app>
</template>

<script>
import MainMenu from './components/MainMenu.vue'
import CardContainer from './components/CardContainer.vue'

export default {
  name: 'App',

  components: {
    MainMenu,
    CardContainer
  },

  data: () => ({
      
    }),
};
</script>
