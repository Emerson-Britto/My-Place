<template>
	<div class="field_usedTools" >
		<div :key="index" v-for="(tool, index) in toolsList" class="usedTools">
			<img :src="icon[tool]">
		</div>
	</div>
</template>

<script>
import { icon } from '../scripts/transformFromStringToIcon.js'

export default {
	name: 'Projects',

	data() {
		return {
			icon
		}
	},

    props: {

        toolsList: Array
    }
}

</script>

<style scoped>

.field_usedTools {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 10%;
}

.usedTools {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin: 10px 0;
	background-color: #0B1336;
	overflow: ;
}

.usedTools > img {
	width: 70%;
}

</style>
