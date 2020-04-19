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
                        <el-image
                                v-if="isShowImagePreview"
                                style="width: 100px; height: 100px"
                                :src="imageUrl"
                                :preview-src-list="[imageUrl]">
                        </el-image>
                        <el-button type="primary"
                                   @click="imageCropperShow = true"
                                   v-if="!isShowImagePreview"
                        >上传</el-button>
                        <image-cropper
                                field="file"
                                v-show="imageCropperShow"
                                :url="goodsImgUploadApi"
                                lang-type="zh"
                                with-credentials
                                @crop-upload-success="cropSuccess"
                                @close="imageCropperShow = false"
                        ></image-cropper>
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
    import utils from "../../../utils/utils";
    import api from "../../../utils/api";
    import ImageCropper from "../../../components/ImageCropper";
    import _ from 'lodash';

    export default {
        name: "CreateGoods",
        components: {
            MerchantHeader,
            ImageCropper,
        },
        data() {
            return {
                // 现在表单的数据
                createGoodsForm: {
                    goodsName: '',
                    price: '',
                    amount: '',
                    descInfo: '',
                    seckillTime: new Date(),
                    imgName: '',
                },
                // 是否显示图片裁剪
                imageCropperShow: false,
                // 上传的api全路径
                goodsImgUploadApi: utils.fullApiUrl(api.adminUploadImg),
            };
        },
        computed: {
            // 显示图片缩略图的url
            imageUrl() {
                if (_.isEmpty(this.createGoodsForm.imgName)) {
                    return '';
                }
                return utils.imgFullUrl(this.createGoodsForm.imgName);
            },
            isShowImagePreview() {
                if (_.isEmpty(this.createGoodsForm.imgName)) {
                    return false;
                }
                return true;
            }
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
                            imgName: form.imgName
                        }).then((response) => {
                            utils.handleRsp(response.data, that.$message, () => {
                                that.$message("创建成功");
                            })
                        });
                    } else {
                        return false;
                    }

                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            cropSuccess(response) {
                let that = this;
                utils.handleRsp(response, this.$message, (rspData) => {
                    that.createGoodsForm.imgName = rspData.imageName;
                });
            }
        }
    }
</script>

<style scoped>

</style>
