import Circle from "./geometries/Circle";

export default class Food extends Circle{
	constructor(x, y, size,speed, color = "orange") {
		super(x,y,size,speed,color)
		this.line = 1
		// console.log('enemy',this) 
	}

	limits(limits){

		if(this.y - this.size > limits.height ){
			this.y = -2*this.size
			this.x = Math.random()*limits.width;
		}
	}
}







