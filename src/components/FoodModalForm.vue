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
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4" >
                <v-text-field label="Nome" v-model="food.name" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-autocomplete label="Categoria" v-model="food.category" :items="['Bebida', 'Brasileira', 'Doce', 'Japonesa', 'Lanche', 'Pizza', 'Salgado', 'Vegetariana']"></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6" md="4" >
                <v-text-field label="Preço" v-model="food.price" type="number" prefix="R$" min="0.1" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Descrição" v-model="food.description" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Url da Imagem" v-model="food.urlImage" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="cancel()">
            Cancelar
          </v-btn>
          <v-btn color="blue darken-1" text @click="save()">
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
      food: {
        name: "",
        category: "",
        price: 0,
        description: "",
        urlImage: ""
      }
    }),
    methods:{
      clearFood(){
        this.food = {
          name: "",
          category: "",
          price: 0,
          description: "",
          urlImage: ""
        }
      },
      cancel(){
        this.clearFood()
        this.dialog = false
      },
      save(){
        if(this.isValidFields())
        {
          this.$root.$emit('addNewFood', { 
            id: this.food.id,
            title: this.food.name,
            description: this.food.description,
            price: this.food.price,
            urlImage: this.food.urlImage,
          });
          
          this.clearFood()
          this.dialog = false;
        }
      },
      isValidFields(){
        var errors = ""
        if(this.food.name == ""){
          errors += "\r\n Campo nome obrigatório!"
        }
        if(this.food.category == ""){
          errors += "\r\n Campo categoria obrigatório!"
        }
        if(this.food.price == ""){
          errors += "\r\n Campo preço obrigatório!"
        }
        if(this.food.description == ""){
          errors += "\r\n Campo descrição obrigatório!"
        }
        if(this.food.urlImage == ""){
          errors += "\r\n Campo url da imagem obrigatório!"
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

</style>