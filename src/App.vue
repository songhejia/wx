<template lang='pug'>
#app
  wx-top
  router-view
</template>

<script>
import wxTop from './components/wx_top'
export default {
  name: 'app',
  components: {
    wxTop
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
