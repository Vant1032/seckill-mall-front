<template>
    <el-table :data="goodsList"
              style="width: 100%"
              stripe
    >
        <el-table-column label="商品名" prop="goodsName"></el-table-column>
        <el-table-column label="数量" prop="amount"></el-table-column>
        <el-table-column label="价格" prop="price"></el-table-column>
        <el-table-column label="秒杀时间" prop="seckillTime"></el-table-column>
        <el-table-column label="图片">
            <template slot-scope="scope">
                <el-image
                        style="width: 50px; height: 50px"
                        lazy
                        :preview-src-list="[generateImageUrl(scope.row.imgUrl)]"
                        :src="generateImageUrl(scope.row.imgUrl)">
                </el-image>
            </template>
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        @click="handleEdit(scope.row.goodsId)">编辑
                </el-button>
                <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.row.goodsId)">删除
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    import axios from "../utils/net";
    import utils from "../utils/utils";

    export default {
        name: "ShowGoodsComponent",
        data() {
            return {
                goodsList: []
            };
        },
        computed: {},
        mounted() {
            this.loadGoodsList();
        },
        methods: {
            handleEdit(goodsId) {
                console.log(goodsId);
            },
            handleDelete(goodsId) {
                axios.post('/admin/deleteGoods', {
                    goodsId
                }).then((response) => {
                    const rsp = response.data;
                    if (rsp.code === 0) {
                        this.$message("删除成功");
                        this.loadGoodsList();
                    } else {
                        this.$message(rsp.msg);
                    }
                });
            },
            generateImageUrl(imageUrl) {
                return this.$store.backendBaseUrl + '/static/' + imageUrl;
            },
            loadGoodsList() {
                axios.post('/goods/getGoodsList', {
                    startTime: new Date(),
                    endTime: utils.getNextDayStartTime(new Date())
                }).then((response) => {
                    let rsp = response.data;
                    if (rsp.code === 0) {
                        this.goodsList = rsp.data;
                    } else {
                        this.$message(rsp.msg);
                    }
                });
            }
        },
    }
</script>

<style scoped>

</style>
