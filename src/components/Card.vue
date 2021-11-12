<template>

    <v-card  v-if="isNewCard" height="280px">
      <v-card-actions class="justify-center center" >
          <ModalForm />
      </v-card-actions>
    </v-card>

    <v-card v-else>
        <v-img
        :src="urlImage"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      >
        <v-card-title v-text="title"></v-card-title>
      </v-img>

      <v-card-actions>
        <v-card-title v-text="`R$ ${price}`"></v-card-title>
        <v-spacer></v-spacer>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="primary"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon
                color="white"
                dark
              >
                mdi-cart
              </v-icon>
            </v-btn>
            
          </template>
          <span>{{ toolTip }}</span>
        </v-tooltip>
      </v-card-actions>
    </v-card>

    
    
</template>

<script>
import ModalForm from './ModalForm.vue'

  export default {
    data: () => ({

    }),
    props: {
        title: {
          type: String,
          default : '',
        },
        price: {
          type: Number,
          default : 0,
        },
        urlImage: {
          type: String,
          default : '',
        },
        toolTip: {
          type: String,
          default: 'Adicionar ao carrinho'
        },
        isNewCard: {
          type: Boolean,
          default: false
        }
    },

    methods: {
    },
    components: {
      ModalForm
    }
  }
</script>

<style>
.center {
  position: relative;
  top: 111px;
}
</style>