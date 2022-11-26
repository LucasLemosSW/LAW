import Heroi from "./Heroi"
import Vilao from "./Vilao"
import Food from "./Food"
import Cenario from "./Cenario"
import { keyPress, key } from "./keyboard"
import { loadAudio, loadImage } from "./loaderAssets"

let CTX
let CANVAS
const FRAMES = 15

const Cenario1 = new Cenario('img/cenario.jpg')

const Heroi1 = new Heroi(50,50,1,10,82,89,'img/hero.png',FRAMES)

const Vilao1 = new Vilao(200,100,1.5,5,82,89,'img/goblin.png',FRAMES)
const Vilao2 = new Vilao(400,200,1.5,5,82,89,'img/goblin.png',FRAMES)
const Vilao3 = new Vilao(500,300,1.5,5,82,89,'img/goblin.png',FRAMES)
const Vilao4 = new Vilao(700,400,1.5,5,82,89,'img/goblin.png',FRAMES)
const Vilao5 = new Vilao(900,500,1.5,5,82,89,'img/goblin.png',FRAMES)

var food = new Food(	Math.random()*1150,
                        Math.random()*750,1,0,5,5,'img/potions.png',FRAMES);

let boundaries
let gameover = false
let foodCollected = false
let anime;

let sound
let theme
let gameoverSound

const init = async () => {

	CANVAS = document.querySelector('canvas')
	CTX = CANVAS.getContext('2d')

    gameoverSound = await loadAudio('sounds/gameover.wav')
    gameoverSound.volume= .6

    sound = await loadAudio('sounds/retrogame.ogg')
	sound.volume = .5

	theme = await loadAudio('sounds/illusory.mp3')
	theme.volume = .3
	theme.loop = true
    theme.play()
		
    boundaries = {
		width: CANVAS.width,
		height: CANVAS.height
	}

    keyPress(window)
	loop()
}

const loop = () => {
	setTimeout(() => {
        Cenario1.draw(CTX,boundaries);
        
        if(!foodCollected){
            // sound.play();
            if(food.colide(Heroi1.hit)){
                sound.play();
                food.move(boundaries)
                foodCollected=false;
                Heroi1.eatFood();
            }else if (food.colide(Vilao1.hit)){
                sound.play();
                food.move(boundaries)
                foodCollected=false;
                Vilao1.eatFood();
            }else if (food.colide(Vilao2.hit)){
                sound.play();
                food.move(boundaries)
                foodCollected=false;
                Vilao2.eatFood();
            }else if (food.colide(Vilao3.hit)){
                sound.play();
                food.move(boundaries)
                foodCollected=false;
                Vilao3.eatFood();
            }else if (food.colide(Vilao4.hit)){
                sound.play();
                food.move(boundaries)
                foodCollected=false;
                Vilao4.eatFood();
            }else if (food.colide(Vilao5.hit)){
                sound.play();
                food.move(boundaries)
                foodCollected=false;
                Vilao5.eatFood();
            }
        }


        food.draw(CTX);

        Heroi1.move(boundaries, key)
        Heroi1.draw(CTX)

        Vilao1.move(boundaries, key)
        Vilao1.draw(CTX)

        Vilao2.move(boundaries, key)
        Vilao2.draw(CTX)

        Vilao3.move(boundaries, key)
        Vilao3.draw(CTX)

        Vilao4.move(boundaries, key)
        Vilao4.draw(CTX)

        Vilao5.move(boundaries, key)
        Vilao5.draw(CTX)

        
        gameover = !gameover ? Heroi1.colide(Vilao1.hit) : true;
        gameover = !gameover ? Heroi1.colide(Vilao2.hit) : true;
        gameover = !gameover ? Heroi1.colide(Vilao3.hit) : true;
        gameover = !gameover ? Heroi1.colide(Vilao4.hit) : true;
        gameover = !gameover ? Heroi1.colide(Vilao5.hit) : true;

        theme.currentTime == 0 && theme.play()

        if (gameover) {
            gameoverSound.play();
			console.error('DEAD!!!')
			cancelAnimationFrame(anime)
		} else	anime = requestAnimationFrame(loop)
	}, 1000 / FRAMES)
}

export { init }