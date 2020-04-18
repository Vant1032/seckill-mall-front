<!--创建商品页-->
<template>
    <el-container>
        <el-header>
            <merchant-header></merchant-header>
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
                                action="http://localhost:8082/api/admin/uploadImg"
                                with-credentials
                                :limit="1"
                                :on-success="imageUploadSuccess"
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
    import axios from "../../../utils/net";
    import MerchantHeader from '../../../components/merchant/Header'

    export default {
        name: "CreateGoods",
        components: {
            MerchantHeader
        },
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
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let form = that.createGoodsForm;
                        axios.post('/admin/createGoods', {
                            goodsName: form.goodsName,
                            price: form.price,
                            amount: form.amount,
                            descInfo: form.descInfo,
                            seckillTime: form.seckillTime,
                            imgUrl: form.imgUrl
                        }).then((response) => {
                            let rsp = response.data;
                            if (rsp.code === 0) {
                                // 创建成功
                                this.$message("创建成功");
                            } else {
                                this.$message(rsp.msg);
                            }
                        });
                    } else {
                        return false;
                    }

                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            imageUploadSuccess(response) {
                if (response.code === 0) {
                    this.createGoodsForm.imgUrl = response.data.imageName;
                } else {
                    this.$message(response.msg);
                }
            }
        }
    }
</script>

<style scoped>

</style>
