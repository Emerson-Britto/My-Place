<template>
	<section class="wrapper-view">
		<Loading v-show="loading"></Loading>
		<section v-show="!loading" class="About_Container">
			<section class="Name_and_Branding">
				<section class="name_and_role">
					<h1 id="myName">{{aboutMe.name}}</h1>
					<p id="myAge">>> {{aboutMe.age}}</p>
					<h2 id="myRole">{{aboutMe.roles}}</h2>				
				</section>
				<section class="section_Branding">
					<img
						id="main_branding"
						src="../assets/imgs/brandingNeon.png">
					<img
						id="particle1"
						class="particles"
						src="../assets/imgs/particle1.png">
					<img
						id="particle2"
						class="particles"
						src="../assets/imgs/particle2.png">
				</section>
			</section>
			<section class="skills">
				<section class="languagen_and_tools">
					<h3>Featured Tools:</h3>
					<ul class="style-list">
						<li 
							v-for="(tool, index) in aboutMe.tools" 
							:key="index" 
							class="box_list_items">
							<img class="tool_img" :src="tool.imgUrl"/>
							{{tool.name}}
						</li>
					</ul>
				</section>
				<section class="languagen_and_tools">
					<h3>Others:</h3>
					<ul class="style-list">
						<li 
							v-for="(tool, index) in aboutMe.others" 
							:key="index" 
							class="box_list_items">
							<img class="tool_img" :src="tool.imgUrl"/>
							{{tool.name}}
						</li>
					</ul>
				</section>
			</section>
		</section>		
	</section>
</template>
<script>
import Loading from '../components/loading.vue';

export default {
	name: 'Projects',
	data() {
		return {
			aboutMe: {},
			loading: true
		}
	},
    components: {
        Loading
    },
	created() {
		this.$http.get('http://cdn-istatics.herokuapp.com/aboutMe')
			.then(({ data }) => {
				this.aboutMe = data;
				this.loading = false;
			}, err => console.log(err))
	},
}
</script>
<style scoped>

* {
	color: #fff;
}

.wrapper-view {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 99vw;
	min-height: 100vh;
}

/*  NAME & BRANDING  */

.About_Container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	overflow-x: hidden;
}

.Name_and_Branding {
	margin-top: 20vh;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
}

.name_and_role {
	text-align: center;
	width: 40%;
}

#myName {
	font-size: 2.9em;
}

#myAge {
	margin: 10px 0;
}

#myRole {
	font-size: 1.1em;
}

.section_Branding {
	position: relative;
	width: 40%;
	height: 400px;
}

.section_Branding > img {
	position: absolute;
	width: 100%;
}

#main_branding {
	bottom: 2%;
}

.particles {
	right: 10%;
	bottom:15%;
}

#particle1 {
	animation: 10s particles_mov infinite;
}

#particle2 {
	animation: 10s particles_mov 6s infinite;
}

/*  SKILLS  */

.skills {
	margin: 40px 0 40px 0;
}

.style-list {
	list-style: none;
	margin-top: 15px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
}

.languagen_and_tools {
	margin-top: 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 80vw;
}

.box_list_items {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 250px;
	height: 230px;
	margin: 10px 10px;
	border-radius: 10px 10px 0 0;
	background-color: #0E1529;
	border-bottom: 4px solid #0E66C0;
}

.tool_img {
	width: 80px;
}

@keyframes particles_mov {
	to {
		transform: translateX(-30px) translateY(-30px);
		opacity: 0;
	}	
}

</style>
