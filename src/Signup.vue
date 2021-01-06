<template>
   <div class="">
      <div class="container">
         <div class="row">
            <div class="mx-auto">
               <div style="height:170px;"></div>
               <h2 class="short-border-bottom">Sign up</h2>
            </div>
         </div>
         <!-- close .row -->
         <div style="height:25px;"></div>
         <div class="mx-auto col-md-8">
            <form @submit.prevent="register()" action="/register" method="POST">
               <div class="form-group">
                  <label for="firstname">First name:</label>
                  <input id="firstname" name="firstname" class="form-control" type="text" placeholder="Enter your first name." value="" autofocus v-model="firstname">
               </div>
               <div class="form-group">
                  <label for="lastname">Last name:</label>
                  <input id="lastname" name="lastname" class="form-control" type="text" placeholder="Enter your last name." value="" v-model="lastname">
               </div>
               <div class="form-group">
                  <label for="email">Email:</label>
                  <input id="email" name="email" class="form-control" type="email" placeholder="Enter your email address." value="" v-model="email">
               </div>
               <div class="form-group">
                  <label for="phone">Phone:</label>
                  <input id="phone" name="phone" class="form-control" type="text" placeholder="Enter your phone." value="" v-model="phone">
               </div>
               <div class="form-group">
                  <label for="gender">Gender:</label>
                  <select name="gender" id="gender" class="form-control" v-model="gender">
                     <option value="">Choose a gender</option>
                     <option value="Female">Female</option>
                     <option value="Male">Male</option>
                  </select>
               </div>
               <div class="form-group">
                  <label for="password">Password:</label>
                  <input id="password" name="password" class="form-control" type="password" placeholder="Enter your password." value="" v-model="password">
               </div>
               <div class="form-group">
                  <label for="confirm">Confirm Password:</label>
                  <input id="confirm" name="confirm" class="form-control" type="password" placeholder="Confirm your password." value="" v-model="confirm">
               </div>
               <div class="checkbox">
                  <div class="form-group">
                     <label>
                     <input type="checkbox" id="tcs" class="" name="tcs" value="1" v-model="tcs"> 
                     I accept the <a href="#">Terms and Conditions</a>
                     </label>
                  </div>
               </div>
               <div class="g-mb-35">
                  <div class="row mt-3 form-group">
                     <button id="registerbtn" class="btn-block btn-green-pro">REGISTER</button>
                  </div>
               </div>
               <alert v-if="msg" :msg="msg" :ClassAlert="classAlert"></alert>
            </form>
         </div>
         <!-- close .pricing-table-pro -->
         <div class="clearfix"></div>
      </div>
      <!-- close .container -->
   </div>
</template>
<script>
   import Alert from "./cmps/Alert"
   export default {
      data(){
         return{
            firstname:"",
            lastname:"",
            email:"",
            phone:"",
            gender:"",
            password:"",
            confirm:"",
            tcs:"",
            msg:null,
            classAlert:null
         };
      },
      methods:{
         register(){
            const form =  new FormData();
            form.append("firstname", this.firstname)
            form.append("lastname", this.lastname)
            form.append("email", this.email)
            form.append("phone", this.phone)
            form.append("password", this.password)
            form.append("gender", this.gender)
            form.append("confirm", this.confirm)
            form.append("tcs", this.tcs)

            this.$guest.post("/register",form)
            .then(() =>{
               this.msg ="Your account has been created.";
               this.classAlert="success";

               this.firstname="";
               this.lastname="";
               this.email="";
               this.phone="";
               this.gender="";
               this.password="";
               this.confirm="";
               this.tcs="";
            })
            .catch(err => {
               this.msg = err.response.data.message;
               this.classAlert = "danger";
            });
         }
      },
      components:{
         Alert
      }
   };
</script>
<style>
   #registerbtn{
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
</style>