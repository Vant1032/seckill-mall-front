<!--个人信息设置页面-->
<template>
    <el-container>
        <el-header>
            <user-header></user-header>
        </el-header>
        <el-main>
            <el-button type="success">
                <router-link to="/user/createReceiveAddress" style="color: inherit;">
                    新增收货地址
                </router-link>
            </el-button>
            <el-button type="danger">
                <router-link to="/user/deleteReceiveAddress" style="color: inherit;">
                    删除收货地址
                </router-link>
            </el-button>
        </el-main>
    </el-container>
</template>

<script>
    import UserHeader from "../../../components/user/Header"

    export default {
        name: "UserInfo",
        components: {
            UserHeader
        },
    }
</script>

<style scoped>

</style>
