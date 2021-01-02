import Vue from "vue"
import axios from "axios"

const guest = axios.create({
    baseURL: "http://localhost/api/user",
    headers:{
        "content-Type":"application/x-www-form-urlencoded",
        "x-Requested-With":"XMLHttpRequest",
    },
});

Vue.prototype.$guest = guest;
export { guest }