<template>
    <el-container>
        <el-header>
        </el-header>
        <el-main>
            <div>
                <el-form ref="createGoodsForm" :model="createGoodsForm" label-width="100px">
                    <el-form-item label="商品名" prop="goodsName">
                        <el-input v-model="createGoodsForm.goodsName"></el-input>
                    </el-form-item>
                    <el-form-item label="价格" prop="price">
                        <el-input v-model="createGoodsForm.price" type="number"></el-input>
                    </el-form-item>
                    <el-form-item label="数量" prop="amount">
                        <el-input v-model="createGoodsForm.amount" type="number"></el-input>
                    </el-form-item>
                    <el-form-item label="描述" prop="descInfo">
                        <el-input v-model="createGoodsForm.descInfo"></el-input>
                    </el-form-item>
                    <el-form-item label="秒杀时间" prop="seckillTime">
                        <el-date-picker v-model="createGoodsForm.seckillTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="图片">
                        <el-upload
                                class="upload-demo"
                                action="http://www.baidu.com"
                                with-credentials
                                list-type="picture">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit('createGoodsForm')">立即创建</el-button>
                        <el-button @click="resetForm('createGoodsForm')">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-main>
        <el-footer>

        </el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "CreateGoods",
        data() {
            return {
                createGoodsForm: {
                    goodsName: '',
                    price: '',
                    amount: '',
                    descInfo: '',
                    seckillTime: new Date(),
                    imgUrl: '',
                }
            };
        },
        methods: {
            onSubmit(formName) {
                const that = this;
                const form = this.$refs[formName];
                console.log(this.$refs);
                form.validate((valid) => {
                    if (valid) {
                        console.log(that);
                        console.log(form.goodsName);
                        console.log(form.descInfo);
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

</style>
