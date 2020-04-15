<template>
    <el-container>
        <el-header>

        </el-header>
        <el-main>
            <el-row>
                <el-col :span="12">
                    <router-link to="/merchant/createGoods">创建商品</router-link>
                </el-col>
                <el-col :span="12"></el-col>
            </el-row>
            <el-row>
                <el-col :span="12"></el-col>
                <el-col :span="12"></el-col>
            </el-row>
        </el-main>
        <el-footer>

        </el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "Manage"
    }
</script>

<style scoped>

</style>
