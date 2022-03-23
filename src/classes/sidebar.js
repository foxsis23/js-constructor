import {block} from '../utils'
import { TitleBlock,TextBlock,ImageBlock,ColumnsBlock } from './blocks';

export class Sidebar{
    constructor(selector, updateCallBack){
        this.$el = document.querySelector(selector);
        this.update = updateCallBack;

        this.init();
    }

    init(){
        this.$el.insertAdjacentHTML('afterbegin',this.template);
        this.$el.addEventListener('submit',this.add.bind(this));
    }

    add(event){
         event.preventDefault();

         const type = event.target.name;

         const value = event.target.value.value;
         const styles = event.target.styles.value;

         let newBlock;

         if(type === 'title'){
             newBlock = new TitleBlock(value,{styles: styles});
         }else if(type === 'text'){
             newBlock = new TextBlock(value,{styles:styles});
         }else if(type === 'image'){
             newBlock = new ImageBlock(value,{styles:styles});
         }

         this.update(newBlock);

         debugger
         event.target.value.value = '';
         event.target.styles.value = '';
    }


    get template(){
        return [
            block('text'),
            block('title'),
            block('image'),

        ].join('');
    }
}


