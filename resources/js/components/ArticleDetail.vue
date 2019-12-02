<template>
    <div>
        <h1>{{article.title}}</h1>
        <h3>{{article.text}}</h3>
        <div>
            <form @submit="addComment" method="post">
                <input type="text" v-model="commentText" name="commentText" placeholder="Add Text"  />
                <input type="submit" value="Submit" class="btn">
            </form>
        </div>
        <div v-bind:key="comment.id" v-for="comment in article.comments">
            {{ comment.commentText }}
        </div>
        
    </div>
</template>
<script>
export default {
    name: "ArticleDetail",
    props: ["id"],
    data() {
        return {
            article: [],
            commentText: ''
        }
    },
    methods: {
        addComment(e) {
            e.preventDefault();
            const newComment = {
                commentText: this.commentText,
                article_id: this.id
            }
            console.log('newComment', newComment);
            this.commentText = '';
            axios.post('/api/comment', newComment)
            .then(res => this.commentText = res.data.data)
            .catch(err => console.log(err));
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