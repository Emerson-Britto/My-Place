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
	width: 95%;
	height: 84%;
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
	color: #424444;
	font-size: 0.9em;
	margin: 10px 0;
}

.projects_description {
	width: 80%;
	font-size: 1em;
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


@media screen and (max-width: 1140px) {

	.projects_description {
		margin: 10px auto;
		font-size: 0.9em;
	}
}

@media screen and (max-width: 950px) {

	.projects_view {
		width: 100%;
	}

	.projects_title {
		margin: 18px 0;
		font-size: 1.2em;
	}
}

@media screen and (max-width: 725px) {

	.projects_view {
		flex-direction: column;
		width: 410px;
		height: 91%;
	}

	.img_container {
		width: 100%;
		height: 50%;
	}

	.projects_infors {
		width: 100%;
	}
}

@media screen and (max-width: 425px) {

	.projects_view {
		width: 90%;
	}

	.img_container {
		height: 48%;
	}

	.projects_title {
		margin: 20px 0;
	}

	.projects_description {
		margin: 20px auto;
	}

	.goProject_btn {
		margin: 20px 10px;
	}
}

</style>
