<template>
    <div id="confirm" >
        <div class="confirm" >
            <div class="confirm-btn">
                <div class="confirm-bgc" ></div>
                <div class="more" >
                    <slot name="slot-text"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'confirmBtn',
    props:{

    },
    computed:{

    }
}
</script>

<style>
#confirm{
    position: absolute;
    background-color: #fff;
    font-size: .0833333rem;
}
.confirm {
    border-radius: 4px;
  width: 1.2916667rem;
  height: .3020833rem;
  border: 1px solid #000;
  cursor: pointer;
  transition: border-color 0.5s ease;
}
.confirm-btn {
  position: relative;
  width:calc(100% - 6px);
  height: 100%;
  margin: 0 auto;
  line-height: 40px;
  font-weight: 700;
  text-align: center;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
  transition: border-color 0.5s ease;
}

.confirm-bgc {
  width: 100%;
  height: 100%;
  background-color: rgb(156, 130, 125);
  transform: scaleX(0);
  transform-origin: 0% 50%;
  transition: transform 0.5s ease;
}

.more {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  line-height: .3020833rem;
  transition: color 0.5s ease;
}

.confirm:hover {
  border-color: rgb(156, 130, 125);
}

.confirm .confirm-btn {
  border-color: rgb(156, 130, 125);
}

.confirm:hover .confirm-bgc {
  transform: scaleX(1);
}

.confirm:hover .more {
  color: #fff;
  font-weight: 600;
}
/*
#confirm{
    position:absolute;
    z-index: 20;
    background-color: #fff;
}
.confirm {
    border-radius: 4px;
    position: relative;   
    color: white;
    text-align: center;
    border: 1px solid black; 
    
}
.confirm-btn, .confirm-bgc {
    position: absolute;
    left: 0;
    top: 0;
}
.confirm-btn {
    z-index: 10;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-left: 2px solid white;
    border-right: 2px solid white;
    font-size:17px;
}
.confirm-bgc {
    z-index: 0;
    width: 0;
    height:100%;
    background-color: #fff;
    transition: all .7s ease;

}
.confirm:hover > .confirm-bgc {
    width: 100%;  
}
#confirm .confirm:hover {
    color: #fff; 
    font-weight:600;
}*/
</style>