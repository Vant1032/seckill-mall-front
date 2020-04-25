<template>
    <el-container>
        <el-header>
            <user-header></user-header>
        </el-header>
        <el-main>
            <el-row>
                <el-col :span="8" class="empty">

                </el-col>
                <el-col :span="8" class="empty">
                    <el-form ref="addressForm" :model="addressForm">
                        <el-form-item label="收件人">
                            <el-input v-model="addressForm.receiverName"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号">
                            <el-input type="number" v-model="addressForm.tel"></el-input>
                        </el-form-item>
                        <el-form-item label="省">
                            <el-input v-model="addressForm.province"></el-input>
                        </el-form-item>
                        <el-form-item label="市">
                            <el-input v-model="addressForm.city"></el-input>
                        </el-form-item>
                        <el-form-item label="区/县">
                            <el-input v-model="addressForm.county"></el-input>
                        </el-form-item>
                        <el-form-item label="详细地址">
                            <el-input v-model="addressForm.detailAddr"></el-input>
                        </el-form-item>
                        <el-form-item label="是否设为默认地址">
                            <el-radio-group v-model="addressForm.defaultAddr">
                                <el-radio :label="true">是</el-radio>
                                <el-radio :label="false">否</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item>
                            <el-button @click="onSubmit">
                                创建收货地址
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
    import UserHeader from "../../../components/user/Header";
    import axios from "../../../utils/net";
    import utils from "../../../utils/utils";
    import api from "../../../utils/api";

    export default {
        name: "CreateReceiveAddress",
        components: {
            UserHeader
        },
        data() {
            return {
                addressForm: {},
            };
        },
        methods: {
            onSubmit() {
                let that = this;
                axios.post(api.userCreateReceiveAddress, {
                    ...this.addressForm
                }).then(response => utils.handleRsp(response.data, that.$message, () => {
                    that.$message("创建成功");
                }));
            }
        },
    }
</script>

<style scoped>
    .empty {
        border-radius: 0;
        min-height: 36px;
    }
</style>
