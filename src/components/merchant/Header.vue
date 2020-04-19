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
    import axios from "../../utils/net";
    import api from "../../utils/api";
    import error from "../../utils/error";

    export default {
        name: "MerchantHeader",
        computed: {
            isLogin() {
                return this.$store.state.isLogin;
            }
        },
        methods: {
            loginOut() {
                this.$store.commit('setIsLogin', false);
            }
        },
        created() {
            axios.post(api.adminGetLoginStatus, {
            }).then(response => {
                let rsp = response.data;
                if (rsp.code === 0) {
                    this.$store.commit('setIsLogin', true);
                } else if (rsp.code === error.NOT_LOGIN) {
                    this.$store.commit('setIsLogin', false);
                }
            });
        }
    }
</script>

<style scoped>

</style>
