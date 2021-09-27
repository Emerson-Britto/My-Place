<template>
	<div id="filter_Projects">
		<button v-for="(btn, index) in btnList" :key="index" :class="stylesBtn(btn)" @click="filter(btn)">
			{{btn}}
		</button>
	</div>
</template>

<script>

export default {

    props: {

        filterList: Array,
        btnList: Array
    },

	methods: {

		filter(filter) {

			if(filter == 'All') return this.$emit('updatelist', [])

			if(this.filterList.some(item => item == filter)) {
				this.$emit('updatelist', this.filterList.filter(item => item != filter))
				return
			}
			this.$emit('updatelist', this.filterList.concat(filter))
		},

		stylesBtn(name) {

			if(!this.filterList.length && name == 'All') return 'filter_btns filter_btns-active'

			if(this.filterList.some(item => item == name)) return 'filter_btns filter_btns-active'

			return 'filter_btns'
		}
	},
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
	margin: 10px 10px;
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
