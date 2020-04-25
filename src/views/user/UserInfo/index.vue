<!--个人信息设置页面-->
<template>
    <el-container>
        <el-header>
            <user-header></user-header>
        </el-header>
        <el-main style="margin-top: 3em;">
            <el-button type="success">
                <router-link to="/user/createReceiveAddress" class="link">
                    新增收货地址
                </router-link>
            </el-button>
            <el-button type="danger">
                <router-link to="/user/deleteReceiveAddress" class="link">
                    删除收货地址
                </router-link>
            </el-button>
            <el-button type="danger" @click="isVisible=true">
                编辑头像
            </el-button>
            <upload-avatar v-if="isVisible" @close="isVisible=false"></upload-avatar>
        </el-main>
    </el-container>
</template>

<script>
    import UserHeader from "../../../components/user/Header"
    import UploadAvatar from "./UploadAvatar";

    export default {
        name: "UserInfo",
        components: {
            UserHeader,
            UploadAvatar
        },
        data() {
            return {
                isVisible: false,
            };
        }
    }
</script>

<style scoped>
    .link {
        display: inline-block;
        color: inherit;
        width: 100%;
        height: 100%;
    }
</style>
