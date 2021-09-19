<template>
	<div class="field_usedTools" >
		<div :key="index" v-for="(tool, index) in toolsList" class="usedTools">
			<img :src="`https://raw.githubusercontent.com/Emerson-Britto/API-Musiky/main/dataBase/imgs/icons/${tool}Icon.png`">
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
