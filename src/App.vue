<template>
  <v-app>
    <MainMenu :userLogged="userLogged"/>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import MainMenu from './common/components/MainMenu.vue'

export default {
  name: 'App',

  components: {
    MainMenu,
  },
  
  data: () => ({
    userLogged: ''
  }),
  updated() {
    this.userLogged = localStorage.getItem('user_logged');
  }
};
</script>