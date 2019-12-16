<template>
    <div>
        <div class="row">
            <h2>Login</h2>
        </div>
        <div class="row">
            
            <form @submit="onSubmit">
                <div >
                    <label for="email">Username/Email</label>
                    <input type="email" name="email" id="email" class="login-input" v-model="email">
                </div>

                <div >
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" class="login-input" v-model="password">
                </div>

                <div>
                    <button type="submit" class="btn-submit">Login</button>
                </div>
           </form>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
    export default {
        name :"Login",
        data() {
            return {
                email:'',
                password: ''
            }
        },
        methods: {
            ...mapActions(["retrieveToken"]),
            onSubmit(e){
                e.preventDefault();
                const credentials = {
                    email: this.email,
                    password: this.password
                };
                console.log('credentials', credentials);
                this.retrieveToken(credentials).then(res => this.$router.push({name: 'home'}));
            }
        }
    }
</script>