<template>
  <header id="masthead-pro">
			<div class="container">
				<h1><a href="/"><img src="assets/images/arvest.png" alt="Logo"></a></h1>
				<nav id="site-navigation-pro">
					<ul class="sf-menu">
						<MenuLink path="/" text="Home"></MenuLink>
						<MenuLink path="/new-release" text="New Releases"></MenuLink>
						<MenuLink path="/pricing" text="Pricing Plans"></MenuLink>
						<MenuLink path="/signin" text="sign in"></MenuLink>
						<MenuLink path="/signup" text="sign up"></MenuLink>
					</ul>
				</nav>
				<div id="mobile-bars-icon-pro" class="noselect"><i class="fas fa-bars"></i></div>
				<div class="clearfix"></div>
			</div>
			<nav id="mobile-navigation-pro">
				<ul id="mobile-menu-pro">
					<MobileLink path="/" text="Home"></MobileLink>
					<MobileLink path="/new-release" text="New Releases"></MobileLink>
					<MobileLink path="/pricing" text="Pricing Plans"></MobileLink>
					<MobileLink path="/signin" text="sign in"></MobileLink>
					<MobileLink path="/signup" text="sign up"></MobileLink>
				</ul>
				<div class="clearfix"></div>
			</nav>
  </header>
</template>

<script>
import MenuLink from "./MenuLink";
import MobileLink from "./MobileLink";
export default {
    components:{
		MenuLink,
		MobileLink
    },
}
</script>

<style>

</style>