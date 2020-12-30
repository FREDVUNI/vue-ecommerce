import Vue from "vue"
import Router from "vue-router"
//import { use } from "vue/types/umd"
import Home from "./Home"
import Signin from "./Signin"
import Signup from "./Signup"
import Newrelease from "./Newrelease"
import Pricing from "./Pricing"
import Admin from "./Admin"

vue.use(Router)

const router = new Router({
    routes:[
        {
            path:"/",
            component:Home,
            name:"home"
        },
        {
            path:"./new-release",
            component:Newrelease,
            name:"new-release"
        },
        {
            path:"./dashboard",
            component:Admin,
            name:"admin"
        },
        {
            path:"./pricing",
            component:Pricing,
            name:"pricing"
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

