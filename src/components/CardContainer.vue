<template>
     <v-card
    class="mx-auto"
    max-width="1500"
  >
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.id"
          :cols="columns"
        >
          <Card :id="card.id" :title="card.title" :price="card.price" :urlImage="card.urlImage" :isNewCard="card.isNewCard" :description="card.description" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import Card from './Card.vue'

  export default {
    data: () => ({
      idAdminLogin: true,
      cards: [
        { id: 1, isNewCard: false, title: 'Salmão Refogado 1', description: "500g de salmão refogado, acompanhado com salada.",  price: 25, urlImage: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg'},
      ],
    }),
    mounted() {
       this.$root.$on('addNewFood', (food) => {
          food.price.replace(".",",")
          this.cards.push(food);
        });

        if(this.idAdminLogin) {
          this.cards.push({
            isNewCard: true
          })
        }
    },
    components: {
      Card,
    },
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

        return col;
      },
    },
  }
</script>
<style>

</style>