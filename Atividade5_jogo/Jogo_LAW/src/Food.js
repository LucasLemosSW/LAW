// import Circle from "./geometries/Circle";

export default class Food {
	constructor(x, y, size,speed, color = "orange") {
		this.line = 1
		this.x=x
		this.y=y
		this.size=size
		this.color=color
	}

	draw(ctx) {
		this.circ(ctx,
			this.x,
			this.y,
			this.size,
			this.line,
			this.color,
			this.color)
	}

	circ(ctx, pos_x, pos_y, radius, line, color, fill = false) {
		ctx.lineWidth = line;
		ctx.strokeStyle = color
		ctx.beginPath();
		ctx.arc(pos_x, pos_y, radius, 0, Math.PI*2);
		ctx.stroke();
		if (fill) {
			ctx.fillStyle = fill
			ctx.fill()
		}
	}

	limits(limits){

		if(this.y - this.size > limits.height ){
			this.y = -2*this.size
			this.x = Math.random()*limits.width;
		}
	}

	colide(other) {
		return (this.size + other.size >= Math.sqrt(
			(this.x-other.x)**2 + (this.y-other.y)**2)
		)
	}
}







