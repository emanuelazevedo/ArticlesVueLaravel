<template>
    <div class="page">
        <h1>New Article</h1>
        <div >
            <form @submit="onSubmit">
                <input type="text" v-model="title" name="title" placeholder="Add Title" />
                <br>
                <input type="text" v-model="text" name="text" placeholder="Add Text"  />
                <button type="submit" class="btn-submit">Submit</button>
            </form>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: 'AddArticle',
    data() {
        return {
            title: '',
            text: ''
        };
    },
    methods: {
        // addArticle(e) {
        //     e.preventDefault();
        //     const newArticle = {
        //         title: this.title,
        //         text: this.text
        //     }
        //     console.log('new article', newArticle);
        //     this.title = '';
        //     this.text = '';
        //     axios.post('/api/article', newArticle)
        //     .then(res => this.articles = res.data.data)
        //     .catch(err => console.log(err));
        // }
        ...mapActions(['addArticle']),
        onSubmit(e) {
            e.preventDefault();
            const newArticle = {
                title: this.title,
                text: this.text
            }
            this.addArticle(newArticle);
            // console.log('newArticle', newArticle);
        }
        
    }
}
</script>
<style></style>