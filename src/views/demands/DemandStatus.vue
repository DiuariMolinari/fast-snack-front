<template>
    <v-container>
        <v-card>
            <v-card-title>
                Pedido #{{ demand._id }}
            </v-card-title>
            <v-card-text>
                <h2 class="ma-2">Mesa: {{ demand.table }}</h2>
                <v-timeline
                    align-top
                    dense
                >
                    <v-timeline-item
                        v-for="status in allStatus"
                        :color="status.color"
                        :key="status"
                        small
                    >
                        <div>
                            <div class="font-weight-normal">
                            </div>
                            <div>{{ status.name }}</div>
                        </div>
                    </v-timeline-item>
                </v-timeline>

                <div class="ma-6">
                    <div class="item" 
                        v-for="food in demand.foods" 
                        :key="food.title"
                    >
                        <v-img max-height="10%" max-width="10%" :src="food.urlImage" />
                                                        
                        <div class="pa-2 ms-10">
                            {{ food.title }}
                        </div>
                        <v-spacer></v-spacer>
                        <div class="text-h5 me-16" >
                            {{ "R$ " + food.price }}
                        </div>
                    </div>
                </div>
                
            </v-card-text>
            <v-card-actions>
                <div class="ma-4">
                    <v-btn 
                        class="ma-4"
                        color="success"
                        @click="updateDemand"
                    >
                            Atualizar andamento
                    </v-btn>
                    <v-btn
                        color="primary"
                        @click="backToLogin"
                    >
                            Voltar a página inicial
                    </v-btn>
                </div>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    props: {
        demandId: {
            type: Number
        }
    },
    data() {
        return {
            demand: { foods: []}   
        }
    },
    methods: {
        updateDemand() {
            this.$http.get(`demands/${this.demandId}`).then(data => {
                this.demand = data;
            })
        },
        backToLogin() {
            this.$store.dispatch('setTokken', '');
            localStorage.removeItem('user_logged');
            this.$router.push('/login')
        }
    },
    computed: {
        allStatus() {
            const allStatus = [
                {
                    name: 'Aguardando Confirmação',
                    color: 'red'
                }, 
                {
                    name: 'Em Andamento',
                    color: 'yellow'
                }, 
                {
                    name: 'A Faturar',
                    color: 'orange'
                }, 
                {
                    name: 'Concluído',
                    color: 'green'
                }
            ]
            const ultimateStatus = allStatus.findIndex(s => s.name == this.demand.status);
            if(ultimateStatus != allStatus.length) {
                allStatus.splice(ultimateStatus + 1, Number.MAX_VALUE);
            }
            return allStatus;
        }
    },
    created() {
        this.updateDemand();
    }
}
</script>

<style>

</style>