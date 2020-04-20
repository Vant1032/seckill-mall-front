<template>
    <el-container style="border-bottom: 1px solid #dcdfe6">
        <el-main>
            <el-row type="flex">
                <el-col :span="12">
                    <router-link to="/index">
                        <el-link type="primary">秒杀商城</el-link>
                    </router-link>
                </el-col>
                <el-col :span="12">
                    <router-link to="/login">
                        <el-link type="primary" v-if="isUserLogin" @click="loginOut">退出登录</el-link>
                        <el-link type="primary" v-if="!isUserLogin">登录/注册</el-link>
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
        name: "UserHeader",
        computed: {
            isUserLogin() {
                return this.$store.state.isUserLogin;
            }
        },
        methods: {
            loginOut() {
                axios.post(api.userLoginOut, {
                }).then(response => {
                    let rsp = response.data;
                    if (rsp.code === 0) {
                        this.$store.commit('setIsUserLogin', false);
                    } else if (rsp.code === error.NOT_LOGIN) {
                        this.$store.commit('setIsUserLogin', false);
                    }
                });
            }
        },
        created() {
            axios.post(api.userGetLoginStatus, {
            }).then(response => {
                let rsp = response.data;
                if (rsp.code === 0) {
                    this.$store.commit('setIsUserLogin', true);
                } else if (rsp.code === error.NOT_LOGIN) {
                    this.$store.commit('setIsUserLogin', false);
                }
            });
        }
    }
</script>

<style scoped>

</style>
