import {Component} from '../core/component'

export class HeaderComponent extends Component{
    constructor(id){
        super(id)
    }
    init(){
        const btn = this.$el.querySelector('.js-header-start')
        .addEventListener('click', buttonHendler.bind(this))
    }
}

function buttonHendler(){
    console.log(this);
}