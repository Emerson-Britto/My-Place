<template>
    <section @click="close()" class="overlay">
        <ul class="contact_list">
            <li>
                <a href="https://www.linkedin.com/in/emerson-britto/" target="_blank">
                    <img id="icons" src="../assets/icons/linkedin.svg">
                </a>
            </li>
            <li>
                <a href="https://wa.me/5573981506021?text=Hello World!!" target="_blank">
                    <img id="icons" src="../assets/icons/Whatsapp.svg">
                </a>
            </li>
            <li>
                <a href="mailto:emersonbritto987@gmail.com?subject=HelloWorld!!" target="_blank">
                    <img id="icons" src="../assets/icons/mail.svg">
                </a>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
	name: 'Projects',

    methods: {

        close() {

            this.$emit('closebox')
        }
    }
}

</script>

<style scoped>

.overlay {
    background-color: rgb(0 0 0 / 90%);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    width: 100vw;
    height: 100vh;
}

.contact_list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    height: 30%;
}

.contact_list > li {
    height: 140px;
    cursor: pointer;
}

#icons {
    width: 80px;
    filter: invert(70%);
    transition: 1s;
}

.contact_list > li:hover #icons {
    transform: translateY(-20px) rotateY(360deg);
    filter: invert(100%) drop-shadow( 0px 0px 30px rgb(255,255,255));
}

@media screen and (max-width: 790px) {

    .contact_list {
        flex-direction: column;
        height: 80%;
    }
}

</style>
