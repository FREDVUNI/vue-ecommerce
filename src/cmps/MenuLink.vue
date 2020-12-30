<template>
  <router-link class="normal-item-pro" active-class="current-menu-item" :to="path" tag="li">
      <a>{{text}}</a>
  </router-link>
</template>

<script>
export default {
    props:["text","path"],
   
}
</script>

<style>

</style>