<template>
	<aside class="vertical_NavBar">
		<router-link to='/'><button class="btn_navBar"><img :class="stylesNavIcon('/')" src="../assets/icons/home_white_24dp.svg"></button></router-link>
		<router-link to='/projects'><button class="btn_navBar"><img :class="stylesNavIcon('/projects')" src="../assets/icons/apps_white_24dp.svg"></button></router-link>
		<router-link to='/profile'><button class="btn_navBar"><img :class="stylesNavIcon('/profile')" src="../assets/icons/person_white_24dp.svg"></button></router-link>
	</aside>
</template>

<script>

export default {

	methods: {
		stylesNavIcon(route) {

			if (route == this.$route.path) {
				return 'navIcon-active'
			}
			return 'navIcon'
		}
	},
}

</script>

<style scoped>

.vertical_NavBar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(0 0 0 / 40%);
    border-right: 2px solid;
    border-image: linear-gradient(180deg, #000, #000091, #000)1;
    width: 3.5vw;
    height: 100vh;
}

.btn_navBar {
	background-color: transparent;
	cursor: pointer;
	margin: 13px 0;
}

.navIcon {
	opacity: 70%;
}

.navIcon-active {
	opacity: 100%;
	background-color: rgb(255 255 255 / 11%);
	box-shadow: 0px 0px 20px rgb(255 255 255 / 30%);
}

</style>
