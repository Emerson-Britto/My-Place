<template>
	<div class="field_usedTools" >
		<div :key="index" v-for="(tool, index) in toolsList" class="usedTools">
			<img :src="`https://infinity-api-nex.herokuapp.com/msk/files/img?path=icons/${tool}Icon.png`">
			<p class="tool_name">{{ tool }}</p>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Projects',

    props: {

        toolsList: Array
    }
}

</script>

<style scoped>

.field_usedTools {
	position: relative;
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

.usedTools:hover .tool_name {
	display: inline-block;
}

.usedTools > img {
	width: 70%;
}

.tool_name {
	display: none;
	position: absolute;
	left: -60px;
}

</style>
