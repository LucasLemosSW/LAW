import Heroi from "./Heroi"
import Vilao from "./Vilao"
import Food from "./Food"
import Cenario from "./Cenario"
import { keyPress, key } from "./keyboard"

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

var food = new Food(	Math.random()*1200,
                        Math.random()*800,20,5,'Yellow');

let boundaries
let gameover = false
let foodCollected = false
let anime;

const init = () => {

	CANVAS = document.querySelector('canvas')
	CTX = CANVAS.getContext('2d')

    
		
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
            if(food.colide(Heroi1.hit)){
                food = new Food(	Math.random()*CANVAS.width,
								Math.random()*CANVAS.height,20,5,'Yellow');
                                foodCollected=false;
                                Heroi1.eatFood();
            }else if (food.colide(Vilao1.hit)){
                food = new Food(	Math.random()*CANVAS.width,
								Math.random()*CANVAS.height,20,5,'Yellow');
                                foodCollected=false;
                                Vilao1.eatFood();
            }else if (food.colide(Vilao2.hit)){
                food = new Food(	Math.random()*CANVAS.width,
								Math.random()*CANVAS.height,20,5,'Yellow');
                                foodCollected=false;
                                Vilao2.eatFood();
            }else if (food.colide(Vilao3.hit)){
                food = new Food(	Math.random()*CANVAS.width,
								Math.random()*CANVAS.height,20,5,'Yellow');
                                foodCollected=false;
                                Vilao3.eatFood();
            }else if (food.colide(Vilao4.hit)){
                food = new Food(	Math.random()*CANVAS.width,
								Math.random()*CANVAS.height,20,5,'Yellow');
                                foodCollected=false;
                                Vilao4.eatFood();
            }else if (food.colide(Vilao5.hit)){
                food = new Food(	Math.random()*CANVAS.width,
								Math.random()*CANVAS.height,20,5,'Yellow');
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

        if (gameover) {
			console.error('DEAD!!!')
			cancelAnimationFrame(anime)
		} else	anime = requestAnimationFrame(loop)
	}, 1000 / FRAMES)
}

export { init }