<template>
    <div class="third-item">
        <h1>你们的纪念日</h1>
        <div class="choose-item">
            <div class="block">
                <el-date-picker
                v-model="mybirthday"
                type="date"
                placeholder="您的生日">
                </el-date-picker>
            </div>
            <div class="block">
                <el-date-picker
                v-model="youRbirthday"
                type="date"
                placeholder="您爱人的生日">
                </el-date-picker>
            </div>
            <div class="block">
                <el-date-picker
                v-model="lovedata"
                type="date"
                placeholder="您的结婚纪念日">
                </el-date-picker>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            mybirthday:'',
            youRbirthday:'',
            lovedata:''
        }
    }
}
</script>

<style>
.third-item{
    margin-top:30px;
}
.choose-item{
    display: flex;
    margin: 30px 0;
}
.choose-item .block{
    margin-right: 20px;
}
</style>