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
                <el-tag type="warning">{{ tip }}</el-tag>
                <el-button round type="danger" style="vertical-align: center">
                    <router-link :to="to" v-if="!disabled" style="color: inherit;">立即抢购</router-link>
                    <span v-if="disabled">等待秒杀</span>
                </el-button>
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
        data() {
            return {
                timer: null,
                tip: '',
                disabled: false,
            };
        },
        computed: {
            goodsUrl() {
                return utils.imgFullUrl(this.goods.imgName);
            },
            to() {
                return {
                    path: '/goods/detail',
                    query: {
                        goodsId: this.goods.goodsId
                    }
                };
            },
        },
        methods: {
        },
        created() {
            let that = this;
            this.timer = setInterval(function () {
                let seckillTime = new Date(that.goods.seckillTime);
                let gap = seckillTime.getTime() - new Date().getTime();
                if (gap < 0) {
                    that.tip = '秒杀已开始';
                    that.disabled = false;
                    return;
                }
                that.tip = '仅剩' + utils.numToTime(gap);
                that.disabled = true;
            }, 200);
        },
        beforeDestroy() {
            if (this.timer) {
                clearInterval(this.timer);
            }
        },
    }
</script>

<style scoped>

</style>
