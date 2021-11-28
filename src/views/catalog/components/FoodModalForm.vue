<template>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
            <v-icon color="white" dark>
                mdi-plus
            </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="justify-center">
          <span class="text-h5">Novo Alimento</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-row>
              <v-col cols="12" sm="6" md="4" >
                <v-text-field label="Nome" v-model="food.name" :rules="[v => !!v || 'Preencha o campo nome']"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-autocomplete label="Categoria" v-model="food.category" :items="['Bebida', 'Brasileira', 'Doce', 'Japonesa', 'Lanche', 'Pizza', 'Salgado', 'Vegetariana']" :rules="[v => !!v || 'Preencha o campo categoria']"></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6" md="4" >
                <v-text-field label="Preço" v-model.number="food.price" type="number" prefix="R$" min="0.1" :rules="[v => !!v || 'Preencha o campo preço']"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Descrição" v-model="food.description" :rules="[v => !!v || 'Preencha o campo descrição']"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Url da Imagem" v-model="food.urlImage" :rules="[v => !!v || 'Preencha o campo da imagem']"></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="reset">
            Cancelar
          </v-btn>
          <v-btn color="blue darken-1" text @click="save">
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    data: () => ({
      dialog: false,
      food: {}
    }),
    methods:{
      reset(){
        this.food = {}
        this.dialog = false
      },
      save(){
        if(this.$refs.form.validate()) {
          const config = {
            headers: {
              Authorization: 'Bearer ' + this.$store.getters.getAcessToken
            }
          }
          const newFood = { ...this.food } 
          this.$http.post('foods', newFood, config).then(() => {
            this.$emit('foodCreated')
            this.reset()
          })
        }
      }
    },
  }
</script>
    
<style>

</style>