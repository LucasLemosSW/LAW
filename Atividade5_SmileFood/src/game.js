import Enemy from "./Enemy"
import Food from "./Food"
import Hero from "./Hero"
import Smile from "./Smile"
import { keyPress, key } from "./keyboard"

let CTX
let CANVAS
const FRAMES = 30

const qtdEnemies = 6

let enemies = Array.from({length:qtdEnemies});

const smile = new Smile(300, 100, 20, 6, 'yellow')

const hero = new Hero(310,100,20,5,82,89,'img/goblin.png',FRAMES)

let food = new Food(50,50,5,5,'blue');

let gameover = false
let foodCollected = false
let anime;
let boundaries

const init = () => {
	console.log("Initialize Canvas")
	CANVAS = document.querySelector('canvas')
	CTX = CANVAS.getContext('2d')
	
	boundaries = {
		width: CANVAS.width,
		height: CANVAS.height
	}

	enemies = enemies.map(i=>new Enemy(
			Math.random()*CANVAS.width,
			Math.random()*CANVAS.height,
			10, 5, 'red'
		))
	
	keyPress(window)
	loop()
}

const loop = () => {
	setTimeout(() => {

		CTX.clearRect(0, 0, CANVAS.width, CANVAS.height)

		smile.move(boundaries, key)
		smile.paint(CTX)

		// enemies.forEach(e =>{
		// 	e.move(boundaries, 0) 
		// 	e.draw(CTX)
		// 	 //var = teste?verdadeiro:falso;
		// 	 gameover = !gameover 
		// 	 		? e.colide(smile)
		// 			: true;
		// })

		console.log(key);
		hero.move(boundaries, key)
		hero.draw(CTX)

		foodCollected = !foodCollected ? food.colide(smile) : true;

		if(foodCollected){
			food = new Food(	Math.random()*CANVAS.width,
								Math.random()*CANVAS.height,5,5,'blue');
			foodCollected=false;
			smile.eatFood();
		}

		food.draw(CTX);

		if (gameover) {
			console.error('DEAD!!!')
			cancelAnimationFrame(anime)
		} else	anime = requestAnimationFrame(loop)

	}, 1000 / FRAMES)
}

export { init }