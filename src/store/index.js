import Vue from 'Vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

import conversation from './modules/conversation'

console.log(conversation)

export default new Vuex.Store({
    modules: {
        conversation
    },
    strict: debug,
    // plugins: debug ? [createLogger()] : []
})