import {Component} from '../core/component'

export class HeaderComponent extends Component{
    constructor(id){
        super(id)
    }
    init(){
        if (localStorage.getItem('clicked')){
            this.hide()
        }
        const btn = this.$el.querySelector('.js-header-start')
        console.log(btn, this);
        btn.addEventListener('click', onButtonClick.bind(this))
    }
    
}
function onButtonClick(){
    localStorage.setItem('clicked', JSON.stringify(true))
    this.$el.style.display='none'
}