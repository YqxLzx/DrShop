<template>
    <div class="language-box">
        <div class="language">简体中文</div>
        <img class="language-img" src="~public/img/titleBar/triangle.svg" />
        <div class="title-language-box">
            <div class="title-language-small-box">
                <div class="title-language-English">English</div>
                <div class="title-language-Chinese">中文(繁体)</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.language-box .language-img{
    position: absolute;
    top:2px;
    right:-15px;
    width: 12px;
    height: 12px;
    cursor:pointer;
    margin: 0 0;
}
.language-box{
    margin-left: 20px;
    padding-left:20px;
    border-left:1px solid gray;
    position: relative;
    font-size: 12px;
    height: 12px;
    z-index: 10;
}
.language{
    font-size: 100%;
    font: inherit;
    line-height: 12px;
    cursor:pointer;       
}
.title-language-English:hover
{background-color: #ded1cf}

.title-language-Chinese:hover{
    background-color: #ded1cf
}
.title-language-English,.title-language-Chinese{
    padding: 7px 0 7px 20px;
    text-align: left;
    font-size: 1px;
    white-space:nowrap;    
}
.title-language-small-box{
    padding: 20px 0;
    background: #f2eded; 
    cursor:pointer;  
}
.title-language-box{
    position: absolute;
    top:15px;
    padding-top:20px;
    left:-0px;
    transform-origin: top;
    transition: transform .6s ease;
    transform: scaleY(0);
}
.language-box:hover .language-img{
    transform:rotate(180deg);
}
.language-box:hover .title-language-box{
    transform: scaleY(1);
}
.language-img{    
    transition: transform 0.5s linear;
    transform:rotate(0);
}
@media screen and (max-width:900px){
.language-box{
    display: none;
}
}
</style>