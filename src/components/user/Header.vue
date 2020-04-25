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
                    <el-row>
                        <el-col :span="12">
                            <el-row>
                                <el-col :span="12">
                                    <el-avatar :src="avatarImageUrl" style="float: right"></el-avatar>
                                </el-col>
                                <el-col :span="12">
                                    <el-link type="primary" style="float: left; line-height: 300%">
                                        <router-link to="/user/info" v-if="isUserLogin" style="color: inherit;">
                                            个人中心
                                        </router-link>
                                    </el-link>
                                </el-col>
                            </el-row>

                        </el-col>
                        <el-col :span="12">
                            <router-link to="/login">
                                <el-link type="primary" v-if="isUserLogin" @click="loginOut">退出登录</el-link>
                                <el-link type="primary" v-if="!isUserLogin">登录/注册</el-link>
                            </router-link>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
    import axios from "../../utils/net";
    import api from "../../utils/api";
    import error from "../../utils/error";
    import utils from "../../utils/utils";
    import consts from "../../utils/consts";

    export default {
        name: "UserHeader",
        data() {
            return {
                avatarImageName: consts.DEFAULT_AVATAR_IMAGE_NAME,
            };
        },
        computed: {
            isUserLogin() {
                return this.$store.state.isUserLogin;
            },
            avatarImageUrl() {
                return utils.imgFullUrl(this.avatarImageName);
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
            },
            to() {
                this.$router.push('/user/info');
            }
        },
        created() {
            let that = this;
            axios.post(api.userGetLoginStatus, {}).then(response => {
                let rsp = response.data;
                if (rsp.code === 0) {
                    this.$store.commit('setIsUserLogin', true);
                } else if (rsp.code === error.NOT_LOGIN) {
                    this.$store.commit('setIsUserLogin', false);
                }
            });
            axios.post(api.userGetAvatar, {}).then(response => utils.handleRsp(response.data, that.$message, (rspData) => {
                that.avatarImageName = rspData.avatarImageName;
            }));
        }
    }
</script>

<style scoped>

</style>
