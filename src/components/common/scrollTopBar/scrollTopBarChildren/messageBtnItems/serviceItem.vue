<template>
    <div class="service-item">
        <div class="service-title">
            <p>{{propsService.title}}</p>
            <div>
                <label ><input type="radio" id="radio1" class="my-radio" name="demo" />售前</label>
                <label><input type="radio" id="radio1" class="my-radio" name="demo" />售后</label>              
            </div>
        </div>
        <div class="servie-item-input-box">
            <input class="servie-item-input" type="text" placeholder="预约人手机号"/>
        </div>
        <button>提交</button>
        <div>
            <span class="serviece-bottom-text">帮助中心</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'serviceItem',
    props:{
        propsService:{
            type:Object
        }
    }
}
</script>

<style>
.serviece-bottom-text{
    text-align: center;
    border-bottom: solid 1px gray;
    
}
.service-item button{
    width: 1.0416667rem;
    height: .2083333rem;
    background-color: #9c827d;
    color: #fff;
    border: none;
    outline: none;
    margin-top:.1002083rem;
    margin-bottom: 10px;
}
.servie-item-input-box{
    margin-top:20px;
    padding:11px 12px;
    border: solid 1px gray;
}
.servie-item-input{
    text-indent:20px;
    border: none;
    outline: none;
    color: gray;
    background-color:#f2eded;
}

.service-title p{
    font-size: 16px;
    font-weight: 600;
}
.my-radio {
    position: relative;
    z-index: 1;
}
.my-radio:checked::after {
    content: '';
}
.my-radio::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    
    border-radius: 50%;
    background-color: #fff;
    border: 2px solid #9c827d;
}
.my-radio::after {
    position: absolute;
    top: 4px;
    left: 4px;
    background-color: #9c827d;
    width: 8px;
    height: 8px;
    border-radius: 50%;
}
.my-radio:checked{
    border-color: red;
    background-color: #ccc;
}

.service-title{
    display:flex;
    justify-content: space-between;
}
.service-item{
    padding: 10px 30px;
    background-color: #f2eded;
}
.service-title input{
    margin-left:10px;
}
</style>