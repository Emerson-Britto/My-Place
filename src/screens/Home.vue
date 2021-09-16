<template>
    <section class="section_home">
        <audio @load="$event.target.play()" src="https://firebasestorage.googleapis.com/v0/b/musiky-9df07.appspot.com/o/background-song_emerson_britto.mp3?alt=media&token=bbbf2184-b6cf-45eb-a3e6-3c78f20a6acf" :autoplay='1' :loop='1'></audio>
        <aside class="vertical_NavBar">
            <img src="">
        </aside>
        <section class="main_content">
            <section class="presentation">
                <p id="field_greeting">Good Morning!</p>
                <h1 id="field_myName">Hi, I'm Emerson Britto</h1>
                <p id="field_myRole">Javascript Developer</p>
            </section>
            <section class="helpful_Btns">
                <button id="btn_getCV" class="btnPag">View CV</button>
                <button id="btn_viewTheProject" class="btnPag">The Project</button>
            </section>

        </section>
        <section class="container_animations">
            <section class="animations">
                <Ring/>
                <Cubes/>            
            </section>
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

<style scoped>

.section_home {
    display: flex;
    background: linear-gradient(180deg, #03020E, #000008);
    height: 100vh;
    overflow-x: hidden;
}

.vertical_NavBar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(0 0 0 / 40%);
    border-right: 2px solid;
    border-image: linear-gradient(180deg, #000, #000091, #000)1;
    width: 3.5vw;
    height: 100vh;
}

.main_content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 46vw;
}

.presentation {
    font-family: 'Montserrat', sans-serif;
    margin-left: 70px; 
}

#field_greeting {
    color: #fff;
    font-size: 1.2em;
    margin-bottom: 5px;
}

#field_myName {
    font-size: 2.8em;
    margin-bottom: 15px;
}

#field_myRole {
    color: #fff;
    font-size: 1.1em;
}

.helpful_Btns {
    margin: 70px 0 0 70px;
}

.btnPag {
    border: none;
    border-radius: 9px;
    cursor: pointer;
    color: #fff;
    font-size: 1.2em;
    padding: 6px 18px;
    transition: 500ms;
}

#btn_getCV {
    background-color: #0000B9;
    margin-right: 20px;
}

#btn_getCV:hover {
    background-color: #000079;
    margin-right: 20px;
}

#btn_viewTheProject {
    background-color: #2E34C1;
}

#btn_viewTheProject:hover {
    background-color: #2E297A;
}

.container_animations {
    display: flex;
    align-items: center;
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
