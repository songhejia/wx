<template lang="pug">
  div
    conversation-item(v-if="conversation.list" v-for="item in conversation.list" :key="item.id" :conversation="item" @conversation-click="conversationClick")
</template>
<script>
import { Toast } from 'mint-ui'
import { mapState } from 'vuex'
import conversationItem from './conversationItem'
export default {
    components: {
        'conversation-item': conversationItem
    },
    computed: {
        ...mapState(["conversation"])
    },
    methods: {
        conversationClick(conversation) {
            Toast(conversation.name)
        }
    },
    mounted() {
        //console.log(conversation)
    }
}
</script>
