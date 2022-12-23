// import Circle from "./geometries/Circle";
import Personagem from './Personagem.js';

export default class Food extends Personagem{
	constructor(x, y, size,speed=0,width=50, height=50,imgUrl,FRAMES) {
		super(x, y, size, speed=0,width=50, height=50,imgUrl,FRAMES)
		
		this.x=x
		this.y=y
		this.size=size
		this.speed=speed
		// this.line = 1
		// this.color=color

		this.cellWidth = 16
		this.cellHeight= 16
		this.totalSprites = 3

		

	}

	move(boundaries){

        this.x=Math.random()*(boundaries.width-50);
		this.y=Math.random()*(boundaries.height-50);
		this.updateHit()
	}
	// draw(ctx) {
	// 	this.circ(ctx,
	// 		this.x,
	// 		this.y,
	// 		this.size,
	// 		this.line,
	// 		this.color,
	// 		this.color)
	// }

	// circ(ctx, pos_x, pos_y, radius, line, color, fill = false) {
	// 	ctx.lineWidth = line;
	// 	ctx.strokeStyle = color
	// 	ctx.beginPath();
	// 	ctx.arc(pos_x, pos_y, radius, 0, Math.PI*2);
	// 	ctx.stroke();
	// 	if (fill) {
	// 		ctx.fillStyle = fill
	// 		ctx.fill()
	// 	}
	// }

	limits(limits){

		if(this.y - this.size > limits.height ){
			this.y = -2*this.size
			this.x = Math.random()*limits.width;
		}
	}

	colide(other) {
		return (this.size + other.size >= 
			Math.sqrt((this.x-other.x)**2 + (this.y-other.y)**2)
		)
	}
}







