<template>
    <el-container>
        <el-container>
            <el-header>
                <div style="background-color: red; width: 100%; height: 100%;">
                    Header
                </div>
            </el-header>
            <el-main>
                <div style="background-color: red; width: 100%; height: 100%;">
                    Main {{ msg }}
                </div>
            </el-main>
            <el-footer>
                <div style="background-color: red; width: 100%; height: 100%;">
                    Footer
                </div>
            </el-footer>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "TestComponent",
        props: {
            msg: String
        }
    }
</script>

<style scoped>

</style>
