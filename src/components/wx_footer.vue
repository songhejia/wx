<template lang="pug">
  .wx-footer
    mt-tabbar(fixed)
      mt-tab-item(id='微信')
        i(class='fa fa-comments' slot="icon" ) 
        | 微信
      mt-tab-item(id='通信录')
        i(class='fa fa-comments' slot="icon" aria-hidden="true") 
        | 通信录
      mt-tab-item(id='发现')
        i(class='fa fa-comments' slot="icon" aria-hidden="true") 
        | 发现
      mt-tab-item(id='我')
        i(class='fa fa-comments' slot="icon" aria-hidden="true") 
        | 我
</template>
<script>
  export default{
    name:'wx-footer'
  }
</script>
<style lang="scss">
  .wx-footer{

  }
</style>
