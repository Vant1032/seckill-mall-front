<template>
    <el-container style="border-bottom: 1px solid #dcdfe6">
        <el-main>
            <el-row type="flex">
                <el-col :span="12">
                    <router-link to="/merchant/manage"><el-link type="primary">回到管理页</el-link></router-link>
                </el-col>
                <el-col :span="12">  </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "MerchantHeader"
    }
</script>

<style scoped>

</style>
