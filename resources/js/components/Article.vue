<template>
    <div class="md-col-8 mc-offset-col-2">
        <router-link :to="{ name: 'articledetail', params: { id: article.id }}">
            <h3>{{article.title}}</h3>
            <div>{{article.text}}</div>
        </router-link>
        
        <div class="md-col-4">
            <router-link :to="{ name: 'articleupdate', params: { id: article.id }}">
                <button>Edit</button>
            </router-link>
            <button @click="$emit('deleteArticle', article.id)">Delete</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Article',
    props: ["article"],

    methods: {
        // deleteArticle(id) {
        //     axios.delete('api/article/'+this.article.id)
        //     .then(res => console.log('Article deleted'))
        //     .catch(err => console.log(err));
        // }
    }
}
</script>
<style></style>