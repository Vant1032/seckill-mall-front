<template>
    <el-container>
        <el-header>
            <user-header></user-header>
        </el-header>
        <el-main>
            <el-row>
                <el-col :span="6">
                    <div class="empty"></div>
                </el-col>

                <el-col :span="6">
                    <el-image :src="goodsUrl" lazy :preview-src-list="[goodsUrl]" class="img">
                    </el-image>
                </el-col>
                <el-col :span="6">
                    <el-container>
                        <el-main>
                            <div class="item" style="font-size: 2em">
                                {{ goods.goodsName }}
                            </div>
                            <div class="item">
                                价格<span style="color: red; font-size: 2em">￥{{ goods.price }}</span>
                            </div>
                            <div class="item">
                                库存：{{ goods.amount }}
                            </div>
                            <div class="item">
                                {{ goods.descInfo }}
                            </div>
                            <div>
                                <el-button>
                                    加入收藏夹
                                </el-button>
                                <el-button>
                                    立即购买
                                </el-button>
                            </div>

                        </el-main>
                    </el-container>
                </el-col>


                <el-col :span="6">
                    <div class="empty"></div>

                </el-col>
            </el-row>

        </el-main>
    </el-container>
</template>

<script>
    import axios from "../../../utils/net";
    import api from "../../../utils/api";
    import utils from "../../../utils/utils";
    import UserHeader from "../../../components/user/Header"

    export default {
        name: "GoodsDetail",
        components: {
            UserHeader
        },
        data() {
            return {
                goods: {
                    goodsId: 0,
                    goodsName: '',
                    imgName: 'loading.jpg',
                    price: '',
                    amount: '',
                    descInfo: '',
                    seckillTime: '',
                }
            };
        },
        computed: {
            goodsUrl() {
                return utils.imgFullUrl(this.goods.imgName);
            }
        },
        methods: {
            loadData() {
                let goodsId = this.$route.query.goodsId;
                let that = this;
                axios.post(api.getGoodsById, {
                    goodsId
                }).then(response => utils.handleRsp(response.data, that.$message, (rspData) => {
                    that.goods.goodsId = rspData.goodsId;
                    that.goods.goodsName = rspData.goodsName;
                    that.goods.imgName = rspData.imgName;
                    that.goods.price = rspData.price;
                    that.goods.amount = rspData.amount;
                    that.goods.descInfo = rspData.descInfo;
                    that.goods.seckillTime = rspData.seckillTime;
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
    .item {
        text-align: left;
        margin: 1em;
    }

    .img {
        box-shadow: 1px 2px 4px #cdcdcd;
    }
</style>
