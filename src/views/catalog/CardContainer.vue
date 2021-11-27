<template>
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.id"
          :cols="columns"
        >
          <Card :food="card" />
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import Card from './components/Card.vue'

  export default {
    data: () => ({
      idAdminLogin: localStorage.getItem('user_logged'),
      cards: [],
    }),
    mounted() {
      this.updateCardList();
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
    methods: {
      updateCardList() {
        this.$http.get('foods').then(data => {
          data.forEach(food => {
            const cardData = {
              id: food._id,
              title: food.name,
              description: food.description,
              price: food.price,
              urlImage: food.urlImage
            }
            this.cards.push(cardData);
          });
        });
      }
    }
  }
</script>
<style>

</style>