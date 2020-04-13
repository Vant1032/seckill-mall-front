<!--注册页面-->
<template>
    <div style="width: 100%; height: 100%;">
        <div style="display: flex; align-content: center; justify-content: center;">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="login-form">
                <div class="title-container">
                    <h3 class="title">用户注册</h3>
                </div>
                <el-form-item label="用户名" prop="userName">
                    <el-input type="userName" v-model="ruleForm.userName"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="sex" style="text-align: left">
                    <el-select v-model="ruleForm.sex" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="手机号" prop="tel">
                    <el-input v-model.number="ruleForm.tel"></el-input>
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
    export default {
        name: 'SignInForm',
        data() {
            var checkUserName = (rule, value, callback) => {
                if (value === '') {
                    console.log(rule);
                    callback(new Error('用户名不能为空'));
                } else {
                    callback();
                }
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    userName: '',
                    pass: '',
                    checkPass: '',
                    sex: true,
                    tel: ''
                },
                rules: {
                    userName: [
                        {validator: checkUserName, trigger: 'blur'}
                    ],
                    pass: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    checkPass: [
                        {validator: validatePass2, trigger: 'blur'}
                    ],
                },
                options: [
                    {
                        value: true,
                        label: '男'
                    },
                    {
                        value: false,
                        label: '女'
                    }
                ]
            };
        },
        watch: {
        },
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
                        axios.post('/user/signIn',{
                            userName: form.userName,
                            password: form.pass,
                            sex: form.sex,
                            tel: form.tel
                        }).then(function (response) {
                            console.log(response);
                        }).catch(function (error) {
                            console.log(error);
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

<style scoped>
    .login-form {
        width: 50%;
    }

    .title-container {
        margin: 5em 0 2em;
    }
</style>
