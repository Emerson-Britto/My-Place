<template>
    <section class="section_home">
        <section class="main_content">
            <section class="presentation">
                <p id="field_greeting">{{ getTime() }}</p>
                <h1 id="field_myName">Hi, I'm Emerson Britto</h1>
                <p id="field_myRole">Javascript Developer</p>
            </section>
            <section class="helpful_Btns">
                <button id="btn_getCV" class="btnPag">Contact me</button>
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
	name: 'Home',

    components: {
        Cubes,
        Ring
    },

    methods: {
        getTime() {
            var time = new Date().getHours();

            if(time >= 20 && time <= 23 || time >= 0 && time < 5) return 'Good Night';
            if(time >= 5 && time < 12) return 'Good Morning';
            if(time >= 12 && time < 18) return 'Good Afternoon';
            if(time >= 18 && time <= 19) return 'Good Evening';
        }
    }

}

</script>

<style scoped>

.section_home {
    display: flex;
    background: linear-gradient(180deg, #03020E, #000008);
    width: 96.5vw;
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
    border: 2px solid #0000B9;
    margin-right: 20px;
}

#btn_getCV:hover {
    background-color: #000079;
    margin-right: 20px;
}

#btn_viewTheProject {
    background-color: transparent;
    border: 2px solid #2E34C1;
}

#btn_viewTheProject:hover {
    background-color: #2E34C1;
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
