<template>
  <div>
    <div :class="'alert alert-'+ activeClass +'form-group mt-2'" v-html="msg"></div>
  </div>
</template>

<script>
export default {
    props:["msg","activeClass"]
}
</script>

<style>

</style>