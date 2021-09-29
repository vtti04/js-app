
export class Component{
    constructor(id){
        this.$el = document.getElementById(id)
        this.init()
    }
    init(){}
    hide(){
        this.$el.style.display= 'none'
    }
} 