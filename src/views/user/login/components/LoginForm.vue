<!--注册页面-->
<template>
    <div style="width: 100%; height: 100%;">
        <div style="display: flex; align-content: center; justify-content: center;">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="login-form">
                <div class="title-container">
                    <h3 class="title">用户登录</h3>
                </div>
                <el-form-item label="用户名" prop="userName">
                    <el-input type="password" v-model="ruleForm.userName"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import axios from "../../../../utils/net";
    import _ from 'lodash';

    export default {
        name: 'LoginForm',
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                }
                callback();
            };
            var validateUserName = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名'));
                }
                callback();
            };
            return {
                ruleForm: {
                    pass: '',
                    userName: '',
                },
                rules: {
                    pass: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    userName: [
                        {validator: validateUserName, trigger: 'blur'}
                    ]
                }
            };
        },
        watch: {},
        created() {
        },
        mounted() {
        },
        destroyed() {
        },
        methods: {

            submitForm(formName) {
                var that = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        const form = that.ruleForm;
                        axios.post('/user/login', {
                            userName: form.userName,
                            password: form.pass
                        }).then(function (response) {
                            const data = response.data;
                            if (data.code === 0) {
                                window.location.href = '/#/home';
                            } else if (!_.isEmpty(data.msg)) {
                                that.$message(data.msg);
                            }
                        });
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }

        }
    }
</script>

<style lang="css" scoped>
    .login-form {
        width: 50%;
    }

    .title-container {
        margin: 5em 0 2em;
    }
</style>
