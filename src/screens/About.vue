<template>
	<section class="About_Container">
		<section class="Name_and_Branding">
			<section class="name_and_role">
				<h1 id="myName">@Emerson_Britto</h1>
				<p id="myAge">20 Years Old</p>
				<h2 id="myRole">Javascriṕt Developer</h2>				
			</section>
			<section class="section_Branding">
				<img id="main_branding" src="../assets/imgs/brandingNeon.png">
				<img id="particle1" class="particles" src="../assets/imgs/particle1.png">
				<img id="particle2" class="particles" src="../assets/imgs/particle2.png">
			</section>
		</section>
		<section class="skills">
			<section class="languagen_and_tools">
				<h3>Programming Languagens:</h3>
				<ul class="style-list">
					<li class="list_items languagen_list">Javascipt</li>
					<li class="list_items languagen_list">Python</li>
				</ul>
			</section>
			<section class="languagen_and_tools">
				<h3>Featured Tools:</h3>
				<ul class="style-list">
					<li class="list_items tools_list">React</li>
					<li class="list_items tools_list">Angular</li>
					<li class="list_items tools_list">Vue</li>
					<li class="list_items tools_list">Node Js</li>
					<li class="list_items tools_list">Sass</li>
					<li class="list_items tools_list">Typescript</li>
				</ul>
			</section>
			<section class="languagen_and_tools">
				<h3>Others:</h3>
				<ul class="style-list">
					<li class="list_items others_list">Express</li>
					<li class="list_items others_list">Git</li>
					<li class="list_items others_list">Bootstrap</li>
					<li class="list_items others_list">WebPack</li>
					<li class="list_items others_list">ThreeJs</li>
					<li class="list_items others_list">JWT</li>
				</ul>
			</section>
		</section>
	</section>
</template>

<script>

export default {
	name: 'Projects',

}

</script>

<style scoped>

* {
	color: #fff;
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

#myRole {
	margin-top: 5px;
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
	opacity: 0;
	right: 10%;
	bottom:15%;
}

#particle1 {
	animation: 10s particles infinite;
}

#particle2 {
	animation: 10s particles 6s infinite;
}

/*  SKILLS  */

.skills {
	margin: 40px 0 40px 0;
}

.style-list {
	list-style: none;
	display: flex;
	justify-content: space-around;
	align-items: center;
}

.languagen_and_tools {
	margin-top: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.list_items {
	margin: 0 10px;	
	border-radius: 15px;
	padding: 4px 11px;
}

.languagen_list {
	background-color: #1856FF;
}

.tools_list {
	background-color: #1844FF;
}

.others_list {
	background-color: #1822FF;
}

@keyframes particles {
	10% {
		opacity: 100%;
	}
	95% {
		opacity: 100%;
	}
	100% {
		transform: translateX(-30px) translateY(-30px);
		opacity: 0;
	}	
}

</style>
