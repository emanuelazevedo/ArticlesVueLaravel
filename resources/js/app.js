/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import Routes from './routes.js';
import store from './store/index.js';

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('App', require('./components/App.vue').default);
Vue.component('Home', require('./components/Home.vue').default);
Vue.component('Article', require('./components/Article.vue').default);
Vue.component('AddArticle', require('./components/AddArticle.vue').default);
Vue.component('ArticleDetail', require('./components/ArticleDetail.vue').default);
Vue.component('ArticleUpdate', require('./components/ArticleUpdate.vue').default);

Vue.component('UserPage', require('./components/UserPage.vue').default);

Vue.component('Login', require('./components/auth/Login').default);
Vue.component('Register', require('./components/auth/Register').default);
Vue.component('Logout', require('./components/auth/Logout').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    store: store,
    router: Routes,
    render:h => h(Vue.component('App', require('./components/App.vue').default))
});
