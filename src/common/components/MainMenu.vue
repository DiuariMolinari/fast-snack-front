<template>
<div>
    <v-app-bar
      app
      color="#26a69a"
      dark
    >

      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>{{ title }}</v-toolbar-title>
      
      <v-spacer></v-spacer>
      
        <v-btn icon >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
    
        <v-text-field ></v-text-field>

      <CartModal/>


    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Página Inicial</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Usuário</v-list-item-title>
          </v-list-item>

          <v-list-item @click="logoutUser">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-item-list-title>Logout</v-item-list-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</div>
 
</template>

<script>
import CartModal from './CartModal.vue'

  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),
    props: {
      title: {
        type: String,
        default: "Fast Snack"
      }
    },
    components: {
      CartModal,
    },
    methods: {
      logoutUser() {
        localStorage.removeItem('user_logged');
        this.$store.dispatch('setToken', '');
        this.$router.push({ path: '/login' });
      }
    }
  }
</script>
<style>

</style>