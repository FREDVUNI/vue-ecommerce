<template>
  <header id="masthead-pro">
			<div class="container">
				<h1><a href="index.html"><img src="assets/images/arvest.png" alt="Logo"></a></h1>
				<nav id="site-navigation-pro">
					<ul class="sf-menu">
                        <li class="normal-item-pro">
							<MenuLink path="/" text="Home"></MenuLink>
						</li>
                        <li class="normal-item-pro">
							<MenuLink path="/" text="New Releases"></MenuLink>
						</li>
                        <li class="normal-item-pro">
							<MenuLink path="/" text="Pricing Plans"></MenuLink>
						</li>
					</ul>
				</nav>
				<button class="btn btn-header-pro noselect" data-toggle="modal" data-target="#LoginModal" role="button">Sign In</button>
				<div id="mobile-bars-icon-pro" class="noselect"><i class="fas fa-bars"></i></div>
				<div class="clearfix"></div>
			</div>
			<nav id="mobile-navigation-pro">
				<ul id="mobile-menu-pro">
					<li>
						<a href="index.html">Home</a>
					</li>
					<li>
						<a href="dashboard-home.html">New Releases</a>
					</li>
					<li>
						<a href="signup-step1.html">Pricing Plans</a>
					</li>
				</ul>
				<div class="clearfix"></div>
				<button class="btn btn-mobile-pro btn-green-pro noselect" data-toggle="modal" data-target="#LoginModal" role="button">Sign In</button>
			</nav>
  </header>
</template>

<script>
import MenuLink from "./MenuLink"
export default {
    components:{
        MenuLink
    },
}
</script>

<style>

</style>