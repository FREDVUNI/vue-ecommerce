<template>
 <div>
  <div v-if="video">
   <main id="col-main">
   <div id="movie-detail-header-pro" style="background-image:url('images/demo/dashboard-movie-poster.jpg')">
      <div class="progression-studios-slider-more-options">
         <i class="fas fa-ellipsis-h"></i>
         <ul>
            <li><a href="#!">Add to Favorites</a></li>
            <li><a href="#!">Add to Watchlist</a></li>
            <li><a href="#!">Add to Playlist</a></li>
            <li><a href="#!">Share...</a></li>
            <li><a href="#!">Write A Review</a></li>
         </ul>
      </div>
      <iframe  width="100%" height="500" :src="video.video" frameborder='0' allowfullscreen></iframe>
      <!-- close #movie-detail-header-media -->
   </div>
   <!-- close #movie-detail-header-pro -->
   <div id="movie-detail-rating">
      <div class="dashboard-container">
         <div class="row">
            <div class="col-sm">
               <h4>{{video.title}}</h4>
            </div>
         </div>
         <!-- close .row -->
      </div>
      <!-- close .dashboard-container -->
   </div>
   <!-- close #movie-detail-rating -->
   <div class="dashboard-container">
      <div class="movie-details-section">
         <h2>Description</h2>
         <p>{{ video.location }}.</p>
         <p>{{ video.phone }}.</p>
         <p>{{ video.farmername }}.</p>
         <p>{{ video.category }}.</p>
      </div>
      <!-- close .movie-details-section -->
      <div class="movie-details-section">
         <h2>Similar Videos</h2>
         <div class="row">
            <div class="col-12 col-md-6 col-lg-6 col-xl-4">
               <div class="item-listing-container-skrn">
                  <a href="dashboard-movie-profile.html"><img src="images/demo/listing-4.jpg" alt="Listing"></a>
                  <div class="item-listing-text-skrn">
                     <div class="item-listing-text-skrn-vertical-align">
                        <h6><a href="dashboard-movie-profile.html">Bad Neighbors 2</a></h6>
                        <div
                           class="circle-rating-pro"
                           data-value="0.72"
                           data-animation-start-value="0.72"
                           data-size="32"
                           data-thickness="3"
                           data-fill="{
                           &quot;color&quot;: &quot;#42b740&quot;
                           }"
                           data-empty-fill="#def6de"
                           data-reverse="true"
                           ><span style="color:#42b740;">7.2</span></div>
                     </div>
                     <!-- close .item-listing-text-skrn-vertical-align -->
                  </div>
                  <!-- close .item-listing-text-skrn -->
               </div>
               <!-- close .item-listing-container-skrn -->
            </div>
            <!-- close .col -->
            <div class="col-12 col-md-6 col-lg-6 col-xl-4">
               <div class="item-listing-container-skrn">
                  <a href="dashboard-movie-profile.html"><img src="images/demo/listing-5.jpg" alt="Listing"></a>
                  <div class="item-listing-text-skrn">
                     <div class="item-listing-text-skrn-vertical-align">
                        <h6><a href="dashboard-movie-profile.html">Star Wars: Rogue One</a></h6>
                        <div
                           class="circle-rating-pro"
                           data-value="0.86"
                           data-animation-start-value="0.86"
                           data-size="32"
                           data-thickness="3"
                           data-fill="{
                           &quot;color&quot;: &quot;#42b740&quot;
                           }"
                           data-empty-fill="#def6de"
                           data-reverse="true"
                           ><span style="color:#42b740;">8.6</span></div>
                     </div>
                     <!-- close .item-listing-text-skrn-vertical-align -->
                  </div>
                  <!-- close .item-listing-text-skrn -->
               </div>
               <!-- close .item-listing-container-skrn -->
            </div>
            <!-- close .col -->
            <div class="col-12 col-md-6 col-lg-6 col-xl-4">
               <div class="item-listing-container-skrn">
                  <a href="dashboard-movie-profile.html"><img src="images/demo/listing-6.jpg" alt="Listing"></a>
                  <div class="item-listing-text-skrn">
                     <div class="item-listing-text-skrn-vertical-align">
                        <h6><a href="dashboard-movie-profile.html">The Imitation Game</a></h6>
                        <div
                           class="circle-rating-pro"
                           data-value="0.6"
                           data-animation-start-value="0.6"
                           data-size="32"
                           data-thickness="3"
                           data-fill="{
                           &quot;color&quot;: &quot;#ff4141&quot;
                           }"
                           data-empty-fill="#ffe1e1"
                           data-reverse="true"
                           ><span style="color:#ff4141;">6.0</span></div>
                     </div>
                     <!-- close .item-listing-text-skrn-vertical-align -->
                  </div>
                  <!-- close .item-listing-text-skrn -->
               </div>
               <!-- close .item-listing-container-skrn -->
            </div>
            <!-- close .col -->
         </div>
         <!-- close .row -->
      </div>
      <!-- close .movie-details-section -->
   </div>
   <!-- close .dashboard-container -->
</main>
  </div>
  <div v-else>
    
  </div>
</div>  
</template>

<script>
export default {
    data(){
        return{
            video:false,
        }
    },
    methods:{
        getvideo(){
          var slug = this.$route.params.slug
          this.$api.get("/video/" + slug)
          .then(res=>{
              this.video = res.data
          })
          .catch(err=>{
              console.log(err.response)
          })
        }
    },
    created(){
        this.getvideo();
    },
    computed: {
    
   },
}
</script>

<style>

</style>