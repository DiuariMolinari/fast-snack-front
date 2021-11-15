<template>

    <v-card  v-if="isNewCard" height="280px">
      <v-card-actions class="justify-center center" >
          <FoodModalForm />
      </v-card-actions>
    </v-card>

    <v-card v-else>
        <v-img :src="urlImage" class="white--text align-end image" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
        <v-card-title v-text="title"></v-card-title>
        <v-card-subtitle v-text="description"></v-card-subtitle>
      </v-img>

      <v-card-actions>
        <v-card-title v-text="`R$ ${price}`"></v-card-title>
        <v-spacer></v-spacer>
        <v-btn class="mx-2" fab dark small color="red" @click="removeAmount">
          <v-icon  color="white" dark>
            mdi-minus
          </v-icon>
        </v-btn>
        <div>
          <span>{{amount}}</span>
        </div>
        <v-btn class="mx-2" fab dark small color="#02ba70" v-bind="attrs" v-on="on" @click="addAmount">
          <v-icon color="white" dark>
            mdi-plus
          </v-icon>
        </v-btn>
        <v-spacer></v-spacer>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mx-2" fab dark small color="primary" v-bind="attrs" v-on="on" @click="addToCart">
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
import FoodModalForm from './FoodModalForm.vue'

  export default {
    data: () => ({
        amount: 0,
    }),
    props: {
        id: {
          type: Number,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          default: "",
        },
        price: {
          type: Number,
          required: true,

        },
        urlImage: {
          type: String,
          required: true,

        },
        isNewCard: {
          type: Boolean,
          default: false,
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
        this.amount = 0
      }
    },
    components: {
      FoodModalForm
    }
  }
</script>

<style>
.center {
  position: relative;
  top: 111px;
}
</style>