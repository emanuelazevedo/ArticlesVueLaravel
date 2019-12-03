import axios from 'axios';

const state = {
    articles:[],
};

const getters = {
    allArticles: (state) => state.articles
};

const actions = {
    async fetchArticles({ commit }) {
        const res = await axios.get('/api/article');
        console.log('fetcharticle',res.data);
        commit('setArticles', res.data);
    },
    async addArticle({ commit }, article) {
        const res = await axios.post('/api/article', article);

        commit('newArticle', res.data);

    },
    async deleteArticle({ commit }, id) {
        await axios.delete(`api/article/${id}`);

        commit('removeArticle', id);
    },
    async updateArticle({ commit }, updArticle) {
        const res = await axios.put(`/api/article/${updArticle.id}`, updArticle);

        commit(updArticle, res.data);
    },
    async fetchOneArticle({ commit }, id) {
        const res = await axios.get(`api/article/${id}`);
        console.log('fetchonearticle',res.data);
        commit('setArticles', res.data);
    },
    async addComment({ commit }, newComment) {
        const res = await axios.post('/api/comment', newComment);

        commit('newComment', res.data);
    }
};

const mutations = {
    setArticles: (state, articles) => (state.articles = articles),
    newArticle: (state, article) => state.articles.push(article),
    removeArticle: (state, id) => state.articles = state.articles.filter(article => article.id !== id),
    updateArticle: (state, updArticle) => {
        const index = state.articles.findIndex(article => article.id === updArticle.id);
        if(index !== -1) {
            state.articles.splice(index, 1, updArticle);
        }
    },
    newComment: (state, commentData) => {
        state.articles.comments.push(commentData);
        
    },
};

export default {
    state: state,
    getters: getters, 
    actions: actions,
    mutations: mutations
};