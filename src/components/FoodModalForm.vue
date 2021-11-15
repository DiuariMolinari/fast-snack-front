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
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Nome"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-autocomplete
                  label="Categoria"
                  :items="['Bebida', 'Brasileira', 'Doce', 'Japonesa', 'Lanche', 'Pizza', 'Salgado', 'Vegetariana']"
                ></v-autocomplete>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Preço"
                  type="number"
                  prefix="R$"
                  min="0.1"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Descrição"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Url da Imagem"                  
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
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
    }),
  }
</script>
    
<style>

</style>