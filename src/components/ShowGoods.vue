<template>
    <el-table :data="goodsList"
              style="width: 100%"
              stripe
    >
        <el-table-column label="商品名" prop="goodsName"></el-table-column>
        <el-table-column label="数量" prop="amount"></el-table-column>
        <el-table-column label="价格" prop="price"></el-table-column>
        <el-table-column label="秒杀时间" prop="seckillTime"></el-table-column>
        <el-table-column label="图片">
            <template slot-scope="scope">
                <el-image
                        style="width: 50px; height: 50px"
                        lazy
                        :preview-src-list="[generateImageUrl(scope.row.imgName)]"
                        :src="generateImageUrl(scope.row.imgName)">
                </el-image>
            </template>
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        @click="handleEdit(scope.row.goodsId)">编辑
                </el-button>

                <!--        弹出的内容        -->
                <el-dialog title="收货地址" :visible.sync="modifyGoodsFormVisible">
                    <el-form ref="modifyGoodsForm" :model="modifyGoodsForm" label-width="100px">
                        <el-form-item label="商品名" prop="goodsName">
                            <el-input v-model="modifyGoodsForm.goodsName"></el-input>
                        </el-form-item>
                        <el-form-item label="价格" prop="price">
                            <el-input v-model="modifyGoodsForm.price" type="number"></el-input>
                        </el-form-item>
                        <el-form-item label="数量" prop="amount">
                            <el-input v-model="modifyGoodsForm.amount" type="number"></el-input>
                        </el-form-item>
                        <el-form-item label="描述" prop="descInfo">
                            <el-input v-model="modifyGoodsForm.descInfo"></el-input>
                        </el-form-item>
                        <el-form-item label="秒杀时间" prop="seckillTime">
                            <el-date-picker v-model="modifyGoodsForm.seckillTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="图片">
                            <el-image
                                    ref="modifiedImage"
                                    style="width: 50px; height: 50px"
                                    @click="imageCropperShow=true"
                                    :src="modifyGoodsForm.imgUrl">
                            </el-image>
                            <image-cropper
                                    field="file"
                                    v-show="imageCropperShow"
                                    :url="modifyGoodsImgUrl"
                                    lang-type="zh"
                                    with-credentials
                                    @crop-upload-success="cropSuccess"
                                    @close="imageCropperShow = false"
                            ></image-cropper>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit('modifyGoodsForm')">立即修改</el-button>
                            <el-button @click="cancelForm('modifyGoodsForm')">取消</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>
                <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.row.goodsId)">删除
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    import axios from "../utils/net";
    import utils from "../utils/utils";
    import api from "../utils/api";
    import ImageCropper from "./ImageCropper"

    export default {
        name: "ShowGoodsComponent",
        components: {
            ImageCropper
        },
        data() {
            return {
                goodsList: [],
                modifyGoodsFormVisible: false,
                modifyGoodsForm: {
                    goodsId: -1,
                    goodsName: '',
                    price: 0,
                    amount: 0,
                    descInfo: '',
                    seckillTime: new Date(),
                    imgUrl: ''
                },
                imageCropperShow: false,
            };
        },
        computed: {
            modifyGoodsImgUrl() {
                return utils.fullApiUrl(api.adminUploadImg);
            }
        },
        mounted() {
            this.loadGoodsList();
        },
        methods: {
            handleEdit(goodsId) {
                let that = this;
                axios.post(api.getGoodsById, {
                    goodsId
                }).then((response) => {
                    const rsp = response.data;
                    if (rsp.code === 0) {
                        let data = rsp.data
                        that.modifyGoodsForm = {
                            goodsId: data.goodsId,
                            goodsName: data.goodsName,
                            price: data.price,
                            amount: data.amount,
                            descInfo: data.descInfo,
                            seckillTime: utils.stringToDate(data.seckillTime),
                            imgName: data.imgName,
                            imgUrl: utils.imgFullUrl(data.imgName),
                        };
                        that.modifyGoodsFormVisible = true;
                    }
                });
            },
            handleDelete(goodsId) {
                axios.post('/admin/deleteGoods', {
                    goodsId
                }).then((response) => {
                    const rsp = response.data;
                    if (rsp.code === 0) {
                        this.$message("删除成功");
                        this.loadGoodsList();
                    } else {
                        this.$message(rsp.msg);
                    }
                });
            },
            generateImageUrl(imageName) {
                return utils.imgFullUrl(imageName);
            },
            loadGoodsList() {
                axios.post(api.adminGetAllGoods, {
                }).then((response) => {
                    let rsp = response.data;
                    if (rsp.code === 0) {
                        this.goodsList = rsp.data;
                    } else {
                        this.$message(rsp.msg);
                    }
                });
            },
            onSubmit(formName) {
                const that = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let form = that.modifyGoodsForm;
                        axios.post(api.adminModifyGoods, {
                            goodsId: form.goodsId,
                            goodsName: form.goodsName,
                            price: form.price,
                            amount: form.amount,
                            descInfo: form.descInfo,
                            seckillTime: utils.dateToString(form.seckillTime),
                            imgName: form.imgName,
                        }).then((response => {
                            utils.handleRsp(response.data, that.$message, function () {
                                that.$message('修改成功');
                                that.cancelForm(formName);
                                that.loadGoodsList();
                            })
                        }));
                    }
                    });
            },
            cancelForm(formName) {
                this.$refs[formName].resetFields();
                this.modifyGoodsFormVisible = false;
            },
            cropSuccess(response) {
                let that = this;
                utils.handleRsp(response, this.$message, (rspData) => {
                    that.modifyGoodsForm.imgUrl = that.generateImageUrl(rspData.imageName);
                    that.modifyGoodsForm.imgName = rspData.imageName;
                });
            }
        },
    }
</script>

<style scoped>

</style>
