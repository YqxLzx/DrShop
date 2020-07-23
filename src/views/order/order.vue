<template>
    <div>
        <titleBar/>
        <maxinBox>
            <fristItem/>
            <secondItem/>
            <thirdItem/>
            <firthItem/>
            <fithItemf/>
            <rightItem  slot="right-box"></rightItem>
        </maxinBox>
        <bottomMainBar/>
    </div>
</template>

<script>
import titleBar from './orderChilideren/titleBar'
import maxinBox from './orderChilideren/mainBox'
import fristItem from './orderChilideren/mainBoxItem/fristItem'
import secondItem from './orderChilideren/mainBoxItem/secondItem'
import thirdItem from './orderChilideren/mainBoxItem/thirdItem'
import firthItem from './orderChilideren/mainBoxItem/firthItem'
import fithItemf from './orderChilideren/mainBoxItem/fithItem'
import bottomMainBar from 'common/bottomBar/bottomMainBar'
import rightItem from './orderChilideren/mainBoxItem/rightItem'
export default {
    name:'order',
    components:{
        titleBar,
        maxinBox,
        fristItem,
        secondItem,
        thirdItem,
        firthItem,
        fithItemf,
        bottomMainBar,
        rightItem

    }
}
</script>

<style>

</style>