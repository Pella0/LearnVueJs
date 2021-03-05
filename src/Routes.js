import Acceuil from './components/Acceuil'
import Page1 from './components/Pages/Page1'
import Page2 from './components/Pages/Page2'
import Post from './components/Pages/Post'

const routes = [
    {
    path: '/',
    name: "Acceuil",
    component: Acceuil
    },
    { 
    path: '/page1',
    name:'Page1',
    component: Page1
    },
    {
    path: '/page2',
    name:'Page2',
    component: Page2
    },
    {
    path: '/blogpost/:id',
    name:'blogpost',
    component: Post
    }
]

export default routes