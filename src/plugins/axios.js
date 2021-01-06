import Vue from "vue"
import axios from "axios"

const guest = axios.create({
    baseURL: "http://localhost/agronet/api/user",
    headers:{
        "Content-Type":'application/x-www-form-urlencoded',
        "X-Requested-With":'XMLHttpRequest',
    },
});

Vue.prototype.$guest = guest;
export { guest };