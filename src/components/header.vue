<template>
	<header class="header_content">
		<ul class="header_options">
			<li class="options_li"><a href="https://github.com/Emerson-Britto" target="_blank">Github</a></li>
			<li class="options_li"><a href="https://www.linkedin.com/in/emerson-britto/" target="_blank">LinkedIn</a></li>
			<li class="options_li"><a href="https://twitter.com/Emerson_Britto" target="_blank">Twitter</a></li>
			<li class="options_li"><a href="" target="_blank">Medium</a></li>
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
    width: 100%;
    height: 8vh;
    background-color: rgb(0 0 0 / 50%);
    box-shadow: 0px 0px 40px #000;
}

.header_options {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    margin-right: 90px;
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
