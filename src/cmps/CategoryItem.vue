<template>
        <li>
            <router-link :to="'/category/'+ category.slug">
                <img src="http://localhost/agronet/assets/backend/images/uploads/categories/category.png" alt="category">
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