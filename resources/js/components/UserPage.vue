<template>
    <div>
        <div>User: {{userData.name}}</div>
        <div>E-mail: {{userData.email}}</div>
        <div>
            <div>My Articles</div>
            <div v-bind:key="article.id" v-for="article in userData.articles">
                <router-link :to="{ name: 'articledetail', params: { id: article.id }}">
                    {{article.title}}
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: 'UserPage',
    created() {
        this.getUserData();
    },
    methods: {
        ...mapActions(["getUserData"]),
    },
    computed: mapGetters(['userData']),

}
</script>