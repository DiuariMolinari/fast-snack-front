<template>
<div>
    <v-app-bar
      app
      color="#26a69a"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true" v-if="userLogged" />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <CartModal />
      <v-icon @click="logoutUser">mdi-logout</v-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      v-if="userLogged"
    >
      <v-list-item-group>
        <v-list>
          <v-list-item @click="home">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Home</v-list-item-title> 
          </v-list-item>

          <v-list-item @click="demandControl">
            <v-list-item-icon>
              <v-icon>mdi-newspaper</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Pedidos</v-list-item-title> 
          </v-list-item>

          <v-list-item @click="usersControl">
            <v-list-item-icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Usuarios</v-list-item-title> 
          </v-list-item>
        </v-list>
    </v-list-item-group>
    </v-navigation-drawer>
</div>
 
</template>

<script>
import CartModal from './CartModal.vue'

  export default {
    data: () => ({
      drawer: false,
      group: null
    }),
    props: {
      title: {
        type: String,
        default: "Fast Snack"
      },
      userLogged: {}
    },
    components: {
      CartModal,
    },
    methods: {
      logoutUser() {
        localStorage.removeItem('user_logged');
        this.$store.dispatch('setToken', null);
        this.$router.push({ path: '/login' });
      },
      demandControl() {
        this.$router.push({ path: '/demands' })
      },
      usersControl() {
        this.$router.push({ path: '/users' })
      },
      home() {
        this.$router.push({ path: '/catalog' })
      }
    }
  }
</script>
<style>

</style>