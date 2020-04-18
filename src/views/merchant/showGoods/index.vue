<!--商家显示商品列表页面-->
<template>
    <el-container>
        <el-header>
            <merchant-header></merchant-header>
        </el-header>
        <el-main>
            <show-goods-component></show-goods-component>
        </el-main>
    </el-container>
</template>

<script>
    import MerchantHeader from '../../../components/merchant/Header';
    import ShowGoodsComponent from "../../../components/ShowGoods";

    export default {
        name: "ShowGoods",
        components: {
            MerchantHeader,
            ShowGoodsComponent
        }
    }
</script>

<style scoped>

</style>
