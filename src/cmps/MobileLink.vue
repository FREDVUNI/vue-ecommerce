<template>
  <router-link :to="path" tag="li">
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