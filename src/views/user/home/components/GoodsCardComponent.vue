<template>
    <el-container>
        <el-main style="box-shadow: 1px 1px 5px #dcd8d8">
            <el-image :src="goodsUrl" style="width: 100%; height: 100%"></el-image>
            <div>
                <span style="font-size: 1.3em; overflow: hidden">{{ goods.goodsName }}</span>
            </div>
            <div style="color: red; display: flex; justify-content: space-between">
                <div style="font-size: 1.5em;"><span style="display: inline-block; height: 100%; line-height: 200%">¥ {{ goods.price }}</span>
                </div>
                <div><span>仅剩{{ goods.amount }}件</span></div>
                <el-button round type="danger" style="vertical-align: center" @click="toGoodsDetails">立即抢购</el-button>
            </div>
        </el-main>
        <el-footer>
        </el-footer>
    </el-container>
</template>

<script>
    import utils from "../../../../utils/utils";

    export default {
        name: "GoodsCardComponent",
        props: {
            goods: {
                type: Object,
                required: true,
            }
        },
        computed: {
            goodsUrl() {
                return utils.imgFullUrl(this.goods.imgName);
            }
        },
        methods: {
            toGoodsDetails() {
                window.location.href = '/#/goods/detail'
            }
        }
    }
</script>

<style scoped>

</style>
