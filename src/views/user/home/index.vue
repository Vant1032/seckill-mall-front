<template>
    <el-container>
        <el-header style="background-color: #E3E4E5">
            <el-row class="full" type="flex" align="middle">
                <el-col :span="12">
                    <div>秒杀商城</div>
                </el-col>
                <el-col :span="12" style="display: flex; justify-content: center">
                    <div class="full" v-if="!isLogin">
                        <router-link to="/login">登录/注册</router-link>
                    </div>
                </el-col>
            </el-row>
        </el-header>
        <el-main style="background-color: #2D93CA">
            <el-container>
                <el-header>
                    <el-tabs>
                        <!-- 指定品类目录 -->
                        <el-tab-pane label="秒杀商品" name="first">

                        </el-tab-pane>
                    </el-tabs>
                </el-header>
                <el-main>

                </el-main>
            </el-container>
        </el-main>
        <el-footer style="background-color: #42b983">
        </el-footer>
    </el-container>
</template>

<script>
    import axios from "../../../utils/net";
    import utils from "../../../utils/utils";
    export default {
        name: "Home",
        data: function () {
            return {
                isLogin: this.$store.isLogin,
            };
        },
        computed: {
        },
        mounted() {
            axios.post('/goods/getGoodsList', {
                startTime: utils.getTimeOfLastHour(),
                endTime: utils.getTimeOfNextHour(),
            }).then((response) => {
                let data = response.data;
                if (data.code === 0) {
                    this.$store.goodsList = data.data;
                } else {
                    this.$message(data.msg);
                }
            })
        }
    }
</script>

<style scoped>
    .full1 {
        height: 100%;
        width: 100%;
    }
</style>
