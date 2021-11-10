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
      
        <v-row>
          <v-col md="4">
            <v-text-field ></v-text-field>
          </v-col>
        </v-row>

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
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</div>
 
</template>

<script>
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
    }
  }
</script>
<style>

</style>