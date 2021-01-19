<template>
<div>
  <div v-if="category">
     <div id="col-main">
        YESSSSSSS
     </div>
  </div>
  <div v-else>
    <main id="col-main">
        <div class="flexslider progression-studios-dashboard-slider">
         <ul class="slides">
            <li class="progression_studios_animate_in">
               <div class="progression-studios-slider-dashboard-image-background" style="background-image:url(assets/images/demo/dashboard-slide-2.jpg);">
                  <div class="progression-studios-slider-display-table">
                     <div class="progression-studios-slider-vertical-align">
                        <div class="container">
                           <div class="progression-studios-slider-dashboard-caption-width">
											<div class="progression-studios-slider-caption-align">
												<h6 class="light-fonts-pro">Playlist of the Day</h6>
												<h2 class="light-fonts-pro"><a href="#!">Best Movies of Quentin Tarantino</a></h2>
												<br>
												<a class="btn btn-green-pro btn-slider-pro" href="#!"><i class="fas fa-plus"></i> Subscribe</a>
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
												<div class="clearfix"></div>
												<br>
												<img src="images/demo/user-5.jpg" alt="Starring" class="created-by-avatar">
												<h5 class="light-fonts-pro created-by-heading-pro">Created by: Richard S. Castellano</h5>
												<h6 class="light-fonts-pro created-by-heading-pro">8 Movies, 18 hrs and 24 mins</h6>
											</div><!-- close .progression-studios-slider-caption-align -->
										</div>
                           <!-- close .progression-studios-slider-caption-width -->
                        </div>
                        <!-- close .container -->
                     </div>
                     <!-- close .progression-studios-slider-vertical-align -->
                  </div>
                  <!-- close .progression-studios-slider-display-table -->
                  <div class="progression-studios-slider-mobile-background-cover-dark"></div>
               </div>
               <!-- close .progression-studios-slider-image-background -->
            </li>
         </ul>
      </div>
      <!-- close .progression-studios-slider - See /js/script.js file for options -->
		<div class="dashboard-container">
				<ul class="dashboard-sub-menu">
					<li class="current"><a href="#!">Most Popular</a></li>
					<li><a href="#!">Recommended</a></li>
					<li><a href="#!">Recently Added</a></li>
					<li><a href="#!">My Playlists</a></li>
				</ul><!-- close .dashboard-sub-menu -->
				<div class="row">
					<div class="col-12 col-md-6 col-lg-4 col-xl-3">
						<div class="item-playlist-container-skrn">
							<a href="#!"><img src="images/demo/playlist-1.jpg" alt="Listing"></a>
							<div class="item-playlist-text-skrn">
								<img src="images/demo/user-6.jpg" alt="User Profile">
								<h5><a href="#!">By: Richard Castellano</a></h5>
								<h6>8 Movies, 18 hrs 24 mins</h6>
							</div><!-- close .item-listing-text-skrn -->
						</div><!-- close .item-playlist-container-skrn -->
					</div><!-- close .col -->
					<div class="col-12 col-md-6 col-lg-4 col-xl-3">
						<div class="item-playlist-container-skrn">
							<a href="#!"><img src="images/demo/playlist-2.jpg" alt="Listing"></a>
							<div class="item-playlist-text-skrn">
								<img src="images/demo/user-7.jpg" alt="User Profile">
								<h5><a href="#!">By: Dan Vissner</a></h5>
								<h6>8 Movies, 18 hrs 24 mins</h6>
							</div><!-- close .item-listing-text-skrn -->
						</div><!-- close .item-playlist-container-skrn -->
					</div><!-- close .col -->
					<div class="col-12 col-md-6 col-lg-4 col-xl-3">
						<div class="item-playlist-container-skrn">
							<a href="#!"><img src="images/demo/playlist-3.jpg" alt="Listing"></a>
							<div class="item-playlist-text-skrn">
								<img src="images/demo/user-8.jpg" alt="User Profile">
								<h5><a href="#!">By: Abbie Matsumoto</a></h5>
								<h6>8 Movies, 18 hrs 24 mins</h6>
							</div><!-- close .item-listing-text-skrn -->
						</div><!-- close .item-playlist-container-skrn -->
					</div><!-- close .col -->
					<div class="col-12 col-md-6 col-lg-4 col-xl-3">
						<div class="item-playlist-container-skrn">
							<a href="#!"><img src="images/demo/playlist-4.jpg" alt="Listing"></a>
							<div class="item-playlist-text-skrn">
								<img src="images/demo/user-9.jpg" alt="User Profile">
								<h5><a href="#!">By: Jad Limcaco</a></h5>
								<h6>8 Movies, 18 hrs 24 mins</h6>
							</div><!-- close .item-listing-text-skrn -->
						</div><!-- close .item-playlist-container-skrn -->
					</div><!-- close .col -->
					<div class="col-12 col-md-6 col-lg-4 col-xl-3">
						<div class="item-playlist-container-skrn">
							<a href="#!"><img src="images/demo/playlist-5.jpg" alt="Listing"></a>
							<div class="item-playlist-text-skrn">
								<img src="images/demo/user-7.jpg" alt="User Profile">
								<h5><a href="#!">By: Namie Amuro</a></h5>
								<h6>8 Movies, 18 hrs 24 mins</h6>
							</div><!-- close .item-listing-text-skrn -->
						</div><!-- close .item-playlist-container-skrn -->
					</div><!-- close .col -->
					<div class="col-12 col-md-6 col-lg-4 col-xl-3">
						<div class="item-playlist-container-skrn">
							<a href="#!"><img src="images/demo/playlist-6.jpg" alt="Listing"></a>
							<div class="item-playlist-text-skrn">
								<img src="images/demo/user-8.jpg" alt="User Profile">
								<h5><a href="#!">By: Daniel Stewart</a></h5>
								<h6>8 Movies, 18 hrs 24 mins</h6>
							</div><!-- close .item-listing-text-skrn -->
						</div><!-- close .item-playlist-container-skrn -->
					</div><!-- close .col -->
					<div class="col-12 col-md-6 col-lg-4 col-xl-3">
						<div class="item-playlist-container-skrn">
							<a href="#!"><img src="images/demo/playlist-7.jpg" alt="Listing"></a>
							<div class="item-playlist-text-skrn">
								<img src="images/demo/user-9.jpg" alt="User Profile">
								<h5><a href="#!">By: Richard Chastain</a></h5>
								<h6>8 Movies, 18 hrs 24 mins</h6>
							</div><!-- close .item-listing-text-skrn -->
						</div><!-- close .item-playlist-container-skrn -->
					</div><!-- close .col -->
					<div class="col-12 col-md-6 col-lg-4 col-xl-3">
						<div class="item-playlist-container-skrn">
							<a href="#!"><img src="images/demo/playlist-8.jpg" alt="Listing"></a>
							<div class="item-playlist-text-skrn">
								<img src="images/demo/user-10.jpg" alt="User Profile">
								<h5><a href="#!">By: Daniel Stewart</a></h5>
								<h6>8 Movies, 18 hrs 24 mins</h6>
							</div><!-- close .item-listing-text-skrn -->
						</div><!-- close .item-playlist-container-skrn -->
					</div><!-- close .col -->
				</div><!-- close .row -->
				<ul class="page-numbers">
					<li><a class="previous page-numbers" href="#!"><i class="fas fa-chevron-left"></i></a></li>
					<li><span class="page-numbers current">1</span></li>
					<li><a class="page-numbers" href="#!">2</a></li>
					<li><a class="page-numbers" href="#!">3</a></li>
					<li><a class="page-numbers" href="#!">4</a></li>
					<li><a class="next page-numbers" href="#!"><i class="fas fa-chevron-right"></i></a></li>
				</ul>
		</div><!-- close .dashboard-container -->
	</main>
  </div>
</div>  
</template>

<script>
export default {
    data(){
        return{
            category:false,
        }
    },
    methods:{
        get(){
          var slug = this.$route.params.slug
          this.$api.get("/category/" + slug)
          .then(res=>{
              this.category = res.data
          })
          .catch(err=>{
              console.log(err.response)
          })
        }
    },
    created(){
        this.get()
    },
}
</script>

<style>

</style>