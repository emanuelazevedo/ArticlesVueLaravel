<template>
    <div>
        <h1>Home</h1>
        <div v-bind:key="article.id" v-for="article in allArticles">
            <Article v-bind:article="article" v-on:deleteArticle="deleteArticle"  />
        </div>
    </div>
</template>
<script>
import Article from './Article.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'Home',
    // data() {
    //     return {
    //         articles: [],
    //     }
    // },
    components: {
        Article
    },
    created () {
        // axios.get('/api/article')
        // .then(res => this.$store.state.articles = res.data)
        // .catch(err => console.log(err));
        this.fetchArticles();
    },
    methods: {
        // deleteArticle(id) {
        //     axios.delete('api/article/'+id)
        //     .then(res => this.$store.state.articles = this.$store.state.articles.filter(article => article.id !== id))
        //     .catch(err => console.log(err));
        // },
        ...mapActions(['fetchArticles', "deleteArticle"])
        
    },
    computed: mapGetters(['allArticles']),
    
}
</script>
<style>
</style>