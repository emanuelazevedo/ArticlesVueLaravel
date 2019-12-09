import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import AddArticle from './components/AddArticle.vue';
import ArticleDetail from './components/ArticleDetail.vue';
import ArticleUpdate from './components/ArticleUpdate.vue';

import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import Logout from './components/auth/Logout.vue';

import store from './store/index.js';


Vue.use(Router);

const router =  new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/addarticle',
            name: 'addarticle',
            component: AddArticle,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/article',
            name: 'articledetail',
            component: ArticleDetail,
            props: true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/articleedit/',
            name: 'articleupdate',
            component: ArticleUpdate,
            props: true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            
        },
        {
            path: '/logout',
            name: 'logout',
            component: Logout
        },
    ]
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if(store.getters.loggedIn === null) {
            console.log('not logged in');
            next('/login');
            return
        } else {
            console.log('loggedin');
            next();
        }
    } 
    else {
        console.log('notAuth');
        next();
    }
})

export default router;