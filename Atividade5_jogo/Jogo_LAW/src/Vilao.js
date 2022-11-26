import Personagem from './Personagem.js';

export default class Vilao extends Personagem {

    constructor(x, y, size, speed = 10, width, height,imgUrl,FRAMES) {
        super(x, y, size, speed, width, height,imgUrl,FRAMES)
        this.position = {
            'x': 0,
            'y': 0
        }

        this.x = x;
		this.y = y;
		this.size = size;
		this.speed = speed;

	}

    eatFood(){
		if(this.size<2.5){
			this.size+=0.2;
		}else{
			this.size=1;
			this.speed++;
		}
	}

    move(boundaries, key){

        // console.log("X: " + this.x + "POS: " + this.position.x );
        // console.log("Y: " + this.y + "POS: " + this.position.y );

        if(this.position.x==0){
            this.position.x=Math.random()*boundaries.width;
            this.position.y=Math.random()*boundaries.height;
        }

        let movements = {
			'down': {x: this.x,y: this.y + this.speed },
			'up': 	{ x: this.x, y: this.y - this.speed },
			'left': { x: this.x - this.speed, y: this.y },
			'rigth': { x: this.x + this.speed, y: this.y }
		}

        if(this.x<(this.position.x-this.speed)){
            this.status = 'rigth';
        }else if(this.x>(this.position.x+this.speed)) {
            this.status = 'left';
        }else if(this.y>(this.position.y+this.speed)){
            this.status = 'up';
        }else if(this.y<(this.position.y-this.speed)){
            this.status = 'down';
        }

        this.x = movements[this.status].x;
		this.y = movements[this.status].y;
        

        if( this.x>(this.position.x-this.speed) && this.x<(this.position.x+this.speed) && 
            this.y>(this.position.y-this.speed) && this.y<(this.position.y+this.speed)){

            this.position.x=Math.random()*(boundaries.width-70);
            this.position.y=Math.random()*(boundaries.height-120);

        }

        this.updateHit()

	}

}
