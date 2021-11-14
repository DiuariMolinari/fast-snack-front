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
              color="red"
              v-bind="attrs"
              v-on="on"
              @click="RemoveAmount"
            >
              <v-icon
                color="white"
                dark
              >
                mdi-minus
              </v-icon>
            </v-btn>
            
          </template>
          <span>Remover</span>
        </v-tooltip>

        <div>
          <span>{{amount}}</span>
        </div>

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
              @click="AddAmount"
            >
              <v-icon
                color="white"
                dark
              >
                mdi-plus
              </v-icon>
            </v-btn>
            
          </template>
          <span>Adicionar</span>
        </v-tooltip>




      </v-card-actions>
    </v-card>

    
    
</template>

<script>
import ModalForm from './ModalForm.vue'

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
      AddAmount() {
        this.amount += 1;
      },
      RemoveAmount() {
        if(this.amount > 0)
        {
          this.amount -= 1;
        }
      },
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