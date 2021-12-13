import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://fast-snack-back-heroku.herokuapp.com/api/v1/'
        });

        Vue.prototype.$http.interceptors.response.use(res => res.data, 
            error => {
                if(error.response.status == 401) {
                    global.location.href = `${global.location.origin}/login`;
                }
            });
    }
})