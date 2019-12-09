import axios from 'axios';

const state = {
    articles:[],
    token: '' || null,
};

const getters = {
    allArticles: (state) => state.articles,
    loggedIn(state) {
        return state.token
    }
};

const actions = {
    //actions relativos aos artigos e seus comentários
    async fetchArticles({ commit }) {
        console.log('token', this.getters.loggedIn);
        
        var config = {
            headers: {'Authorization': "Bearer " + this.getters.loggedIn}
        };

        const res = await axios.get('/api/article', config);
        console.log('fetcharticle',res.data);
        commit('setArticles', res.data);
    },
    async addArticle({ commit }, article) {
        console.log('token', this.getters.loggedIn);
        
        var config = {
            headers: {'Authorization': "Bearer " + this.getters.loggedIn}
        };

        const res = await axios.post('/api/article', article, config);

        commit('newArticle', res.data);

    },
    async deleteArticle({ commit }, id) {
        console.log('token', this.getters.loggedIn);
        var config = {
            headers: {'Authorization': "Bearer " + this.getters.loggedIn}
        };
        await axios.delete(`api/article/${id}`, config);

        commit('removeArticle', id);
    },
    async updateArticle({ commit }, updArticle) {
        console.log('token', this.getters.loggedIn);
        var config = {
            headers: {'Authorization': "Bearer " + this.getters.loggedIn}
        };
        const data = {title: updArticle.title, text: updArticle.text};
        const res = await axios.put(`/api/article/${updArticle.id}`, data, config);

        commit(updArticle, res.data);
    },
    async fetchOneArticle({ commit }, id) {
        console.log('token', this.getters.loggedIn);
        var config = {
            headers: {'Authorization': "Bearer " + this.getters.loggedIn}
        };
        const res = await axios.get(`api/article/${id}`, config);
        console.log('fetchonearticle',res.data);
        commit('setArticles', res.data);
    },
    async addComment({ commit }, newComment) {
        console.log('token', this.getters.loggedIn);
        var config = {
            headers: {'Authorization': "Bearer " + this.getters.loggedIn}
        };
        const res = await axios.post('/api/comment', newComment, config);

        commit('newComment', res.data);
    },

    //actions de autenticaçao
    async retrieveToken({ commit }, credentials) {
        const res = await axios.post('/api/auth/login', credentials);
        console.log('login',res.data);
        // localStorage.setItem('access_token', res.data.token);
        commit('retrieveToken', res.data.token);
    },
    async registerUser({ commit }, newUser) {
        const res = await axios.post('/api/auth/register', newUser);
        console.log(res.data);
    },
    async destroyToken({ commit }) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token;
        await axios.get('/api/auth/logout').catch(err => console.log('err', err));
        // localStorage.removeItem('access_token');
        commit('destroyToken');
    }

};

const mutations = {
    setArticles: (state, articles) => (state.articles = articles),
    newArticle: (state, article) => state.articles.push(article),
    removeArticle: (state, id) => state.articles = state.articles.filter(article => article.id !== id),
    updateArticle: (state, updArticle) => (state.articles = updArticle),
    newComment: (state, commentData) => {
        state.articles.comments.push(commentData);
        console.log('state',state.articles.comments);
    },
    //
    retrieveToken: (state, token) => (state.token = token),
    destroyToken: (state) => {
        state.token = null
        console.log(state.token);
    },
};

export default {
    state: state,
    getters: getters, 
    actions: actions,
    mutations: mutations
};