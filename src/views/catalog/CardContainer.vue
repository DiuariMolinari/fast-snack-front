<template>
    <v-container fluid>
      <v-row>
        <v-col :cols="columns" v-if="idAdminLogin">
          <v-card height="280px" @click="showForm = true">
            <v-card-actions class="justify-center center" >
              <v-btn
                elevation="2"
                large
                color="secondary"
              ><v-icon>mdi-plus</v-icon></v-btn>
              <v-card-title> Adicionar um novo alimento </v-card-title>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col
          v-for="card in cards"
          :key="card.id"
          :cols="columns"
        >
          <Card 
            :food="card" 
            @foodDeleted="updateCardList" 
            @selectCard="selectCard"  
          />
        </v-col>
      </v-row>

      <FoodModalForm
        :food="selectedCard" 
        @foodSaved="updateCardList"
        @cancel="reset"
        v-if="showForm"
      />
    </v-container>
</template>

<script>
import Card from './components/Card.vue'
import FoodModalForm from './components/FoodModalForm.vue'

  export default {
    components: {
      Card,
      FoodModalForm
    },
    data: () => ({
      idAdminLogin: localStorage.getItem('user_logged'),
      cards: [],
      selectedCard: {},
      showForm: false,
    }),
    computed: {
      columns: function() {
        var col = 6;
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': { col = 12 ; break; }
          case 'sm': { col = 6;  break; }
          case 'md': { col = 4;  break; }
          case 'lg': { col = 4;  break; }
          case 'xl': { col = 4;  break; }
        }

        return col
      },
    },
    methods: {
      updateCardList() {
        this.$http.get('foods').then(data => {
          this.cards = data
          this.reset();
        })
      },
      selectCard(card) {
        const cardToSelect = { ...card }
        this.selectedCard = cardToSelect
        this.showForm = true
      },
      reset() {
        this.showForm = false
        this.selectedCard = {}
      }
    },
    mounted() {
      this.updateCardList()
    }
  }
</script>
<style>

</style>