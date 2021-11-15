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
          <Card :title="card.title" :price="card.price" :urlImage="card.src" :isNewCard="card.isNewCard" :description="card.description" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import Card from './Card.vue'

  export default {
    data: () => ({
      cards: [
        { id: 1, isNewCard: true,  title: 'Salmão Refogado', description: "500g de salmão refogado, acompanhado com salada.",  price: 25, src: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg'},
        { id: 2, isNewCard: false, title: 'Salmão Refogado', description: "500g de salmão refogado, acompanhado com salada.",  price: 25, src: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg'},
        { id: 3, isNewCard: false, title: 'Salmão Refogado', description: "500g de salmão refogado, acompanhado com salada.",  price: 25, src: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg'},
        { id: 4, isNewCard: false, title: 'Salmão Refogado', description: "500g de salmão refogado, acompanhado com salada.",  price: 25, src: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg'},
        { id: 5, isNewCard: false, title: 'Salmão Refogado', description: "500g de salmão refogado, acompanhado com salada.",  price: 25, src: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg'},
        { id: 6, isNewCard: false, title: 'Salmão Refogado', description: "500g de salmão refogado, acompanhado com salada.",  price: 25, src: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg'},
        { id: 7, isNewCard: false, title: 'Salmão Refogado', description: "500g de salmão refogado, acompanhado com salada.",  price: 25, src: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg'},
      ],
    }),
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