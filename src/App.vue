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
  name: 'App',
  components:{
    appNav: Navbar, 
  }
}
</script>

<style>

</style>
