<template>
    <el-container>
        <el-main>
            <el-image :src="goodsUrl">
            </el-image>
            <div>{{ goods.goodsName }}</div>
        </el-main>
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
        }
    }
</script>

<style scoped>

</style>
