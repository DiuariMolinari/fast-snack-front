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
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Home</v-list-item-title> 
        </v-list-item>

          <v-list-group
            :value="true"
            prepend-icon="mdi-account-circle"
          >
            <template v-slot:activator>
              <v-list-item-title>Usuarios</v-list-item-title>
            </template>

            <v-list-item class="ml-8">
              <v-list-item-icon>
                <v-icon>mdi-account-plus</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Cadastrar Usuario</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

          </v-list-group>
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
      userLogged: {
        type: Object
      }
    },
    components: {
      CartModal,
    },
    methods: {
      logoutUser() {
        localStorage.removeItem('user_logged');
        this.$store.dispatch('setToken', null);
        this.$router.push({ path: '/login' });
      }
    }
  }
</script>
<style>

</style>