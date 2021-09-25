<template>
	<section class="section_project">
		<ProjectsFilter 
			id="projectsFilter" 
			@updatelist="newList => this.filterList = newList" 
			:filterList="filterList">
		</ProjectsFilter>
		<section id="projects_list">
			<section v-show="matchFIlter(project)" class="projects" :key="index" v-for="(project, index) in projects">
				<FieldUsedTools :toolsList="project.featuredTools"></FieldUsedTools>
				<section>
					<ul class="allTools_viewList">
						<li v-for="(tool, index) in project.allTools" :key="index">{{ tool }}</li>
					</ul>
					<ProjectView :project="project.projectView"></ProjectView>					
				</section>
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
			filterList: [],
			projects: [{
				featuredTools: ['react'],
				allTools: ['React', 'Styled-components', 'Babel', 'react-youtube', 'react-player', 'Musiky API'],
				projectView: {
					imgPreview: 'https://raw.githubusercontent.com/Emerson-Britto/API-Musiky/main/dataBase/imgs/previews/Musiky.png',
					projTitle: 'Musiky App',
					lastUpdate: '16/09/2001',
					description: 'A web application based on current music players',
					repository: 'https://github.com/Emerson-Britto/Musiky',
					viewOnline: ''
				}
			},{
				featuredTools: ['js'],
				allTools: ['Html', 'CSS', 'Javascript'],
				projectView: {
					imgPreview: 'https://raw.githubusercontent.com/Emerson-Britto/API-Musiky/main/dataBase/imgs/previews/musiky-WebPage.png',
					projTitle: 'Musiky WebPage',
					lastUpdate: '16/09/2001',
					description: 'Musicy webpage - Initial presentation',
					repository: 'https://github.com/Emerson-Britto/Musiky-Site',
					viewOnline: 'https://emerson-britto.github.io/Musiky-Site/'
				}
			},{
				featuredTools: ['angular', 'sass', 'ts'],
				allTools: ['Angular', 'Rxjs', 'Sass', 'Typescript', 'Musiky API'],
				projectView: {
					imgPreview: 'https://raw.githubusercontent.com/Emerson-Britto/API-Musiky/main/dataBase/imgs/previews/account-Musiky.png',
					projTitle: 'Account Musiky',
					lastUpdate: '09/09/2001',
					description: 'Login system using Angular and Musiky API',
					repository: 'https://github.com/Emerson-Britto/accounts-musiky',
					viewOnline: ''
				}
			},{
				featuredTools: ['js'],
				allTools: ['Html', 'CSS', 'Javascript', 'LocalStorage API'],
				projectView: {
					imgPreview: 'https://raw.githubusercontent.com/Emerson-Britto/API-Musiky/main/dataBase/imgs/previews/CODA-Preview.png',
					projTitle: 'CODA__HightLight',
					lastUpdate: '25/06/2021',
					description: 'First project in Js - Some codes are outdated',
					repository: 'https://github.com/Emerson-Britto/CODA__HightLight',
					viewOnline: 'https://emerson-britto.github.io/CODA__HightLight/'
				}
			}]
		}
	},

    components: {
        ProjectsFilter,
        ProjectView,
        FieldUsedTools
    },

    methods: {
		matchFIlter({ allTools }){

			for(let i=0; i < allTools.length; i++){

				if(this.filterList.includes(allTools[i]) || !this.filterList.length) return true
			}

			return false
		}
	}

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
	height: 280px;
	color: #fff;
}

.allTools_viewList {
	display: flex;
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

</style>
