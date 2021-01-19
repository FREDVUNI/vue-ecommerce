<template>
        <li>
            <router-link :to="'/category/'+ category.slug">
                <img src="assets/images/genres/drama.png" alt="category">
                <h6>{{ category.category }}</h6>
            </router-link>
        </li>
</template>

<script>
export default {
   props:['category', 'index'],
}
</script>

<style>

</style>