<template>
  <v-container>
      <v-card>
          <v-data-table 
            class="ma-6"
            :headers="headers"
            :items="demands"
            :search="search">
                <template slot:item._id="{ item }">
                    <v-icon 
                        small
                        class="mr-2"
                        @click="viewDemand(item._id)">
                            mdi-note-text-outline
                    </v-icon>
                    <span> {{ item._id }} </span>
                </template>
                <template slot:item.actions="{ item }">
                    <v-icon 
                        class="mr-2"
                        :color="defineColorStatus(item.status)" 
                        @click="updateDemandStatus(item)">
                            mdi-check-decagram
                    </v-icon>
                </template>
          </v-data-table>
      </v-card>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            demands: [],
            headers: [
                { text: 'Código do pedido', value: '_id' },
                { text: 'Status', value: 'status', sortable: true },
                { text: 'Mesa', value: 'table', sortable: true },
                { value: 'actions' }
            ],
            colorStatus: {
                'AGUARDANDO_CONFIRMAÇÃO': 'red',
                'EM_ANDAMENTO': 'yellow',
                'A_FATURAR': 'orange',
                'CONCLUÍDO': 'green',
            },
        }
    },
    methods: {
        updateDemands() {
            const config = {
                headers: {
                    Authorization: 'Bearer ' + this.$store.getters.getAcessToken
                }
            }

            this.$http.get('demands', config).then(data => {
                this.demands = data
            })
        },
        viewDemand(demandId) {
            this.$router.push(`demand/${demandId}`)
        },
        defineColorStatus(status) {
            return this.colorStatus[status.replaceAll(' ', '_').toUpperCase()]
        },
        updateDemandStatus(demand) {
            if(demand.status != 'Concluído') {
                const statusEnum = {
                    'Aguardando Confirmação': 'WAITING',
                    'Em Andamento': 'IN_PROGRESS',
                    'A Faturar': 'WAIT_BILLING',
                    'Concluido': 'DONE', 
                }
                const config = {
                    headers: {
                        Authorization: 'Bearer ' + this.$store.getters.getAcessToken
                    }
                }

                const statusArray = Object.keys(statusEnum)
                const statusIndex = statusArray.findIndex(status => status == demand.status)
                
                const urlString = `demands/status/${demand._id}/${statusEnum[statusArray[statusIndex + 1]]}`

                this.$http.put(urlString, null,  config).then(() => {
                    this.updateDemands()
                })
            }
            
        }
    },
    mounted() {
        this.updateDemands()
    }
}
</script>

<style>

</style>