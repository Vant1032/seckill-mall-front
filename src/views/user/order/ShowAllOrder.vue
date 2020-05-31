<!--显示所有订单-->
<template>
    <el-container>
        <el-header>
            <user-header></user-header>
        </el-header>
        <el-main>
            <el-table :data="orders" stripe>
                <el-table-column label="商品名" prop="userOrders[0].goodsName">
                </el-table-column>

                <el-table-column label="单价" prop="userOrders[0].price">
                </el-table-column>

                <el-table-column label="数量" prop="userOrders[0].amount">
                </el-table-column>

                <el-table-column label="状态" prop="status">
                </el-table-column>

                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" v-if="scope.row.status === '待付款'" @click="payOrder(scope.row)">付款</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
    </el-container>
</template>

<script>
    import UserHeader from "../../../components/user/Header";
    import axios from "../../../utils/net";
    import api from "../../../utils/api";
    import utils from "../../../utils/utils";

    export default {
        name: "ShowAllOrder",
        components: {
            UserHeader
        },
        data() {
            return {
                orders: [],
            };
        },
        methods: {
            loadData() {
                let that = this;
                axios.post(api.userShowAllOrder, {
                }).then(response => {
                    utils.handleRsp(response.data, that.$message, rspData => {
                        let orders = rspData.userOrderInfos;
                        for (let order of orders) {
                            order.status = that.transferStatus(order.status);
                        }
                        that.orders = orders;
                    });
                });
            },
            transferStatus(status) {
                return utils.transferOrderStatus(status);
            },
            payOrder(row) {
                let that = this;
                axios.post(api.userPayOrder, {
                    orderId: row.orderId,
                }).then(response => {
                    utils.handleRsp(response.data, that.$message, () => {
                        that.loadData();
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
