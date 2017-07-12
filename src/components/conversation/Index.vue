<template lang="pug">
    div
        conversation-top
        conversation-list
</template>
<script>
import conversationTop from './Top'
import conversationList from './conversationList'

export default {
    data() {
        return {
            text: '会话列表'
        }
    },
    components: {
        'conversation-top': conversationTop,
        'conversation-list': conversationList
    },
    mounted() {
        console.log(this)
        this.$store.dispatch('conversation/list')
    }
}
</script>

