<template>
	<section>
		<audio @load="$event.target.play()" src="https://firebasestorage.googleapis.com/v0/b/musiky-9df07.appspot.com/o/background-song_emerson_britto.mp3?alt=media&token=bbbf2184-b6cf-45eb-a3e6-3c78f20a6acf" :autoplay='1' :loop='1'></audio>
		<Header @openBox="()=> this.show_box_contactMe=true"></Header>
		<main id="main_container">
			<VerticalNavBar></VerticalNavBar>
			<router-view @openBox="()=> this.show_box_contactMe=true"></router-view>
			<BoxContactMe v-show="show_box_contactMe" @closebox="()=> this.show_box_contactMe = false" ></BoxContactMe>			
		</main>
	</section>
</template>

<script>
import Header from './components/header.vue'
import VerticalNavBar from './components/verticalNavBar.vue'
import BoxContactMe from './components/boxContactMe.vue'

export default {

    data() {
        return {
            show_box_contactMe: false,
        }
    },

	components: {
		Header,
		VerticalNavBar,
		BoxContactMe
	}

}

</script>

<style>

* {
	margin: 0;
	padding: 0;
	scrollbar-width: thin;
	scrollbar-color: #333333 #000 !important;
}

html {
	font-family: 'Montserrat', sans-serif;
	background-color: #03020E;
}

h1 {
	color: #fff;
}

a {
	color: #fff;
	text-decoration: none;
}

button {
	border: none;
}

::-webkit-scrollbar-track {
    background-color: transparent;
}
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: #343434;
}

#main_container {
	display: flex;
}

</style>
