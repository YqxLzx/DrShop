<template>
    <div class="leaving-message">
        <h2 v-if="haveMessage">目前还没有人进行评价</h2>
        <div class="main-message-box"></div>
        <div>
            <div class="yourWant">
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'leavingMessage',
    data(){
        return{
            haveMessage:true
        }
    }
}
</script>

<style scoped>

.leaving-message{
    width: 100%;
    height: 100%;
    padding: 10px 10px
}
.leaving-message h2{
    text-align: start;
    margin-bottom: 15px;
}
.main-message-box{
    width: 2.0833333rem;
    height: 300px;
    padding:0 10px;
    border:solid 1px gray;
}
</style>