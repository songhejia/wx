import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

import conversation from './modules/conversation'

console.log(conversation)

export default new Vuex.Store({
    modules: {
        conversation
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})