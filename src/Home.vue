<template>
   <div>
      <Slider></Slider>
      <div id="content-pro">
         <div class="container">
            <div class="row">
               <div class="col-md my-auto">
                  <!-- .my-auto vertically centers contents -->
                  <img src="assets/images/demo/home-1.jpg" class="img-fluid" alt="Watch in Any Devices">
               </div>
               <div class="col-md my-auto">
                  <!-- .my-auto vertically centers contents -->
                  <h2 class="short-border-bottom">About  Arvest Ug</h2>
                  <p>Arvest is an Online TV show for Agro-Economists standing for Agriculture Research, Value addition, Engineering, Science and Technology (ARVEST). Our goal is to improve agriculture in Uganda through providing Agriculture trainings conducted online, Quality Forums, Practical Education, Access to Loans and market Linkages for AgriBusiness Entrepreneurs</p>
                  <div style="height:15px;"></div>
                  <p>
                     <router-link to="/signup" class="btn btn-green-pro"> GET STARTED </router-link>
                  </p>
               </div>
            </div>
            <!-- close .row -->
            <div class="row">
               <div class="col-md my-auto">
                  <!-- .my-auto vertically centers contents -->
                  <h2 class="short-border-bottom">Watch in HD on the App</h2>
                  <p>Have unlimited access to all our videos, new updates, opportunities and all our services through our mobile app Arvest ug. Simply download the Arvest App on your smartphone or tablet and get started</p>
                  <div style="height:15px;"></div>
                  <p>
                     <router-link to="/" class="btn btn-green-pro"> DOWNLOAD NOW </router-link>
                  </p>
               </div>
               <div class="col-md my-auto">
                  <!-- .my-auto vertically centers contents -->
                  <img src="assets/images/demo/home-2.jpg" class="img-fluid" alt="Make Your Own Playlist">
               </div>
            </div>
            <!-- close .row -->
            <div class="row">
               <div class="col-md my-auto">
                  <!-- .my-auto vertically centers contents -->
                  <img src="assets/images/demo/home-3.jpg" class="img-fluid" alt="Watch in Ultra HD">
               </div>
               <div class="col-md my-auto">
                  <!-- .my-auto vertically centers contents -->
                  <h2 class="short-border-bottom">Watch in HD on your Laptop or TV</h2>
                  <p>With your laptop / desktop or Smart TV click on any browser on your device.Login to your account or create an account here Enjoy unlimited videos of your choice for: free, starters, premium</p>
                  <div style="height:15px;"></div>
                  <p>
                     <router-link to="/signup" class="btn btn-green-pro"> START FOR FREE </router-link>
                  </p>
               </div>
            </div>
            <!-- close .row -->
            <div style="height:35px;"></div>
            <div class="clearfix"></div>
         </div>
         <!-- close .container -->
         <hr>
         <div class="progression-pricing-section-background">
            <div class="container">
               <div class="row">
                  <div class="mx-auto">
                     <div style="height:70px;"></div>
                     <h2 class="short-border-bottom">Our Plans &amp; Pricing</h2>
                  </div>
               </div>
               <!-- close .row -->
               <div style="height:25px;"></div>
               <div class="row">
                  <div class="col-md">
                     <ul class="checkmark-list-pro">
                        <li>24 hour Access anytime anywhere!</li>
                        <li>Thousands of Agriculture lessons and shows</li>
                     </ul>
                  </div>
                  <div class="col-md">
                     <ul class="checkmark-list-pro">
                        <li>Stream on any device Phone, Laptop,Tablet or TV.</li>
                        <li>Download and watch offline.</li>
                     </ul>
                  </div>
                  <div class="col-md">
                     <ul class="checkmark-list-pro">
                        <li>Access to experts to answer your questions</li>
                        <li>Access to affordable agriculture loans</li>
                     </ul>
                  </div>
               </div>
               <!-- close .row -->
               <div class="pricing-table-pro">
                  <div class="row">
                     <div class="col-md">
                        <div class="pricing-table-col">
                           <h6>FREE TRIAL</h6>
                           <h4>Free</h4>
                           <ul>
                              <li>Full HD Videos</li>
                              <li>Watch on any Device</li>
                              <li>20 lessons and Agriculture shows</li>
                              <li>Download Available</li>
                           </ul>
                           <p>
                              <router-link to="/signup" class="btn btn-green-pro"> Choose Plan </router-link>
                           </p>
                        </div>
                        <!-- close .pricing-table-col -->
                     </div>
                     <!-- close .col-md-12 -->
                     <div class="col-md">
                        <div class="pricing-table-col pricing-table-col-shadow-pro">
                           <h6>STARTER</h6>
                           <h4>UGX 2K /24 Hours</h4>
                           <ul>
                              <li>Full HD Videos</li>
                              <li>Watch on any device</li>
                              <li>Unlimited lessons and Agriculture shows</li>
                              <li>Download Available</li>
                           </ul>
                           <p>
                              <router-link to="/signup" class="btn btn-green-pro"> Choose Plan </router-link>
                           </p>
                        </div>
                        <!-- close .pricing-table-col -->
                     </div>
                     <!-- close .col-md-12 -->
                     <div class="col-md">
                        <div class="pricing-table-col">
                           <h6>PREMIUM</h6>
                           <h4>UGX 30K /month</h4>
                           <ul>
                              <li>Full HD Videos</li>
                              <li>Watch on any Device</li>
                              <li>Unlimited lessons and Agriculture shows</li>
                              <li>Download Available</li>
                           </ul>
                           <p>
                              <router-link to="/signup" class="btn btn-green-pro"> Choose Plan </router-link>
                           </p>
                        </div>
                        <!-- close .pricing-table-col -->
                     </div>
                     <!-- close .col-md-12 -->
                  </div>
                  <!-- close .row -->
               </div>
               <!-- close .pricing-table-pro -->
               <div class="clearfix"></div>
            </div>
            <!-- close .container -->
         </div>
         <!-- close .progression-pricing-section-background -->
      </div>
   </div>
</template>
<script>
   import Slider from "./cmps/Slider";
   export default {
      components:{
         'Slider':Slider,
      },
      mounted(){

      },
   }
</script>
<style>
</style>