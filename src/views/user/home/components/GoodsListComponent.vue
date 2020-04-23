<template>
    <el-container>
        <el-main>
            <el-row :gutter="10" v-for="row in rowedGoodsList" :key="row.id" >
                <el-col v-for="goods in row.goodsList" :key="goods.goodsId" :span="row.colSpan">
                    <goods-card-component :goods="goods"></goods-card-component>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
    import GoodsCardComponent from "./GoodsCardComponent";

    export default {
        name: "GoodsListComponent",
        components: {
            GoodsCardComponent,
        },
        props: {
            // 商品列表
            goodsList: {
                type: Array,
                required: true,
                default: function () {
                    return [];
                },
            },
        },
        data() {
            return {
                rowLength: 4,
            };
        },
        computed: {
            rowedGoodsList() {
                let rowId = 0;
                let now = 0;
                let result = [];
                let goodsList = this.goodsList;
                while (now < goodsList.length) {
                    let row = {};
                    row.id = rowId;
                    row.goodsList = [];
                    row.colSpan = 24 / this.rowLength;
                    for (let i = 0; i < this.rowLength && now < goodsList.length; i++) {
                        row.goodsList.push(goodsList[now]);
                        now++;
                    }
                    result.push(row);
                    rowId++;
                }
                return result;
            }
        }
    }
</script>

<style scoped>

</style>
