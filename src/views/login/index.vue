<!--注册及登录页面-->
<template>
    <div id="main-Pane">
        <el-tabs type="card">
            <el-tab-pane label="登录">
                <login-form></login-form>
            </el-tab-pane>
            <el-tab-pane label="注册">
                <sign-in-form></sign-in-form>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    // import axios from "../../utils/net";
    import LoginForm from "./components/LoginForm";
    import SignInForm from "./components/SignInForm";

    export default {
        name: 'Login',
        components: {SignInForm, LoginForm},
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
