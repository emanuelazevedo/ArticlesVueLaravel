<template>
  <div class="register-page">
    <div class="row"><h2>Register</h2></div>
    
    <div class="row">
      <form action="#" @submit="register">
        
        <div>
          <label for="name">Name</label>
          <input type="text" name="name" id="name" class="login-input" v-model="name">
        </div>

        <div>
          <label for="email">Email</label>
          <input type="email" name="email" id="email" class="login-input" v-model="email">
        </div>

        <div >
          <label for="password">Password</label>
          <input type="password" name="password" id="password" class="login-input" v-model="password">
        </div>

        <div >
          <button type="submit" class="btn-submit">Create Account</button>
        </div>

      </form>
    </div>
  </div>
</template>

<script scoped>
import { mapActions } from "vuex";
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
        }
    },
    methods: {
        ...mapActions(["registerUser"]),
        register(e) {
            e.preventDefault();
            const newUser = {
                name: this.name,
                email: this.email,
                password: this.password,
            };
            this.registerUser(newUser);
        }
    }
}
</script>
<style>
    .register-page {
        position: relative;
        top: 10px;
        left: 10px;
    }

    form {
        width: 80%;
    }

    input {
        border-radius: 5px;
        width: 35%;
    }

    button {
        border-radius: 5px;
        width: 15%;
    }
</style>