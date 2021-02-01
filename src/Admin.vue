<template>
 <div>
   <main id="col-main">
     <FlexSlider></FlexSlider>
      <!-- close .progression-studios-slider - See /js/script.js file for options -->
  <ul class="dashboard-genres-pro">
     <div class="row">
      <CategoryItem v-for="(category,index) in categories" :key="category.category_id" :category="category" :index="index"></CategoryItem>
     </div>
  </ul>
      <div class="clearfix"></div>
      <div class="dashboard-container">
         <h5>Videos</h5>
         <div class="row">
            <VideoItem  v-for="(video,index) in videos" :key="video.video_id" :video="video" :index="index"></VideoItem>
         </div>
         <ul class="page-numbers">
            <li><a class="previous page-numbers" href="#!"><i class="fas fa-chevron-left"></i></a></li>
            <li><span class="page-numbers current">1</span></li>
            <li><a class="page-numbers" href="#!">2</a></li>
            <li><a class="page-numbers" href="#!">3</a></li>
            <li><a class="page-numbers" href="#!">4</a></li>
            <li><a class="next page-numbers" href="#!"><i class="fas fa-chevron-right"></i></a></li>
         </ul>
      </div>
      <!-- close .dashboard-container -->
   </main>
</div>
</template>

<script>
import CategoryItem from "./cmps/CategoryItem";
import VideoItem from "./cmps/VideoItem";
import FlexSlider from "./cmps/FlexSlider";

export default {
   data(){
      return{
         category_id: null,
         categories:[],
         description:"",
         video_id:null,
         videos:[],
      };
   },
   methods:{
      getcategories(){
         this.$api
         .get('/categories')
         .then(res=>{
            this.categories = res.data 
         })
         .catch(err => {
            this.msg = err.response.data.message;
            this.classAlert = "danger";

            console.log(err.response)
         })
      },
      getvideos(){
         this.$api
         .get('/videos')
         .then(res=>{
            this.videos = res.data 
         })
         .catch(err => {
            this.msg = err.response.data.message;
            this.classAlert = "danger";

            console.log(err.response)
         })
      },
   },
   components:{
      CategoryItem,
      VideoItem,
      FlexSlider
   },
   mounted: function() {
    //flexslider();
   },
   created(){
      this.getcategories();
      this.getvideos();
   },
}
</script>

<style>

</style>