<template>
    <div>
        <h1>Home</h1>
        <div v-bind:key="article.id" v-for="article in articles">
            <Article v-bind:article="article" v-on:deleteArticle="deleteArticle"  />
        </div>
    </div>
</template>
<script>
import Article from './Article.vue';
export default {
    name: 'Home',
    data() {
        return {
            articles: [],
        }
    },
    components: {
        Article
    },
    created () {
        axios.get('/api/article')
        .then(res => this.articles = res.data)
        .catch(err => console.log(err));
    },
    methods: {
        deleteArticle(id) {
            axios.delete('api/article/'+id)
            .then(res => this.articles = this.articles.filter(article => article.id !== id))
            .catch(err => console.log(err));
        },
        
    }
}
</script>
<style>
</style>