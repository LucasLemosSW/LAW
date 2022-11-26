import { loadImage } from "./loaderAssets";
import Circle from "./Circle";


export default class Personagem extends Circle{

    constructor(x, y, size, speed , width, height,imgUrl,FRAMES) {
        super(x,y,size)
        this.x = x;
		this.y = y;
		this.size = size;
		this.speed = speed;

		this.imgUrl = imgUrl
		loadImage(this.imgUrl).then(img=>this.img = img)

        this.cellWidth = 165
		this.cellHeight= 177
		this.cellX = 0
        this.cellY = 0
		this.totalSprites = 3
		this.spriteSpeed = 3

        this.widthDefault= width
        this.heightDefault= height
		this.width =  this.size*this.widthDefault
		this.height = this.size*this.heightDefault

        this.status = 'down';

        this.hit = new Circle(
			this.x + this.width/2,
			this.y + this.height/2,
			this.size*35,
			0,"transparent"
		)

        this.animeSprite(FRAMES)
		this.setControls()
	}

    draw(CTX){

        this.width =  this.size*this.widthDefault
		this.height = this.size*this.heightDefault

        this.setCellY()
		CTX.drawImage(
			this.img,
			this.cellX * this.cellWidth,
			this.cellY * this.cellHeight,
			this.cellWidth,
			this.cellHeight,
			this.x,
			this.y,
			this.width,
			this.height
		)

        this.hit.draw(CTX)

	}

    animeSprite (FRAMES){ //Controla a animacao do sprite
		setInterval(() => {
			this.cellX = this.cellX < this.totalSprites - 1 ? this.cellX + 1 : 0;
		}, 1000 / (FRAMES*this.spriteSpeed/10))
	}

    setControls(){
		this.controls = {
			's':'down',
			'w':'up',
			'a':'left',
			'd':'rigth'
		}
	}

    setCellY(){
		let sprites = {
			'down': 0,
			'up': 1,
			'left': 3,
			'rigth':2
		}

		this.cellY = sprites[this.status]
	}

    move(limits, key) {

        console.log(this.speed);

		let movements = {
			'down': {x: this.x,y: this.y + this.speed },
			'up': 	{ x: this.x, y: this.y - this.speed },
			'left': { x: this.x - this.speed, y: this.y },
			'rigth': { x: this.x + this.speed, y: this.y }
		}

		this.status = this.controls[key] ? this.controls[key] : this.status;

		this.x = movements[this.status].x;
		this.y = movements[this.status].y;

        this.updateHit()
		this.limits(limits)
	}

	limits(limits){

        console.log(this.x);
        console.log(limits);
        
		// this.x = this.x + this.widthDefault >= limits.width ? 0 : this.x
		// this.x = this.x - this.widthDefault <= 0 ? limits.width : this.x

		// this.y = this.y - this.heightDefault > limits.height+this.heightDefault ? -this.heightDefault : this.y
		// this.y = this.y + this.heightDefault < 0 ? limits.height + this.heightDefault : this.y
        this.x = this.x - (this.size) > limits.width ? -(this.size+50) : this.x

		this.x = this.x + (this.size+50) < 0 ? limits.width - (this.size+20) : this.x

		this.y = this.y - this.size > limits.height+this.size ? -(this.size+50) : this.y
		this.y = this.y + (this.size+50) < 0 ? limits.height - (this.size+20) : this.y
	}

    updateHit(){
		this.hit.x = this.x + this.width/2
		this.hit.y = this.y + this.height/2
	}

    colide(other) {

		return (this.hit.size + other.size >= Math.sqrt(
			(this.hit.x-other.x)**2 + (this.hit.y-other.y)**2)
		)
	}
}