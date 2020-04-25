<template>
    <el-container>
        <el-header>
            <user-header></user-header>
        </el-header>
        <el-main>
            <el-container>
                <el-main>
                    <el-tabs value="first">
                        <!-- 指定品类目录 -->
                        <el-tab-pane label="秒杀商品" name="first">
                            <goods-list-component :goods-list="goodsList"></goods-list-component>
                        </el-tab-pane>
                    </el-tabs>
                </el-main>
                <el-footer>
                    <el-pagination
                            background
                            layout="prev, pager, next"
                            :page-size="pageSize"
                            @current-change="loadData"
                            :total="totalGoods"
                            :current-page.sync="currentPage"
                    >
                    </el-pagination>
                </el-footer>
            </el-container>
        </el-main>
        <el-footer>
        </el-footer>
    </el-container>
</template>

<script>
    import axios from "../../../utils/net";
    import utils from "../../../utils/utils";
    import UserHeader from "../../../components/user/Header"
    import GoodsListComponent from "./components/GoodsListComponent";
    import api from "../../../utils/api";

    export default {
        name: "Home",
        components: {
            GoodsListComponent,
            UserHeader,
        },
        data: function () {
            return {
                isLogin: this.$store.state.isLogin,
                fullscreenLoading: true,
                goodsList: [],
                pageSize: 12,
                currentPage: 1,
                // 回传的告诉首页用于分页用的总共多少个goods
                totalGoods: 0,
            };
        },
        computed: {
        },
        methods: {
            loadData() {
                axios.post(api.getGoodsList, {
                    currentPage: this.currentPage,
                    pageSize: this.pageSize,
                    // startTime: utils.getTimeOfLastHour(new Date()),
                    startTime: new Date(2020, 1, 1, 0, 0, 0, 0),
                    // endTime: utils.getTimeOfNextHour(new Date()),
                    endTime: new Date(2030, 1, 1, 0, 0, 0, 0),
                }).then((response) => {
                    utils.handleRsp(response.data, this.$message, (data) => {
                        this.goodsList = data.goodsList;
                        this.totalGoods = data.total;
                    });
                });
            }
        },
        mounted() {
            this.loadData();
        }
    }
</script>

<style scoped>
</style>
