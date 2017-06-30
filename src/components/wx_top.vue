<template lang='pug'>
    .wx-top
        mt-header(fixed title='微信')
</template>
<script>
export default {
    name: 'wx-top',
    data() {
        return {}
    }
}
</script>
<style lang="scss">
.wx-top {
    background-color: #2A2625;
    // height: 100px;
    line-height: 100px;
    h1{
        color: #ffffff;
        font-size: 50px;
        margin: 0;
        text-align: center;
    }
    .mint-header{
        height: 100px;
        line-height: 100px;
    }
}
</style>
