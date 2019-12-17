<template>
    <div class="container-fluid">
        <div class="row">
            <div id="nav-bar">
                <div class="left-navbar">
                    <router-link v-if="loggedIn" to="/">Home</router-link>
                    <router-link v-if="loggedIn" to="/addarticle">New Article</router-link>
                    
                </div>
                <div class="right-navbar">
                    <router-link v-if="!loggedIn" to="/login">Login</router-link>
                    <router-link v-if="!loggedIn" to="/register">Register</router-link>
                    <router-link v-if="loggedIn" to="/user">Profile</router-link>
                    <router-link v-if="loggedIn" to="/logout">Logout</router-link>
                </div>
            </div>
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
#nav-bar {
    position: relative;
    width: 100%;
    background-color: rgb(116, 116, 238) !important;
    border-radius: 0px 0px 10px 10px;
    padding-bottom: 50px;
    

}

#nav-bar > div {
    padding-top: 5px;
}

#nav-bar > div > a {
    color: white;
    font-size: 1.8em;
    margin-top: 12px;
    margin-left: 10px;
}

#nav-bar > div > a:hover {
    text-decoration: none;
}

#nav-bar > .right-navbar {
    position: absolute;
    right: 10px;
}

#nav-bar > .left-navbar {
    position: absolute;
    left: 1px;
}
</style>