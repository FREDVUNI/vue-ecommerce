import Vue from "vue"
import Router from "vue-router"
//import { use } from "vue/types/umd"
import Home from "./Home"
import Signin from "./Signin"
import Signup from "./Signup"
import Newrelease from "./Newrelease"
import Pricing from "./Pricing"
import Admin from "./Admin"

Vue.use(Router)

const router = new Router({
    routes:[
        {
            path:"/",
            component:Home,
            name:"home"
        },
        {
            path:"/new-release",
            component:Newrelease,
            name:"new-release"
        },
        {
            path:"/dashboard",
            component:Admin,
            name:"admin",
            meta: {
                requiresAuth: true
            }
        },
        {
            path:"/pricing",
            component:Pricing,
            name:"pricing"
        },
        {
            path:"/signin",
            component:Signin,
            name:"signin"
        },
        {
            path:"/signup",
            component:Signup,
            name:"signup"
        },
    ],
    mode: "history"
})
router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('token') == null) {
            next({
                path: '/',
                params: { nextUrl: to.fullPath }
            })
        } else {
            let user = JSON.parse(localStorage.getItem('user'))
            if(to.matched.some(record => record.meta.is_admin)) {
                if(user.is_admin == 1){
                    next()
                }
                else{
                    next({ name: 'dashboard'})
                }
            }else {
                next()
            }
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(localStorage.getItem('token') == null){
            next()
        }
        else{
            next({ name: 'dashboard'})
        }
    }else {
        next()
    }
})
export default router;

