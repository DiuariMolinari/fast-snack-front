<template>
  <v-app>
    <v-app-bar app dark color="#26a69a">
      <v-toolbar-title>Fast Snack Login</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-card width="500" class="mx-auto mt-9">
        <v-card-title>Login</v-card-title>
        <v-card-text>
          <v-text-field label="Usuário" v-model="user.username" required prepend-icon="mdi-account-circle"/>
           <v-text-field  label="Senha" v-model="user.password" required :type="showPassword ? 'text' : 'password'"  prepend-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"  @click:append="showPassword = !showPassword"/>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="info" @click="login">Entrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-content>

    <template>
 </template>
  </v-app>
</template>

<script>

export default {
  data: () =>({
      showPassword: false,
      user: {
        username:"",
        password:""
      }
  }),
  methods:{
    login() {
      this.$http.post('auth/token', this.user).then(data => {
        this.$store.dispatch('setTokken', data.access_token);
        localStorage.setItem('user_logged', this.user);
        this.$router.push({ path: '/catalog' });
      });
    }
  }
}
</script>