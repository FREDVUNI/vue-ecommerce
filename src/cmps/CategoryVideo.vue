<template>
    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
        <div class="item-listing-container-skrn">
            <router-link :to="'/video/'+ cat.slug">
                <img src="http://localhost/agronet/assets/backend/images/uploads/videos/category.jpg" alt="video">
            </router-link>
            <div class="item-listing-text-skrn">
                <div class="item-listing-text-skrn-vertical-align">
                    <h6>
                        <router-link :to="'/video/'+ cat.slug">{{cat.title}}</router-link>
                    </h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   props:['cat', 'index'],
}
</script>

<style>

</style>