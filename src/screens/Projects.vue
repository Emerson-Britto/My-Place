<template>
	<section class="section_project">
		<ProjectsFilter 
			id="projectsFilter" 
			@updatelist="newList => this.filterList = newList" 
			:filterList="filterList"
			:btnList="btnList">
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
			<section v-show="!totalResult" class="project_noFound">
				<img :src="noFound.img">
				<p>{{ noFound.msg }}</p>
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
			lastfilterLength: 0,
			totalResult: 1,
			btnList: [],
			projects: [],
			noFound: {}
		}
	},

    components: {
        ProjectsFilter,
        ProjectView,
        FieldUsedTools
    },

    methods: {
		matchFIlter({ allTools }){

			if(this.filterList.length != this.lastfilterLength){ 
				this.totalResult = 0
				this.lastfilterLength = this.filterList.length
			}

			for(let i=0; i < allTools.length; i++){

				if(this.filterList.includes(allTools[i]) || !this.filterList.length) {
					this.totalResult++
					return true
				}
			}

			return false
		}
	},

	created() {

		this.$http.get('https://infinity-api-nex.herokuapp.com/projectsList')
			.then(res => {
				this.projects = res.data.projects
				this.btnList = ['All', ...res.data.filterOptions]
				this.noFound = res.data.noFound
			}, err => console.log(err))
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

.project_noFound {
	text-align: center;
	color: #fff;
}

.project_noFound > img {
	border-radius: 10px;
	width: 20em;
	margin-bottom: 30px;
}

</style>
