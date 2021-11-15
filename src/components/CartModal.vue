<template>
        <v-row justify="space-around">
                <v-dialog transition="dialog-top-transition" max-width="90%" >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="white" v-bind="attrs" v-on="on" icon>
                            <v-icon>mdi-cart</v-icon>
                        </v-btn>
                    </template>
                    <template v-slot:default="dialog">
                        <v-card>
                            <v-toolbar color="#26a69a" dark>
                            </v-toolbar>
                            <v-card-text>
                                
                                    <div class="text-h3 pa-8">
                                        Itens
                                        <v-col >
                                            <v-card  class="d-flex pa-3 ma-2" outlined tile v-for="food in foodList" :key="food.id">
                                                <div class="item">
                                                    <v-img max-height="10%" max-width="10%" :src="food.urlImage" />
                                                    
                                                    <div class="text-h5 pa-2 ms-10">
                                                        {{ food.title }}
                                                    </div>
                                                    <v-spacer>
                                                    </v-spacer>
                                                    <div class="text-h5 me-16" >
                                                        {{ "R$ " + food.price * food.amount }}
                                                    </div>
                                                    <div style="display:flex">
                                                        <v-btn class="mx-2" fab dark small color="red" @click="removeAmount(food)">
                                                            <v-icon  color="white" dark>
                                                                mdi-minus
                                                            </v-icon>
                                                        </v-btn>

                                                        <div class="text-h5">
                                                            <span>{{ food.amount }}</span>
                                                        </div>

                                                        <v-btn class="mx-2" fab dark small color="#02ba70" @click="addAmount(food)">
                                                            <v-icon color="white" dark>
                                                                mdi-plus
                                                            </v-icon>
                                                        </v-btn>
                                                        <div class="remove text-h6 mb-14">
                                                            <a style="color: #ff6a00 !important;" @click="removeItem(food)">Remover</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </v-card>
                                        </v-col>    
                                    </div>

                            </v-card-text>
                            <v-card-actions class="justify-end">
                                <v-btn text @click="dialog.value = false">
                                    Voltar
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>
        </v-row>
</template>

<script>
export default {
    data: () => ({
        foodList: [
            {
                id: 1,
                title: 'Salmão Refogado',
                description: "500g de salmão refogado, acompanhado com salada.",
                price: 25,
                urlImage: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
                amount: 2,
            },
            {
                id: 2,
                title: 'Salmão Refogado',
                description: "500g de salmão refogado, acompanhado com salada.",
                price: 25,
                urlImage: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
                amount: 2,
            },
            {
                id: 3,
                title: 'Salmão Refogado',
                description: "500g de salmão refogado, acompanhado com salada.",
                price: 25,
                urlImage: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
                amount: 2,
            },
            {
                id: 4,
                title: 'Salmão Refogado',
                description: "500g de salmão refogado, acompanhado com salada.",
                price: 25,
                urlImage: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
                amount: 2,
            }
        ]
    }),
    props: {
        isNewCard: {
          type: Boolean,
          default: false,
        }
    },
    methods: {
        addAmount(food) {
            food.amount += 1;
        },
        removeAmount(food) {
            if(food.amount > 0)
            {
                food.amount -= 1;
            }
        },
        removeItem(food){
            this.foodList = this.foodList.filter(f => f.id != food.id)
        },
    },
    mounted(){
        this.$root.$on('addToCart', (food) => this.foodList.push(food));
    },
    components: {
    }
}
</script>

<style>
.item {
    display: inline-flex;
    height: 100%;
    width: 100%;
}
.card-itens {
    margin-top: 10px;
}
.remove {
    position: relative;
    left: -104px;
    top: 57px;
}
</style>