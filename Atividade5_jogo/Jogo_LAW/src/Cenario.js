import { loadImage } from "./loaderAssets";

export default class Cenario {
    constructor(imgUrl) {
        this.imgUrl = imgUrl
		loadImage(this.imgUrl).then(img=>this.img = img)
    }

    draw(CTX,boundaries){
        CTX.drawImage(
			this.img,
			0,
			0,
			boundaries.width,
			boundaries.height
		)
    }

}
