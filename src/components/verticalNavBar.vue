<template>
	<aside class="vertical_NavBar">
		<router-link to='/'><button class="btn_navBar"><img :class="stylesNavIcon('/')" src="../assets/icons/home.svg"></button></router-link>
		<router-link to='/projects'><button class="btn_navBar"><img :class="stylesNavIcon('/projects')" src="../assets/icons/projects.svg"></button></router-link>
		<router-link to='/about'><button class="btn_navBar"><img :class="stylesNavIcon('/about')" src="../assets/icons/person.svg"></button></router-link>
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
	position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(0 0 0 / 30%);
    border-right: 2px solid;
    border-image: linear-gradient(180deg, #000, #000091, #000)1;
    z-index: 4;
    width: 46px;
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

@media screen and (max-width: 880px) {
	.vertical_NavBar {
		bottom: 0;
		width: 100vw;
		height: 46px;
		border-top: 0px solid;
		background-color: rgb(0 0 0 / 80%);
		flex-direction: row;
	}

	.btn_navBar {
		margin: 0 13px;
	}
}

</style>
