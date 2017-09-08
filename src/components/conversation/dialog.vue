<template lang="pug">
  .dialog
    .mt-header(fixed title='微信' class="dialog-header")
     router-link(to="/conversation/" class="dialog-header-back")
         <i class="fa fa-angle-left fa-1x" aria-hidden="true"></i> 微信
</template>

<script>
export default {
  
}
</script>


<style lang="scss">
.dialog{
    &-header{
        line-height: 40px;
        height: 40px;
        background-color: #26292C;
        &-back{
            color:#fff;
            text-decoration-line: none;
            padding: 0 10px;
        }
    }
}
</style>

