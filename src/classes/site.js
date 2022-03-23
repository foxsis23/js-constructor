

export class Site{
    constructor(selector){
        this.$el = document.querySelector(selector);
    }

    render(content){
        this.$el.innerHTML = '';
        content.forEach(block =>{
            this.$el.insertAdjacentHTML('beforeend',block.toHTML());
        })
    }
}