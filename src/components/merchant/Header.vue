<template>
    <el-container style="border-bottom: 1px solid #dcdfe6">
        <el-main>
            <el-row type="flex">
                <el-col :span="12">
                    <router-link to="/merchant/manage">
                        <el-link type="primary">回到管理页</el-link>
                    </router-link>
                </el-col>
                <el-col :span="12">
                    <router-link to="/merchant/login">
                        <el-link type="primary" v-if="isLogin" @click="loginOut">退出登录</el-link>
                        <el-link type="primary" v-if="!isLogin">登录/注册</el-link>
                    </router-link>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "MerchantHeader",
        computed: {
            isLogin() {
                console.log("isLogin :" + this.$store.state.isLogin)
                return this.$store.state.isLogin;
            }
        },
        methods: {
            loginOut() {
                this.$store.commit('setIsLogin', false);
                console.log("loginOut: " + this.$store.state.isLogin);
            }
        },
        created() {

        }
    }
</script>

<style scoped>

</style>
