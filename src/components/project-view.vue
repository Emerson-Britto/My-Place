<template>
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
</template>

<script>

export default {
	name: 'ProjectsView',

}

</script>

<style scoped>

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
	padding: 6px 12px;
	margin: 0 10px;
	transition: 500ms;
	border-radius: 6px;
	cursor: pointer;
}

.goProject_btn:hover {
	background-color: #0B1394;
}

</style>
