<!--商家管理首页-->
<template>
    <el-container>
        <el-header>
            <merchant-header></merchant-header>
        </el-header>
        <el-main>
            <el-row>
                <el-col :span="12">
                    <router-link to="/merchant/createGoods"><el-link type="primary">创建商品</el-link></router-link>
                </el-col>
                <el-col :span="12">
                    <router-link to="/merchant/showGoods"><el-link type="primary">编辑商品</el-link></router-link>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <router-link to="/merchant/ShowWaitShippingOrder"><el-link type="primary">待发货订单</el-link></router-link>
                </el-col>
                <el-col :span="12">
                    <router-link to="/merchant/ShowWaitSignOrder"><el-link type="primary">待签收订单</el-link></router-link>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12"></el-col>
                <el-col :span="12"></el-col>
            </el-row>
        </el-main>
        <el-footer>

        </el-footer>
    </el-container>
</template>

<script>
    import MerchantHeader from '../../../components/merchant/Header'

    export default {
        name: "Manage",
        components: {
            MerchantHeader
        }
    }
</script>

<style scoped>

</style>
