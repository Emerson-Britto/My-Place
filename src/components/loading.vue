<template>
    <section class="box_loading">
        <img id="top_img" src="../assets/imgs/topeme.png">
        <img id="bottom_img" src="../assets/imgs/bottomeme.png">
    </section>
</template>

<script>
export default {
	name: 'Projects',

}

</script>

<style scoped>

.box_loading {
    position: relative;
    width: 250px;
    height: 250px;
}

.box_loading > img {
    position: absolute;
    width: 100%;
}

#top_img {
    top: 3%;
    animation: 700ms top_loading infinite alternate;
}

#bottom_img {
    bottom: 20%;
    animation: 1400ms bottom_loading infinite;
}

@keyframes top_loading {
    to {
        transform: translateY(-10px);
    }
}

@keyframes bottom_loading {
    to {
        transform: rotate(360deg);
    }
}

</style>
