import Personagem from './Personagem.js';

export default class Heroi extends Personagem {

	constructor(x, y, size, speed = 10, width, height,imgUrl,FRAMES) {
        super(x, y, size, speed, width, height,imgUrl,FRAMES)

        this.cellWidth = 460
		this.cellHeight= 602

		this.totalSprites = 4
		// this.spriteSpeed = 3
        this.x = x;
		this.y = y;
		this.size = size;
		this.speed = speed;

	}

	eatFood(){
		console.log(this.speed);
		if(this.size<1.6){
			this.size+=0.1;
		}else{
			this.size=1;
			this.speed++;
		}
	}

	setCellY(){
		let sprites = {
			'down': 0,
			'up': 3,
			'left': 2,
			'rigth':1
		}
		this.cellY = sprites[this.status]

	}

}