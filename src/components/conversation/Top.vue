<template lang='pug'>
    .conversation-top
        mt-header(fixed title='微信')
</template>
<script>
export default {
    name: 'conversation-top',
    data() {
        return {}
    }
}
</script>
<style lang="scss">
.conversation-top {
    // background-color: #2A2625;
    // height: 100px;
    line-height: 40px;
    height: 40px;
    h1{
        color: #ffffff;
        font-size: 20px;
        margin: 0;
        text-align: center;
    }
    .mint-header{
        height: 40px;
        line-height: 40px;
    }
}
</style>
