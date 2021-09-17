<template>
    <div class="ring">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
    .ring {
        position: absolute;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background: linear-gradient(#0041D3, #00DAEB, #9344AF, #0041D3);
        animation: animate 1s linear infinite;
    }
    .ring span {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: linear-gradient(#0041D3, #00DAEB, #9344AF, #0041D3);
        animation: animate 1s linear infinite;
    }
/*
    @keyframes animate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }*/

    .ring span:nth-child(1) {
        filter: blur(5px);
    }
    .ring span:nth-child(2) {
        filter: blur(10px);
    }
    .ring span:nth-child(3) {
        filter: blur(25px);
    }
    .ring span:nth-child(4) {
        filter: blur(50px);
    }
    .ring:after {
        content: '';
        position: absolute;
        top: 20px;
        left: 20px;
        right: 20px;
        bottom: 20px;
        background: #090012;
        border-radius: 50%;
        box-shadow: inset 0px 0px 30px #00DAEB;
    }
</style>
