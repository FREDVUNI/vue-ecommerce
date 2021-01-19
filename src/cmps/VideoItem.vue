<template>
    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
        <div class="item-listing-container-skrn">
            <router-link :to="'/video/'+ video.slug">
                <img src="assets/images/demo/listing-1.jpg" alt="Listing">
            </router-link>
            <div class="item-listing-text-skrn">
                <div class="item-listing-text-skrn-vertical-align">
                    <h6>
                        <router-link :to="'/video/'+ video.slug">{{video.title}}</router-link>
                    </h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   props:['video', 'index'],
}
</script>

<style>

</style>