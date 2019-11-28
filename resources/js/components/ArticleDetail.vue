<template>
    <div>
        <h1>{{article.title}}</h1>
        <h3>{{article.text}}</h3>
        
    </div>
</template>
<script>
export default {
    name: "ArticleDetail",
    props: ["id"],
    data() {
        return {
            article: [],
        }
    },
    created () {
        axios.get('/api/article/' + this.id)
        .then(res => this.article = res.data)
        .catch(err => console.log(err));
        
    },
}
</script>
<style>
</style>