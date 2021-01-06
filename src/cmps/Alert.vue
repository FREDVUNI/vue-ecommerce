<template>
  <div>
    <div :class="'form-group alert alert-'+ ClassAlert" v-html="msg"></div>
  </div>
</template>

<script>
export default {
    props:["msg","ClassAlert"]
}
</script>

<style>

</style>