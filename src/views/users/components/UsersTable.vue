<template>
  <v-conteiner>
        <v-data-table 
            class="ma-6"
            :headers="headers"
            :items="users">
                <template v-slot:item.actions="{ item }">
                    <v-icon  color="red" dark 
                        @click="$emit('deleteUser', item)" >
                            mdi-delete-outline
                    </v-icon>
                    <v-icon  color="blue" dark 
                        @click="$emit('selectUser', item)" >
                            mdi-pencil-outline
                    </v-icon>
                </template>
        </v-data-table>
  </v-conteiner>
</template>

<script>
export default {
    props: { users: {} },
    data() {
        return {
            headers: [
                { text: 'Código', value: '_id' },
                { text: 'E-mail', value: 'email', sortable: true },
                { text: 'Nome', value: 'name', sortable: true },
                { text: 'Senha', value: 'password' },
                { value: 'actions' }
            ]
        }
    }
}
</script>

<style>

</style>