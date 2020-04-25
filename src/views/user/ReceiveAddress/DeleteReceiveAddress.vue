<template>
    <el-container>
        <el-header>
            <user-header></user-header>
        </el-header>
        <el-main>
            <el-table :data="receiveAddressList"
                      style="width: 100%"
                      stripe
            >
                <el-table-column label="收件人" prop="receiverName">

                </el-table-column>
                <el-table-column label="电话号码" prop="tel">

                </el-table-column>
                <el-table-column label="省" prop="province">

                </el-table-column>
                <el-table-column label="市" prop="city">

                </el-table-column>
                <el-table-column label="区" prop="county">

                </el-table-column>
                <el-table-column label="详细地址" prop="detailAddr">

                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="danger" @click="deleteReceiveAddress(scope.row.addrId)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
    </el-container>
</template>

<script>
    import UserHeader from "../../../components/user/Header"
    import axios from "../../../utils/net";
    import api from "../../../utils/api";
    import utils from "../../../utils/utils";

    export default {
        name: "DeleteReceiveAddress",
        components: {
            UserHeader
        },
        data() {
            return {
                receiveAddressList: [],
            };
        },
        computed: {

        },
        methods: {
            loadData() {
                let that = this;
                axios.post(api.userGetAllReceiveAddress, {
                }).then(response => utils.handleRsp(response.data, that.$message, (rspData) => {
                    that.receiveAddressList = rspData;
                }))
            },
            deleteReceiveAddress(addrId) {
                let that = this;
                axios.post(api.deleteReceiveAddress, {
                    addrId
                }).then(response => utils.handleRsp(response.data, that.$message, () => {
                    that.loadData();
                    that.$message("删除成功");
                }));
            }
        },
        mounted() {
            this.loadData();
        }
    }
</script>

<style scoped>

</style>
