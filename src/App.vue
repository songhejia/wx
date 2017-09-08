<template lang='pug'>
#app
  transition
    keep-alive
      router-view
  wx-footer

//- nav-a
</template>

<script>
import wxTop from './components/wx_top'
import wxFooter from './components/wx_footer'

import nav from './components/nav.vue'

export default {
  name: 'app',
  components: {
    wxTop,
    wxFooter
    // "nav-a": nav
  }
}
</script>

<style lang='scss'>
#app {
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
