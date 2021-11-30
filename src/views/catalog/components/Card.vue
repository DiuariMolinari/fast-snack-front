<template>
    <v-card>
        <v-img :src="food.urlImage" class="white--text align-end image" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
        <v-card-title v-text="food.name"></v-card-title>
        <div class="d-flex justify-space-between">
          <v-card-subtitle v-text="food.description"></v-card-subtitle>
          <div class="ma-2" v-if="userLogged">   
            <v-icon  color="red" dark 
              @click="deleteFood" >
                mdi-delete-outline
            </v-icon>
            <v-icon  color="blue" dark 
              @click="$emit('selectCard', food)" >
                mdi-pencil-outline
            </v-icon>
          </div>
        </div>
      </v-img>

      <v-card-actions>
        <v-card-title v-text="`R$ ${food.price.toFixed(2)}`"></v-card-title>
        <v-spacer></v-spacer>
        <v-btn class="mx-2" fab dark x-small color="red" @click="removeAmount">
          <v-icon  color="white" dark >
            mdi-minus
          </v-icon>
        </v-btn>
        <div>
          <span>{{amount}}</span>
        </div>
        <v-btn class="mx-2" fab dark x-small color="#02ba70" v-bind="attrs" v-on="on" @click="addAmount">
          <v-icon color="white" dark>
            mdi-plus
          </v-icon>
        </v-btn>
        <v-spacer></v-spacer>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mx-2" fab dark x-small color="primary" v-bind="attrs" v-on="on" @click="addToCart">
              <v-icon color="white" dark>
                mdi-cart
              </v-icon>
            </v-btn>
          </template>
          <span>Adicionar</span>
        </v-tooltip>

      </v-card-actions>
    </v-card>
</template>

<script>
  export default {
    data: () => ({
        amount: 0,
        userLogged: localStorage.getItem('user_logged')
    }),
    props: {
        food: {
          type: Object
        }
    },

    methods: {
      addAmount() {
        this.amount += 1;
      },
      removeAmount() {
        if(this.amount > 0)
        {
          this.amount -= 1;
        }
      },
      addToCart() {
        this.$root.$emit('addToCart', { 
            id: this.food._id,
            title: this.food.title,
            description: this.food.description,
            price: this.food.price,
            urlImage: this.food.urlImage,
            amount: this.food.amount,
        });

        this.amount = 0
      },
      deleteFood() {
        const config = {
          headers: {
            Authorization: 'Bearer ' + this.$store.getters.getAcessToken
          }
        }
        this.$http.delete(`foods/${this.food._id}`, config).then(() => {
          this.$emit('foodDeleted');
        });
      }
    }
  }
</script>

<style>
.center {
  position: relative;
  top: 111px;
}
</style>