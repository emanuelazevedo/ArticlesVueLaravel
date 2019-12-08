<template></template>
<script>
import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions(['destroyToken'])
        },
        created() {
            this.destroyToken().then(res => this.$router.push({name: 'login'}));
        }
    }
</script>