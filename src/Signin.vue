<template>
   <div class="">
      <div class="container">
         <div class="row">
            <div class="mx-auto">
               <div style="height:170px;"></div>
               <h2 class="short-border-bottom">Sign in</h2>
            </div>
         </div>
         <div style="height:25px;"></div>
         <div class="mx-auto col-md-6">
            <alert v-if="msg" :msg="msg" :ClassAlert="classAlert"></alert>
            <form id="login" @submit.prevent="signin()"  action="/signin" method="POST">
               <div class="form-group">
                  <label for="email">Email:</label>
                  <input id="email" name="email" class="form-control" type="email" placeholder="Enter your email address." value="" autofocus v-model="email">
               </div>
               <div class="g-mb-35">
                  <div class="row justify-content-between">
                     <div class="col align-self-center ml-3">
                        <label for="password">Password:</label>
                     </div>
                     <div class="col align-self-center text-right">
                        <router-link to="/forgot-password"> Forgot password ?</router-link>
                     </div>
                  </div>
                  <div class="form-group">
                     <input id="password" name="password" class="form-control" type="password" placeholder="Password" value="" v-model="password">
                  </div>
                  <div class="row mt-3 form-group">
                     <button id="loginbtn" class="btn-block btn-green-pro">LOGIN</button>
                  </div>
               </div>
            </form>
             <footer class="text-center mb-5">
                <p class="g-color-gray-dark-v5 g-font-size-13 mb-0">Don't have an account yet ? <router-link to="/signup">signup</router-link>
                </p>
              </footer>
         </div>
         <!-- close .pricing-table-pro -->
         <div class="clearfix"></div>
      </div>
      <!-- close .container -->
   </div>
</template>
<script>
   import Alert from "./cmps/Alert";
   export default {
      data(){
         return{
            token:null,
            expires:null,

            email:"",
            password:"",
            msg:null,
            ClassAlert:null
         }
      },
      methods:{
         signin(){
            const form = new FormData();
            form.append("email",this.email)
            form.append("password",this.password)

            this.$guest
            .post("/login",form)
            .then(res =>{
               this.msg ="Login successful.";
               this.classAlert="success";

               this.email="";
               this.password="";

               this.token = res.data.access_token;
               this.expires = res.data.expires;
               console.log(this.expires)

               const expiresMs = this.expires * 1000;
               const now = new Date();
               const expireDate = new Date(now.getTime() + expiresMs);

               localStorage.setItem("token",this.token);
               localStorage.setItem("expires",expireDate);

               //set up the storage to dispatch
               this.$store.dispatch("login",expiresMs);

              // this.$router.push("/dashboard")
            })
            .catch(err => {
               this.msg = err.response.data.message;
               this.error = err.response.data.error_description;
               this.classAlert = "danger";
            });
         }
      },
      components:{
         Alert
      }
   }
</script>
<style>
   #loginbtn{
      width: 100%;
      margin: 20px 0;
      padding: 10px 0;
      border: none;
      outline: none;
      font-size: 15px;
      font-weight: 600;
      border-radius:0px;
      height: calc(1.6em + 1.625rem);
      cursor: pointer;
    }
    .form-control {
      display: block;
      width: 100%;
      height: calc(1.6em + 1.625rem);
      padding: .375rem .75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: 0px;
      transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
   }
   .alert{
      border-radius: 0px;
   }
   p{
      margin-bottom: 0px;
   }
</style>