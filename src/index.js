import {HeaderComponent} from '../src/components/header.components'
import {NavigationComponent} from '../src/components/navigation.component'
import { CreateComponent } from './components/create.component'
import { FavoriteComponent } from './components/favorite.component'
import { PostsComponent } from './components/posts.component'


new HeaderComponent('header')

const navigation = new NavigationComponent('navigation')

const posts = new PostsComponent('posts')
const favorite = new FavoriteComponent('favorite')
const create = new CreateComponent('create')


navigation.registerTabs([
    {name: 'create', component: create},
    {name: 'posts', component: posts},
    {name: 'favorite', component: favorite},
    ])
// console.log(navigation);
