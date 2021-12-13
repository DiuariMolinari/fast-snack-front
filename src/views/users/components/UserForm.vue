<template>
  <v-dialog
    max-width="1000px"
    persistent 
    :value="true"
  >
    <v-card>
      <v-card-title>
        Salvar Usuário
      </v-card-title>
      <v-card-text>
        <v-form
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

        <v-text-field  label="Senha"
          v-model="user.password" 
          required :type="showPassword ? 'text' : 'password'"  
          prepend-icon="mdi-lock" 
          :rules="passwordRules"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"  
          @click:append="showPassword = !showPassword"/>

        <v-text-field  label="Confirmar Senha"
          v-model="user.validatePassword"
          :rules="[(user.password === user.validatePassword) || 'A senha deve coincidir']"
          required :type="showConfirmPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock" 
          :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showConfirmPassword = !showConfirmPassword"/> 
        </v-form>
      </v-card-text>
      <v-card-actions>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="saveUser"
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
            class="mr-4"
            @click="$emit('closeForm')"
          >
            Cancelar
          </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    data: () => ({
      showPassword:false,
      showConfirmPassword: false,
      valid: true,
      user: {},
      nameRules: [
        v => !!v || 'Nome é obrigatório'
      ],
      passwordRules : [
        v => (v && v.length >= 10) || 'Senha deve conter mais de 10 caracteres'
      ],
      emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => /.+@.+\..+/.test(v) || 'E-mail deve ser válido',
      ]
    }),
    methods: {
      saveUser () {
        const userToSave = { ...this.user }
        delete userToSave.validatePassword
        userToSave.office = 'Administrador'
        if(this.$refs.form.validate()) {
          const config = {
            headers: {
              Authorization: 'Bearer ' + this.$store.getters.getAcessToken
            }
          }

          this.$http.post('users', userToSave, config).then(() => {
            this.$emit('userSaved')
          })
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
          if(this.user.password.length > 0 && this.user.validatePassword.length > 0 ){
                this.user.password != this.user.validatePassword ? alert('TESTE: As senha não são iguais'): alert('TESTE: As senha são iguais');
          }
      },
    },
  }
</script>

<style>
</style>