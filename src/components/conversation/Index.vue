<template lang="pug">
    div
        conversation-top
        p {{text}}
        p 会话列表会话列表会话列表会话列表会话列表会话列表会话列表会话列表会话列表会话列表会话列表会话列表会话列表会话列表会话列表会话列表会话列表
</template>
<script>
import onversationTop from './Top'
export default {
    data() {
        return {
            text: '会话列表'
        }
    },
    components: {
        'conversation-top': onversationTop
    }
}
</script>

