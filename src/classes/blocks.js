import {row,col,css} from '../utils'


class Block{
    constructor(value, options){
        this.value = value;
        this.options = options;
    }

    toHTML(){
        throw new Error('Method must be realised.');
    }
}

export class TitleBlock extends Block{
    constructor(value,options) {
        super(value,options);
    }
 
    toHTML(){
        const {tag = 'h1', styles} = this.options;
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
    }
}

export class ImageBlock extends Block{
    constructor(value,options) {
        super(value,options);
    }

    toHTML(){
        const {alt ='',imageStyles,styles} = this.options;
        return row(`<img src="${this.value}" alt="${alt}" style="${css(imageStyles)}"/>`, css(styles));
    }
}

export class ColumnsBlock extends Block{
    constructor(value,options) {
        super(value,options);
    }

    toHTML(){
        let html = this.value.map(item => col(item));
        return row(html.join(''),css(this.options.styles));
    }
}

export class TextBlock extends Block{
    constructor(value,options) {
        super(value,options);
    }

    toHTML(){
        return row(col(`<p>${this.value}</p>`), css(this.options.styles));
    }
}