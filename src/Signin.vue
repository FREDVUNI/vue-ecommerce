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
            <form id="login" action="" method="POST">
               <div class="form-group">
                  <label for="email">Email:</label>
                  <input id="email" name="email" class="form-control" type="email" placeholder="Enter your email address." value="" autofocus>
               </div>
               <div class="g-mb-35">
                  <div class="row justify-content-between">
                     <div class="col align-self-center ml-3">
                        <label for="password">Password:</label>
                     </div>
                     <div class="col align-self-center text-right">
                        <a class="d-inline-block g-font-size-12 mb-2 mr-3" href=""> Forgot password ?</a>
                     </div>
                  </div>
                  <div class="form-group">
                     <input id="password" name="password" class="form-control" type="password" placeholder="Password" value="" >
                  </div>
                  <div class="row mt-3 form-group">
                     <button id="loginbtn" class="btn-block btn-green-pro">LOGIN</button>
                  </div>
               </div>
            </form>
             <footer class="text-center mb-5">
                <p class="g-color-gray-dark-v5 g-font-size-13 mb-0">Don't have an account yet ? <a class="d-inline-block g-font-size-12" href="/signup">signup</a>
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
   export default {
   
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
</style>