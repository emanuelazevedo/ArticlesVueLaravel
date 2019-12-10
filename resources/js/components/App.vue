<template>
    <div class="container">
        <div id="nav">
            <router-link v-if="loggedIn" to="/">Home</router-link>
            <router-link v-if="loggedIn" to="/addarticle">New Article</router-link>
            <router-link v-if="!loggedIn" to="/login">Login</router-link>
            <router-link v-if="!loggedIn" to="/register">Register</router-link>
            <router-link v-if="loggedIn" to="/user">Profile</router-link>
            <router-link v-if="loggedIn" to="/logout">Logout</router-link>
        </div>
        <router-view/>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed: mapGetters(['loggedIn'])
}
</script>
<style>
</style>