<template>
    <div>
        <form @submit="editArticle">
            <input type="text" v-model="allArticles.title" name="title"  />
            <br>
            <input type="text" v-model="allArticles.text" name="text"  />
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "ArticleUpdate",
    props: ['id'],
    data() {
        return {
            articles: [],
            
        }
    },
    methods: {
        ...mapActions(["fetchOneArticle", "updateArticle"]),
        editArticle(e){
            e.preventDefault();
            const updatedArticle = {
                id: this.id,
                title: this.allArticles.title,
                text: this.allArticles.text,
            };
            this.updateArticle(updatedArticle);
        }
        // updateArticle(e) {
        //     const updatedArticle = {
        //         title: this.article.title,
        //         text: this.article.text,
        //     }
        //     console.log('update article', updatedArticle);
        //     axios.put('/api/article/'+this.article.id, updatedArticle)
        //     .then(res => this.articles = res.data.data)
        //     .catch(err => console.log(err));
        // }
    },
    created () {
        this.fetchOneArticle(this.id);

    },
    computed: mapGetters(['allArticles']),
}
</script>
<style></style>

