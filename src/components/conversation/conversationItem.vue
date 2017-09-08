<template lang="pug">
router-link(:to="{path:'/conversation/dialog'}" class="conversation-item")
    .conversation-item-left
        img(:src='conversation.photo')
    .conversation-item-right
        .conversation-item-right-top
            .user-name {{conversation.name}}
            .time {{conversation.lastTime}}
        .conversation-item-right-buttom
            .preview {{conversation.lastMessage}}
</template>
<script>
export default {
    data() {
        return {
        }
    },
    props: {
        conversation: Object
    },
    methods: {
        conversationClick(conversation) {
            this.$emit('conversation-click', conversation)
        }
    }
}
</script>


<style lang="scss">
.conversation-item {
    text-decoration-line: none;
    border-bottom: 1px solid #E5E9F2;
    padding: 10px 0;
    display: flex;
    flex-flow: row nowrap;
    &-left {
        img {
            width: 40px;
            height: 40px;
            vertical-align: middle;
            border-radius: 5px;
        }
    }
    &-right {
        width: 100%;
        margin-left: 5px;
        display: flex;
        flex-flow: column nowrap;
        &-top {
            width: 100%;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            .user-name {
                color: #26292C;
            }
            .time {
                color: #8492A6;
                font-size: 12px;
            }
        }
        &-buttom {
            color: #8492A6;
            font-size: 14px;
        }
    }
}
</style>

