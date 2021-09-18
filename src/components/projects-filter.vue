<template>
	<div id="filter_Projects">
		<button class="filter_btns">All</button>
		<button class="filter_btns filter_btns-active">React</button>
		<button class="filter_btns">Python</button>
		<button class="filter_btns filter_btns-active">Javascript</button>
		<button class="filter_btns">Typescript</button>
		<button class="filter_btns filter_btns-active">Angular</button>
	</div>
</template>

<script>

export default {

}

</script>

<style scoped>

#filter_Projects {
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 5vh;
}

.filter_btns {
	color: #fff;
	background-color: transparent;
	border: 2px solid #1913AC;
	transition: 500ms;
	border-radius: 10px;
	margin: 0 10px;
	padding: 5px 10px;
	font-size: 1em;
	cursor: pointer;
}

.filter_btns-active {
	background-color: #1913AC;
	box-shadow: 0px 0px 30px #1913D0;
}


.filter_btns:hover {
	background-color: #1913AC;
}

</style>
