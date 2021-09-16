<template>
	<section class="conteiner">
		<section>
			<section class="cube">
				<div class="face1"></div>
				<div class="face2"></div>
				<div class="face3"></div>
				<div class="face4"></div>
				<div class="face5"></div>
				<div class="face6"></div>
			</section>  

			<section class="cube" id='cube2'>
				<div class="face1"></div>
				<div class="face2"></div>
				<div class="face3"></div>
				<div class="face4"></div>
				<div class="face5"></div>
				<div class="face6"></div>
			</section>              
		</section>
    </section>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.conteiner {
    position: absolute;
    background-color: ;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30vw;
    height: 50vh;
}

.cube {
    position: relative;
    -webkit-animation-name: spincube;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-duration: 120s;
    animation-name: spincube;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 120s;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
    left: -20px;
}

#cube2 {
    position: relative;
    -webkit-animation-name: spincube;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-duration: 120s;
    animation-name: spincube2;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 160s;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
    left: 220px;
}

.cube div {
    position: absolute;
    width: 150px;
    height: 150px;
    border: 1px solid #ccc;
    background: rgba(255, 255, 255, .4);
    text-align: center;
    font-size: 100px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    box-shadow: 0 0 20px 0px white;
}

#cube2 div {
    width: 100px;
    height: 100px;
}

.cube .face1 {
    -webkit-transform: translateZ(75px);
    -moz-transform: translateZ(75px);
    -ms-transform: translateZ(75px);
    transform: translateZ(75px);
    color: #DD0031;
}

.cube .face2 {
    -webkit-transform: rotateY(90deg) translateZ(75px);
    -moz-transform: rotateY(90deg) translateZ(75px);
    -ms-transform: rotateY(90deg) translateZ(75px);
    transform: rotateY(90deg) translateZ(75px);
    color: #F06529;
}

.cube .face3 {
    -webkit-transform: rotateY(90deg) rotateX(90deg) translateZ(75px);
    -moz-transform: rotateY(90deg) rotateX(90deg) translateZ(75px);
    -ms-transform: rotateY(90deg) rotateX(90deg) translateZ(75px);
    transform: rotateY(90deg) rotateX(90deg) translateZ(75px);
    color: #28A4D9;
}

.cube .face4 {
    -webkit-transform: rotateY(180deg) rotateZ(90deg) translateZ(75px);
    -moz-transform: rotateY(180deg) rotateZ(90deg) translateZ(75px);
    -ms-transform: rotateY(180deg) rotateZ(90deg) translateZ(75px);
    transform: rotateY(180deg) rotateZ(90deg) translateZ(75px);
    color: #5ED4F4;
}

.cube .face5 {
    -webkit-transform: rotateY(-90deg) rotateZ(90deg) translateZ(75px);
    -moz-transform: rotateY(-90deg) rotateZ(90deg) translateZ(75px);
    -ms-transform: rotateY(-90deg) rotateZ(90deg) translateZ(75px);
    transform: rotateY(-90deg) rotateZ(90deg) translateZ(75px);
    color: #EFD81D;
}

.cube .face6 {
    -webkit-transform: rotateX(-90deg) translateZ(75px);
    -moz-transform: rotateX(-90deg) translateZ(75px);
    -ms-transform: rotateX(-90deg) translateZ(75px);
    transform: rotateX(-90deg) translateZ(75px);
    color: #EC4D28;
}

/*cube 2 face ----------------------------*/

#cube2 .face1 {
    -webkit-transform: translateZ(50px);
    -moz-transform: translateZ(50px);
    -ms-transform: translateZ(50px);
    transform: translateZ(50px);
    color: #DD0031;
}

#cube2 .face2 {
    -webkit-transform: rotateY(90deg) translateZ(50px);
    -moz-transform: rotateY(90deg) translateZ(50px);
    -ms-transform: rotateY(90deg) translateZ(50px);
    transform: rotateY(90deg) translateZ(50px);
    color: #F06529;
}

#cube2 .face3 {
    -webkit-transform: rotateY(90deg) rotateX(90deg) translateZ(50px);
    -moz-transform: rotateY(90deg) rotateX(90deg) translateZ(50px);
    -ms-transform: rotateY(90deg) rotateX(90deg) translateZ(50px);
    transform: rotateY(90deg) rotateX(90deg) translateZ(50px);
    color: #28A4D9;
}

#cube2 .face4 {
    -webkit-transform: rotateY(180deg) rotateZ(90deg) translateZ(50px);
    -moz-transform: rotateY(180deg) rotateZ(90deg) translateZ(50px);
    -ms-transform: rotateY(180deg) rotateZ(90deg) translateZ(50px);
    transform: rotateY(180deg) rotateZ(90deg) translateZ(50px);
    color: #5ED4F4;
}

#cube2 .face5 {
    -webkit-transform: rotateY(-90deg) rotateZ(90deg) translateZ(50px);
    -moz-transform: rotateY(-90deg) rotateZ(90deg) translateZ(50px);
    -ms-transform: rotateY(-90deg) rotateZ(90deg) translateZ(50px);
    transform: rotateY(-90deg) rotateZ(90deg) translateZ(50px);
    color: #EFD81D;
}

#cube2 .face6 {
    -webkit-transform: rotateX(-90deg) translateZ(50px);
    -moz-transform: rotateX(-90deg) translateZ(50px);
    -ms-transform: rotateX(-90deg) translateZ(50px);
    transform: rotateX(-90deg) translateZ(50px);
    color: #EC4D28;
}

@keyframes spincube {
    from,
    to {
      -moz-transform: rotateX(10deg) rotateY(10deg) rotateZ(10deg);
      -ms-transform: rotateX(10deg) rotateY(10deg) rotateZ(10deg);
      transform: rotateX(10deg) rotateY(10deg) rotateZ(10deg);
    }
    16% {
      -moz-transform: rotateY(-60deg);
      -ms-transform: rotateY(-60deg);
      transform: rotateY(-60deg);
    }
    33% {
      -moz-transform: rotateY(-40deg) rotateZ(30deg);
      -ms-transform: rotateY(-40deg) rotateZ(30deg);
      transform: rotateY(-40deg) rotateZ(30deg);
    }
    66% {
      -moz-transform: rotateY(-230deg) rotateX(70deg);
      -ms-transform: rotateY(-230deg) rotateX(70deg);
      transform: rotateY(-230deg) rotateX(70deg);
    }
    83% {
      -moz-transform: rotateX(40deg);
      -ms-transform: rotateX(40deg);
      transform: rotateX(40deg);
    }
}

@keyframes spincube2 {
    from,
    to {
      -moz-transform: rotateX(70deg) rotateY(40deg) rotateZ(30deg);
      -ms-transform: rotateX(70deg) rotateY(40deg) rotateZ(30deg);
      transform: rotateX(70deg) rotateY(40deg) rotateZ(30deg);
    }
    16% {
      -moz-transform: rotateY(-80deg);
      -ms-transform: rotateY(-80deg);
      transform: rotateY(-80deg);
    }
    33% {
      -moz-transform: rotateY(-10deg) rotateZ(20deg);
      -ms-transform: rotateY(-10deg) rotateZ(20deg);
      transform: rotateY(-10deg) rotateZ(20deg);
    }
    66% {
      -moz-transform: rotateY(-200deg) rotateX(40deg);
      -ms-transform: rotateY(-200deg) rotateX(40deg);
      transform: rotateY(-200deg) rotateX(40deg);
    }
    83% {
      -moz-transform: rotateX(60deg);
      -ms-transform: rotateX(60deg);
      transform: rotateX(60deg);
    }
}

</style>
