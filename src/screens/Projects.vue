<template>
	<section class="section_project">
		<ProjectsFilter 
			id="projectsFilter" 
			@updatelist="newList => this.filterList = newList" 
			:filterList="filterList"
			:btnList="btnList">
		</ProjectsFilter>
		<section id="projects_list">
			<section class="projects" :key="index" v-for="(project, index) in filteredProjects">
				<FieldUsedTools class="hidden_mobile" :toolsList="project.featuredTools"></FieldUsedTools>
				<section class="allTools_and_projectView">
					<ul class="allTools_viewList">
						<li v-for="(tool, index) in project.allTools" :key="index">{{ tool }}</li>
					</ul>
					<ProjectView :project="project.projectView"></ProjectView>					
				</section>
			</section>
			<section v-show="!filteredProjects.length" class="project_noFound">
				<img :src="noFound.img">
				<p>{{ noFound.msg }}</p>
			</section>
			<Loading v-show="loading"></Loading>
		</section>
	</section>
</template>

<script>
import ProjectsFilter from '../components/projects-filter.vue'
import FieldUsedTools from '../components/verticalField-usedTools.vue'
import ProjectView from '../components/project-view.vue'
import Loading from '../components/loading.vue'

export default {
	name: 'Projects',

	data() {
		return {
			filterList: [],
			loading: true,
			btnList: [],
			projects: [],
			noFound: {}
		}
	},

    components: {
        ProjectsFilter,
        ProjectView,
        FieldUsedTools,
        Loading
    },

	created() {

		this.$http.get('https://infinity-api-nex.herokuapp.com/projectsList').then(({data}) => {
			this.projects = data.projects;
			this.btnList = ['All', ...data.filterOptions];
			this.noFound = data.noFound;
			this.loading = false;
		}, err => console.log(err))
	},

	computed: {
		filteredProjects() {

			return this.projects.filter(project => {

				return project.allTools.some(tool =>
					this.filterList.includes(tool) || !this.filterList.length
				)
			})
		}
	}
}

</script>

<style scoped>

.section_project {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
}

#projectsFilter {
	margin: 20vh 30px 0 30px;
}

#projects_list {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10vh;
	width: 980px;
}

.projects {
	display: flex;
	justify-content: space-around;
	margin: 40px 0 40px 25px;
	width: 100%;
	height: 40vh;
	color: #fff;
}

.allTools_viewList {
	display: flex;
	flex-wrap: wrap-reverse;
	list-style: none;
}

.allTools_viewList > li {
	margin: 5px 6px;
	padding: 2px 10px;
	background-color: #181A90;
	border-radius: 10px;
	color: #fff;
	font-size: 0.9em;
}

.project_noFound {
	text-align: center;
	color: #fff;
}

.project_noFound > img {
	border-radius: 10px;
	width: 20em;
	margin-bottom: 30px;
}

@media screen and (max-width: 1140px) {

	#projects_list {
		width: 900px;
	}

	.projects {
		height: 37vh;
	}

	.allTools_viewList > li {
		font-size: 0.8em;
	}
}

@media screen and (max-width: 950px) {

	#projects_list {
		width: 680px;
	}

	.projects {
		height: 32vh;
	}

	.projects {
		margin: 40px 0 40px 0;
	}

	.hidden_mobile {
		display: none;
	}
}

@media screen and (max-width: 725px) {
	#projects_list {
		width: 100vw;
	}
	.projects {
		width: 100vw;
		height: 67vh;
	}

	.allTools_and_projectView {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	.allTools_viewList {
		justify-content: center;
		margin: 0 10px;
	}
}

@media screen and (max-width: 425px) {

	#projects_list {
		margin-top: 5vh;
		padding-bottom: 12vh;
	}

	.projects {
		height: auto;
	}

	.project_noFound > p {
		margin: 0 20px;
	}
}

</style>
