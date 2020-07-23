<template>
    <div>
        <el-checkbox v-model="checked">发票</el-checkbox>
        <p>发票为增值税普通发票</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
           checked:false, 
        }
    }
}
</script>

<style>

</style>