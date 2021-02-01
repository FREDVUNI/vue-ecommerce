<template>
  <div id="app">
    <app-nav :loggedIn="loggedIn"></app-nav>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar  from "./cmps/Navbar";
export default {
 computed:{
    loggedIn(){
      return this.$store.getters.loginState;
    } 
 },
 created(){
    const expires = localStorage.getItem('expires');
    const token = localStorage.getItem('token');

    if(expires && token){
      var expireMs = new Date(expires)
      var now = new Date()
      now = now.getTime()
      expireMs = expireMs.getTime()
      if(now > expireMs){
        this.$store.dispatch('logout')
      }else{
        this.$store.dispatch('login',expireMs - now)
      }
    }else{
      if(this.$router.currentRoute.name !== 'signin')
        this.$router.push({name:'home'})
      }
    
  },
  name: 'App',
  components:{
    appNav: Navbar, 
  },
  
}
</script>

<style>

</style>
