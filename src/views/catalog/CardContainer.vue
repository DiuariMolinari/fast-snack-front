<template>
    <v-container fluid>
      <v-row>
        <v-col :cols="columns" v-if="idAdminLogin">
          <v-card height="280px">
            <v-card-actions class="justify-center center" >
              <FoodModalForm 
                @foodCreated="updateCardList"
              />
            </v-card-actions>
          </v-card>
        </v-col>

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
import FoodModalForm from './components/FoodModalForm.vue'

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
      FoodModalForm
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
          this.cards = data;
        });
      }
    }
  }
</script>
<style>

</style>