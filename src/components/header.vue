<template>
	<header class="header_content">
		<ul class="header_options">
			<li class="options_li"><a href="">Github</a></li>
			<li class="options_li"><a href="">LinkedIn</a></li>
			<li class="options_li"><a href="">Twitter</a></li>
			<li class="options_li"><a href="">Medium</a></li>
			<li id="featured_option" class="options_li"><a href="">Contact me</a></li>
		</ul>  
	</header>
</template>

<script>
export default {
	name: 'Projects',
}

</script>

<style scoped>

.header_content {
	position: fixed;
    display: flex;
    justify-content: flex-end;
    padding-top: 1vh;
    width: 92%;
    height: 8vh;
}

.header_options {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;
}

.options_li {
    font-size: 1.1em;
}

.options_li > a:hover {
    color: #0E7BD4;
}

#featured_option {
    background-color: #fff;
    padding: 6px 14px;
    border-radius: 8px;
}

#featured_option > a {
    color: #000;
}

</style>
