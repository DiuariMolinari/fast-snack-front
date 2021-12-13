<template>
    <v-conteiner>
        <v-btn
            color="#26a69a"
            style="color: white"
            @click="formDialog = true"
            class="ma-4">
                Adicionar Usuário
        </v-btn>
        <v-card>
            <UsersTable 
                :users="users"
                @deleteUser="deleteUser" />
        </v-card>
        <UserForm 
            v-if="formDialog"
            @closeForm="formDialog = false"
            @userSaved="updateUsers"    
        />
    </v-conteiner>
</template>

<script>
import UsersTable from './components/UsersTable.vue'
import UserForm from './components/UserForm.vue'

export default {
    components: { UsersTable, UserForm },
    data() {
        return {
            users: [],
            formDialog: false
        }
    },
    methods: {
        updateUsers() {
            const config = {
                headers: {
                    Authorization: 'Bearer ' + this.$store.getters.getAcessToken
                }
            }
            this.$http.get('users', config).then(data => {
                this.users = data
                this.formDialog = false
            })
        },
        deleteUser(user) {
            const userToDelete = { ...user }
            const config = {
                headers: {
                    Authorization: 'Bearer ' + this.$store.getters.getAcessToken
                }
            }
            this.$http.delete(`users/${userToDelete._id}`, config, userToDelete).then(() => {
                this.updateUsers();
            })
        }
    },
    mounted() {
        this.updateUsers()
    }
}

</script>
<style>

</style>