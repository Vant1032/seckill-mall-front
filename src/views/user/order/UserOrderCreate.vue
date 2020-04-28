<!--订单创建页-->
<template>
    <el-container>
        <el-header>
            <user-header></user-header>
        </el-header>
        <el-main>
            <el-row>
                <el-col :span="8" class="empty">

                </el-col>
                <el-col :span="8">
                    <el-form ref="orderForm" :model="orderForm">
                        <el-form-item label="收货地址" required class="left">
                            <el-select v-model="orderForm.addrId" placeholder="请选择收货地址">
                                <el-option :label="item.receiverName+' '+item.province+item.city+item.county+item.detailAddr"
                                           :value="item.addrId" v-for="item in receiveAddressList" :key="item.addrId">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="商品名" class="left">
                            <span>{{ goods.goodsName }}</span>
                        </el-form-item>
                        <el-form-item label="价格" class="left">
                            <span>{{ goods.price }}</span>
                        </el-form-item>
                        <el-form-item label="数量" class="left">
                            <span>1</span>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submit">
                                提交订单
                            </el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="8" class="empty">

                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
    import UserHeader from "../../../components/user/Header"
    import axios from "../../../utils/net";
    import utils from "../../../utils/utils";
    import api from "../../../utils/api";

    export default {
        name: "UserOrderCreate",
        components: {
            UserHeader
        },
        data() {
            return {
                goods: {},
                orderForm: {},

                // 要显示的数据
                // 收货地址列表
                receiveAddressList: [],
            };
        },
        computed: {},
        methods: {
            submit() {
                this.$message("提交订单成功");
                let that = this;
                let orders = [];
                orders.push({
                    goodsId: this.goods.goodsId,
                    amount: this.goods.amount,
                });
                axios.post(api.orderCreate, {
                    addrId: this.orderForm.addrId,
                    orders,
                }).then(response => utils.handleRsp(response.data, that.$message, () => {

                }));
                this.$router.push("/index");
            },
            loadData() {
                let that = this;
                let goodsId = this.$route.query.goodsId;
                axios.post(api.userGetAllReceiveAddress, {}).then(response => utils.handleRsp(response.data, that.$message, (rspData) => {
                    that.receiveAddressList = rspData;
                }));
                axios.post(api.getGoodsById, {
                    goodsId
                }).then(response => utils.handleRsp(response.data, that.$message, (rspData) => {
                    that.goods = rspData;
                }));
            }
        },
        mounted() {
            this.loadData();
        },

    }
</script>

<style scoped>
    .empty {
        border-radius: 0px;
        min-height: 36px;
    }
    .left {
        text-align: left;
    }
</style>
