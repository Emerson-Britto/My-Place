<template>
    <section id="background">
        <audio @load="$event.target.play()" src="https://firebasestorage.googleapis.com/v0/b/musiky-9df07.appspot.com/o/background-song_emerson_britto.mp3?alt=media&token=bbbf2184-b6cf-45eb-a3e6-3c78f20a6acf" :autoplay='1' :loop='1'></audio>
        <section class="animations">
            <Ring/>
            <Cubes/>            
        </section>
    </section>
</template>

<script>
import Cubes from '../components/floating-cubes.vue'
import Ring from '../components/colored-ring.vue'

export default {
	name: 'Projects',

    components: {
        Cubes,
        Ring
    },

}

</script>

<style>

#background{
    background: url(../assets/background-myPlace.png) center;
    height: 100vh;
    animation: 60s balance infinite alternate;
}

@keyframes balance {
    to {
        background-position: 2% 2%;
    }
}

.animations {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40vw;
    height: 60vh;
}

</style>
