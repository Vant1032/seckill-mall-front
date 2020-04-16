<!--注册及登录页面-->
<template>
    <div id="main-Pane">
        <el-tabs type="card">
            <el-tab-pane label="登录">
                <login-form></login-form>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import LoginForm from "./components/LoginForm";

    export default {
        name: 'MerchantLogin',
        components: {
            LoginForm
        },
        data() {
            return {};
        },
        watch: {},
        created() {
        },
        mounted() {
        },
        destroyed() {
        },
        methods: {}
    }
</script>

<style lang="css" scoped>
    #main-Pane {
        /*width: 50%;*/
        /*height: 50%;*/
    }
</style>
