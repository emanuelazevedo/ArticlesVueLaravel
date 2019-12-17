<template>
    <div class="page">
        <div class="row"><h1>Home</h1></div>
        
        <div v-bind:key="article.id" v-for="article in allArticles" class="row">
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
<style scoped>
    .page {
        position: relative;
        top: 10px;
        left: 10px;
    }

</style>