import Vue from "vue"
import Router from "vue-router"
import { use } from "vue/types/umd"
import Signin from "./Signin"
import Signup from "./Signup"
import Admin from "./Admin"

vue.use(Router)

const router = new Router({
    routes:[
        {
            path:"/",
            component:Admin,
            name:"home"
        },
        {
            path:"./signin",
            component:Signin,
            name:"signin"
        },
        {
            path:"./signup",
            component:Signup,
            name:"signup"
        },
    ],
    mode: "history"
})

export default router;

