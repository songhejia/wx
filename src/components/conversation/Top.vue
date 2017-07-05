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
    background-color: #2A2625;
    // height: 100px;
    line-height: 100px;
    height: 100px;
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
