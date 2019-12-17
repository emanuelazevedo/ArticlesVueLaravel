<template>
    <div class="page">
        <h1>{{allArticles.title}}</h1>
        <h3>{{allArticles.text}}</h3>
        <div>
            <form @submit="onSubmit" method="post">
                <input type="text" v-model="commentText" name="commentText" placeholder="Add Text"  />
                <button type="submit" class="btn-submit">Submit</button>
            </form>
        </div>
        <div v-bind:key="comment.id" v-for="comment in allArticles.comments" class="comments">
            {{ comment.commentText }}
        </div>
        
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
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
        ...mapActions(["fetchOneArticle", "addComment"]),
        // addComment(e) {
        //     e.preventDefault();
        //     const newComment = {
        //         commentText: this.commentText,
        //         article_id: this.id
        //     }
        //     console.log('newComment', newComment);
        //     this.commentText = '';
        //     axios.post('/api/comment', newComment)
        //     .then(res => this.commentText = res.data.data)
        //     .catch(err => console.log(err));
        // }
        onSubmit(e) {
            e.preventDefault();
            const newComment = {
                commentText: this.commentText,
                article_id: this.id
            }
            this.commentText = '';
            this.addComment(newComment);
        }
    },
    created () {
        console.log('this.id', this.id);
        this.fetchOneArticle(this.id);

    },
    computed: mapGetters(['allArticles']),
}
</script>
<style>
    .comments {
        position: relative;
        left: 5px;
        top: 10px;
        font-size: 20px;
    }
</style>