<!--修改密码-->
<template>
    <el-dialog :visible="visible">
        <el-form :model="form" :rules="rule">
            <el-form-item label="原密码" prop="oldPassword">
                <el-input type="password" v-model="form.oldPassword"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newPassword">
                <el-input type="password" v-model="form.newPassword"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="confirmPassword">
                <el-input type="password" v-model="form.confirmPassword"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="close">取 消</el-button>
            <el-button type="primary" @click="handleConfirm">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    import axios from "../../../utils/net";
    import api from "../../../utils/api";
    import utils from "../../../utils/utils";

    export default {
        name: "ChangeUserPassword",
        props: {
            visible: {
                type: Boolean,
            }
        },
        data() {
            return {
                form: {},
                rule: {
                    newPassword: [
                        {
                            validator: (rule, value, callback) => {
                                if (value === '') {
                                    callback(new Error("请输入新密码"));
                                }
                                callback();
                            },
                            trigger: 'blur'
                        }
                    ],
                    confirmPassword: [
                        {
                            validator: (rule, value, callback) => {
                                if (this.form.newPassword !== value) {
                                    callback(new Error("确认密码与新密码不一致"));
                                }
                                callback();
                            },
                            trigger: 'blur'
                        }
                    ],
                }
            };
        },
        methods: {
            close() {
                this.$emit('close');
            },
            handleConfirm() {
                this.close();
                let that = this;
                axios.post(api.userChangePassword, {
                    oldPassword: this.form.oldPassword,
                    newPassword: this.form.newPassword,
                }).then(response => utils.handleRsp(response.data, that.$message, rspData => {
                    console.log(rspData);
                }))
            }
        },

    }
</script>

<style scoped>

</style>
