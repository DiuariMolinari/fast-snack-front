<template>
  <v-form
  class="formStyle"
    ref="form"
    v-model="valid"
    lazy-validation
  >

  <v-app-bar app dark color="#26a69a">
      <v-toolbar-title>Fast Snack Registration</v-toolbar-title>
    </v-app-bar>

    <v-text-field
      v-model="user.name"
      prepend-icon="mdi-account-circle"
      :counter="10"
      :rules="nameRules"
      label="Nome"
      required
    ></v-text-field>

    <v-text-field
      v-model="user.email"
      prepend-icon="mdi-email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-select
      v-model="user.profile"
      prepend-icon="mdi-account-details"
      :items="perfis"
      :rules="[v => !!v || 'Perfil é obrigatório']"
      label="Perfil"
      required
    ></v-select>

   <v-text-field  label="Senha" v-model="user.password" required :type="showPassword ? 'text' : 'password'"  prepend-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"  @click:append="showPassword = !showPassword"/>
   <v-text-field  label="Confirmar Senha" v-model="user.validatePassword" required :type="showPassword ? 'text' : 'password'"  prepend-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"  @click:append="showPassword = !showPassword"/> 
 
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Cadastrar
    </v-btn>

    <v-btn
      color="info"
      class="mr-4"
      @click="reset"
    >
      Limpar
    </v-btn>

    <v-btn
      color="error"
      @click="resetValidation"
    >
      Validar senha
    </v-btn>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      showPassword:false,
      valid: true,
      user:{
          name:"",
          password:"",
          email:"",
          profile:null,
          validatePassword:"",
      },
      nameRules: [
        v => !!v || 'Nome é obrigatório',
        v => (v && v.length >= 10) || 'O nome deve ter mais de 10 caracteres',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail deve ser válido',
      ],
      perfis: [
        'Administrador',
        'Cliente',
      ],
    }),
    methods: {
      validate () {
        this.isValidFields()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
          if(this.user.password.length > 0 && this.user.validatePassword.length > 0 ){
                this.user.password != this.user.validatePassword ? alert('TESTE: As senha não são iguais'): alert('TESTE: As senha são iguais');
          }
      },
      isValidFields(){
      let errors = ""
      if(this.user.name == "" || this.user.password == "" || this.user.email == "" || this.user.validatePassword == "" || this.user.profile == null){
        errors += "\r\n Existem campos que não foram preenchidos!"
      }

      if(errors.length > 0){
        alert(errors);
        return false;
      }
      return true;
    }
    },
  }
</script>

<style>
.formStyle{
    width: 500px;
    margin-left: 35%;
    margin-top: 100px;
}
</style>