<template lang="pug">
  .wx-footer
    mt-tabbar(fixed)
      mt-tab-item(id='微信')
        i(class='fa fa-comment-o' slot="icon" aria-hidden="true") 
        span 微信
      mt-tab-item(id='通信录')
        i(class='fa fa-address-card-o' slot="icon" aria-hidden="true") 
        span 通信录
      mt-tab-item(id='发现')
        i(class='fa fa-compass' slot="icon" aria-hidden="true") 
        span 发现
      mt-tab-item(id='我')
        i(class='fa fa-user-o' slot="icon" aria-hidden="true") 
        span 我
</template>
<script>
export default {
  name: 'wx-footer'
}
</script>
<style lang="scss">
.wx-footer {
  .mint-tabbar {
    border-top: 1px solid #475669;
    height: 150px;
    line-height: 150px;
    color: #324057;
    font-family: 微软雅黑;
    .mint-tab-item-icon {
      font-size: 50px;
      line-height: 70px;
      height:70px;
      width: 100%;
    }
    .mint-tab-item-label{
      font-size: 30px;
    }
    .mint-tab-item{
      display: flex;
      flex-flow: column nowrap;
    }
  }
}
</style>
