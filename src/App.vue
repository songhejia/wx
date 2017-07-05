<template lang='pug'>
#app
  router-view
  wx-footer
</template>

<script>
// import wxTop from './components/wx_top'
import wxFooter from './components/wx_footer'
export default {
  name: 'app',
  components: {
    // wxTop,
    wxFooter
  }
}
</script>

<style lang='scss'>
#app{
  height: 100%;
}
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
