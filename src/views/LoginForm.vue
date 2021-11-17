<template>
  <v-app>
    <v-app-bar app dark color="#26a69a">
      <v-toolbar-title>Fast Snack Login</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-card width="500" class="mx-auto mt-9">
        <v-card-title>Login</v-card-title>
        <v-card-text>
          <v-text-field label="Usuário" v-model="user.name" required prepend-icon="mdi-account-circle"/>
           <v-text-field  label="Senha" v-model="user.password" required :type="showPassword ? 'text' : 'password'"  prepend-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"  @click:append="showPassword = !showPassword"/>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="success">Registrar</v-btn>
          <v-btn color="info" @click="isValidFields()">Entrar</v-btn>
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
      showPassword:false,
      user:{
        name:"",
        password:""
      }
  }),
  methods:{
    isValidFields(){
      let errors = ""
      if(this.user.name == "" || this.user.password == ""){
        errors += "\r\n Existem campos que não foram preenchidos!"
      }

      if(errors.length > 0){
        alert(errors);
        return false;
      }
      return true;
    }
  }
}
</script>