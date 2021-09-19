<template>
	<section class="section_project">
		<ProjectsFilter id="projectsFilter"></ProjectsFilter>
		<section id="projects_list">
			<section class="projects" :key="index" v-for="(project, index) in projects">
				<FieldUsedTools :toolsList="project.usedTools"></FieldUsedTools>
				<ProjectView :project="project.projectView"></ProjectView>
			</section>
		</section>
	</section>
</template>

<script>
import ProjectsFilter from '../components/projects-filter.vue'
import FieldUsedTools from '../components/verticalField-usedTools.vue'
import ProjectView from '../components/project-view.vue'

export default {
	name: 'Projects',

	data() {
		return {
			projects: [{
				usedTools: ['react', 'vue'],
				projectView: {
					imgPreview: '../assets/imgs/musikyPreview.png',
					projTitle: 'Musiky - Project',
					lastUpdate: '21/09/2001',
					description: 'a project demo, yet...',
					permissions: {
						viewCode: true,
						viewOnline: true
					}					
				}
			},{
				usedTools: ['react', 'angular'],
				projectView: {
					imgPreview: '/static/musikyPreview.png',
					projTitle: 'Musiky - Project',
					lastUpdate: '21/09/2001',
					description: 'a project demo, yet...',
					permissions: {
						viewCode: true,
						viewOnline: true
					}					
				}
			}]
		}
	},

    components: {
        ProjectsFilter,
        ProjectView,
        FieldUsedTools
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
	margin: 40px 0;
	width: 100%;
	height: 230px;
	color: #fff;
}

</style>
