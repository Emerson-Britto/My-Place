<template>
	<section class="section_project">
		<ProjectsFilter id="projectsFilter"></ProjectsFilter>
		<section id="projects_list">
			<section class="projects">
				<div class="field_usedTools">
					<div class="usedTools"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F09%2FReact_logo_logotype_emblem.png&f=1&nofb=1"></div>
					<div class="usedTools"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Fthumbs%2F2x%2Fvue-9-logo.png&f=1&nofb=1"></div>
				</div>
				<div class="projects_view">
					<div class="img_container">
						<img class="project_preview" src="../assets/imgs/musikyPreview.png">
					</div>
					<div class="projects_infors">
						<h2 class="projects_title">Project Musiky Site</h2>
						<p class="field_lastUpdate-tool">Last Update: 24/07/2021</p>
						<p class="projects_description">a project created only for test</p>
						<section>
							<button class="goProject_btn">View Code</button>
							<button class="goProject_btn">View Online</button>
						</section>
					</div>
				</div>
			</section>
		</section>
	</section>
</template>

<script>
import ProjectsFilter from '../components/projects-filter.vue'

export default {
	name: 'Projects',

    components: {
        ProjectsFilter
    },

}

</script>

<style scoped>

.section_project {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(180deg, #03020E, #000008);
    overflow: scroll;
    width: 96.5vw;
    height: 100vh;
}

#projectsFilter {
	margin-top: 20vh;
}

#projects_list {
	margin-top: 10vh;
	width: 75%;
}

.projects {
	display: flex;
	justify-content: space-around;
	margin: 10px 0;
	width: 100%;
	height: 300px;
	color: #fff;
}

.field_usedTools {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 10%;
}

.usedTools {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: #0B1336;
	overflow: hidden;
}

.usedTools > img {
	width: 70%;
}

.projects_view {
	display: flex;
	border: 3px solid #1913A2;
	width: 90%;
	border-radius: 10px;
	overflow: hidden;
}

.img_container {
	overflow: hidden;
	width: 50%;
	height: 100%;
	background-color: black;
}

.project_preview {
	width: 100%;
}

.projects_infors {
	text-align: center;
	width: 50%;
}

.projects_title {
	margin: 20px 0;
}
	
.field_lastUpdate-tool {
	opacity: 70%;
	font-size: 0.9em;
	margin: 10px 0;
}

.projects_description {
	margin: 20px 0;	
}

.goProject_btn {
	background-color: transparent;
	color: #fff;
	border-bottom: 2px solid #0B1394;
	font-size: 1em;
	padding: 5px 10px;
	margin: 0 10px;
	transition: 500ms;
	border-radius: 6px;
	cursor: pointer;
}

.goProject_btn:hover {
	background-color: #0B1394;
}

</style>
