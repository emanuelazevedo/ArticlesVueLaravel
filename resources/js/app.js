require('./bootstrap');
import Vue from 'vue'
import Routes from './routes.js'
import App from './components/App'
import Home from './components/Home'
import Article from './components/Article'
import AddArticle from './components/AddArticle'
import ArticleDetail from './components/ArticleDetail'
import ArticleUpdate from './components/ArticleUpdate'


Vue.component('home', Home)
Vue.component('article', Article)
Vue.component('addarticle', AddArticle)
Vue.component('articledetail', ArticleDetail)
Vue.component('articleupdate', ArticleUpdate)

const app = new Vue({
    el: '#app',
    router: Routes,
    render:h => h(App)
})