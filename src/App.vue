<template>
  <div id="app">
    <app-nav></app-nav>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar  from "./cmps/Navbar";
export default {
  name: 'App',
  components:{
    appNav: Navbar, 
  }
}
</script>

<style>

</style>
