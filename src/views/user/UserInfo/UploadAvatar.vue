<template>
    <el-dialog title="编辑头像" :visible="true" @close="close">
        <el-image
                ref="modifiedImage"
                style="width: 50px; height: 50px"
                @click="imageCropperShow=true"
                :src="imgFullUrl">
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
    </el-dialog>
</template>

<script>
    import consts from "../../../utils/consts";
    import utils from "../../../utils/utils";
    import api from "../../../utils/api";
    import ImageCropper from "../../../components/ImageCropper"
    import axios from "../../../utils/net";

    export default {
        name: "UploadAvatar",
        props: {
        },
        components: {
            ImageCropper
        },
        data() {
            return {
                imageCropperShow:false,
                imgName: consts.LOADING_IMG_NAME,
                modifyGoodsImgUrl: utils.fullApiUrl(api.userModifyUserAvatar),
            };
        },
        computed: {
            imgFullUrl() {
                return utils.imgFullUrl(this.imgName);
            },
        },
        methods: {
            close() {
                this.$emit('close')
            },
            cropSuccess(response) {
                let that = this;
                utils.handleRsp(response, this.$message, (rspData) => {
                    that.imgName = rspData.imageName;
                });
            },
        },
        created() {
            let that = this;
            axios.post(api.userGetAvatar, {

            }).then(response => utils.handleRsp(response.data, that.$message, (rspData) => {
                that.imgName = rspData.avatarImageName;
            }))
        }
    }
</script>

<style scoped>

</style>
