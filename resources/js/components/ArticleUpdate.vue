<template>
    <div>
        <form @submit="updateArticle" method="get">
            <input type="text" v-model="article.title" name="title"  />
            <br>
            <input type="text" v-model="article.text" name="text"  />
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>
<script>
export default {
    name: "ArticleUpdate",
    props: ['id'],
    data() {
        return {
            article: [],
            
        }
    },
    methods: {
        updateArticle(e) {
            const updatedArticle = {
                title: this.article.title,
                text: this.article.text,
            }
            console.log('update article', updatedArticle);
            axios.put('/api/article/'+this.article.id, updatedArticle)
            .then(res => this.articles = res.data.data)
            .catch(err => console.log(err));
        }
    },
    created () {
        axios.get('/api/article/' + this.id)
        .then(res => this.article = res.data)
        .catch(err => console.log(err));
        
        // this.title = article.title;

    },
}
</script>
<style></style>

