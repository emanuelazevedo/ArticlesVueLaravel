<template>
    <div>
        <h2>Login</h2>
        <form @submit="login" method="post">
            <div>
                <label>Email</label>
                <input type="email" name="emanil" id="email" v-model="email">
            </div>

            <div>
                <label>Password</label>
                <input type="password" name="password" id="password" v-model="password">
            </div>

            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name:'login',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        login(e) {
            e.preventDefault();
            const user = {
                email: this.email,
                password: this.password
            }
            console.log('user', user);
            this.email = '';
            this.password = '';
            axios.post('/api/login', user)
            .then(res => this.user = res.data.data)
            .catch(err => console.log(err));
        }
    }
}
</script>