import {
    Component
} from '../core/component'

export class NavigationComponent extends Component {
    constructor(id) {
        super(id)
        this.tabs =[]
    }
    init() {
        this.$el.addEventListener('click', tabClickHendler.bind(this))
    }
    registerTabs(tabs){
        this.tabs= tabs
    }
}

function tabClickHendler(event) {
    if (event.target.classList.contains('tab')) {
        Array.from(this.$el.querySelectorAll('.tab')).forEach(tab =>
            tab.classList.remove('active'))
            event.target.classList.add('active')
            
           const activeTab = this.tabs.find(t => t.name ===event.target.dataset.name) 
           this.tabs.forEach(tab=>tab.component.hide())
           activeTab.component.show()
           
    }
}