import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import AddArticle from './components/AddArticle.vue';
import ArticleDetail from './components/ArticleDetail.vue';
import ArticleUpdate from './components/ArticleUpdate.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/addarticle',
            name: 'addarticle',
            component: AddArticle
        },
        {
            path: '/article/:id',
            name: 'articledetail',
            component: ArticleDetail,
            props: true
        },
        {
            path: '/articleedit/:id',
            name: 'articleupdate',
            component: ArticleUpdate,
            props: true
        },
    ]
});