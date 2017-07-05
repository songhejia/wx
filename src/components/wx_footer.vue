<template lang="pug">
  .wx-footer
    div
      router-link(to="conversation")
        i(class='fa fa-comment-o' aria-hidden="true") 
        span 微信
    div
      router-link(to="hello")
        i(class='fa fa-address-card-o' aria-hidden="true") 
        span 通信录
    div
      router-link(to="hello")
        i(class='fa fa-compass' aria-hidden="true") 
        span 发现
    div
      router-link( to="hello")
        i(class='fa fa-user-o' aria-hidden="true") 
        span 我      
    //- mt-tabbar(fixed v-model="selected")
    //-   mt-tab-item(id='微信')
    //-     i(class='fa fa-comment-o' slot="icon" aria-hidden="true") 
    //-     span 微信
    //-   mt-tab-item(id='通信录')
    //-     i(class='fa fa-address-card-o' slot="icon" aria-hidden="true") 
    //-     span 通信录
    //-   mt-tab-item(id='发现')
    //-     i(class='fa fa-compass' slot="icon" aria-hidden="true") 
    //-     span 发现
    //-   mt-tab-item(id='我')
    //-     i(class='fa fa-user-o' slot="icon" aria-hidden="true") 
    //-     span 我
</template>
<script>
export default {
  name: 'wx-footer',
  data() {
    return {
      selected: ''
    }
  },
  watch: {
    selected(to) {
      console.log(to)
    }
  }
}
</script>
<style lang="scss">
.wx-footer {
  width: 100%;
  height: 120px;
  position: fixed;
  bottom: 0;
  display: -webkit-flex;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  border-top: 1px solid #000;
  div {
    width: 25%;
    height: 100px;
    text-align: center;
    padding: 10px 0;
    a {
      display: inline-flex;
      flex-flow: column;
      text-decoration: none;
      width: 100%;
      height: 100%;
      color: #324057;
      font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Wenquanyi Micro Hei,Arial,sans-serif;
      i {
        font-size: 50px;
      }
      span {
        font-size: 30px;
      }
    }
    .router-link-active {
      color: #09BB07;
    }
  } // .mint-tabbar {
  //   border-top: 1px solid #475669;
  //   height: 150px;
  //   line-height: 150px;
  //   color: #324057;
  //   font-family: 微软雅黑;
  //   .mint-tab-item-icon {
  //     font-size: 50px;
  //     line-height: 70px;
  //     height: 70px;
  //     width: 100%;
  //   }
  //   .mint-tab-item-label {
  //     font-size: 30px;
  //   }
  //   .mint-tab-item {
  //     display: flex;
  //     flex-flow: column nowrap;
  //     &.is-selected {
  //       background-color: #FAFAFA;
  //       color: #09BB07;
  //     }
  //   }
  // }
}
</style>
