<template>
	<div class="projects_view">
		<div class="img_container">
			<img class="project_preview" :src="project.imgPreview">
		</div>
		<div class="projects_infors">
			<h2 class="projects_title">{{ project.projTitle }}</h2>
			<p class="field_lastUpdate-tool">Last Update: {{ project.lastUpdate }}</p>
			<p class="projects_description">{{ project.description }}</p>
			<section>
				<a :href="project.repository" target="_blank">
					<button class="goProject_btn" v-show="project.repository.length">Repository</button>
				</a>
				<a :href="project.viewOnline" target="_blank">
					<button class="goProject_btn" v-show="project.viewOnline.length">View Online</button>
				</a>
			</section>
		</div>
	</div>
</template>

<script>

export default {
	name: 'ProjectsView',

    props: {

        project: Object
    }
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
	width: 80%;
	margin: 20px auto;	
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
