<template>
	<header class="header_content">
		<ul class="header_options">
			<li class="options_li hidden-mobile"><a href="https://github.com/Emerson-Britto" target="_blank">Github</a></li>
			<li class="options_li hidden-mobile"><a href="https://www.linkedin.com/in/emerson-britto/" target="_blank">LinkedIn</a></li>
			<li class="options_li hidden-mobile"><a href="https://twitter.com/Emerson_Britto" target="_blank">Twitter</a></li>
			<li class="options_li show-mobile" @click="show_box = true">Social Media</li>
			<li id="featured_option" class="options_li" @click="this.$emit('openBox')">Contact me</li>
		</ul>
        <section v-show="show_box" @click="show_box = false" class="overlay">
            <section class="box_social_media">
                <ul class="box_options">
                    <li class="options_li"><a href="https://github.com/Emerson-Britto" target="_blank">Github</a></li>
                    <li class="options_li"><a href="https://www.linkedin.com/in/emerson-britto/" target="_blank">LinkedIn</a></li>
                    <li class="options_li"><a href="https://twitter.com/Emerson_Britto" target="_blank">Twitter</a></li>
                </ul>
            </section>
        </section>
	</header>
</template>

<script>

export default {
	name: 'Projects',

    data() {
        return {
            show_box: false
        }
    }
}

</script>

<style scoped>

.header_content {
	position: fixed;
    display: flex;
    justify-content: flex-end;
    z-index: 5;
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
    width: 700px;
    margin-right: 90px;
}

.options_li {
    font-size: 1.1em;
}

.show-mobile {
    display: none;
}

.options_li > a:hover {
    color: #189BD6;
}

#featured_option {
    background-color: #fff;
    padding: 6px 14px;
    border-radius: 8px;
    color: #000;
    cursor: pointer;
}

@media screen and (max-width: 880px) {
    .header_options {
        margin-right: 0;
    }
}

@media screen and (max-width: 790px) {
    .header_options {
        justify-content: center;
        margin-right: 0;
    }
    .hidden-mobile {
        display: none;
    }
    .show-mobile {
        display: inline-block;
        cursor: pointer;
        color: #fff;
        margin-right: 40px;
    }
}

.overlay {
    position: absolute;
    background-color: rgb(0 0 0 / 50%);
    width: 100vw;
    height: 100vh;
}

.box_social_media {
    margin: 10vh auto;
    background-color: #000;
    border: 1px solid blue;
    width: 190px;
    height: 180px;
    border-radius: 10px;
}

.box_options {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
}

</style>
