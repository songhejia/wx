export default {
    state: {
        count: 0,
        list: []
    },
    mutations: {
        increment(state) {
            state.count++
        },
        'conversation/list'(state, data) {
            state.list = data
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        },
        'conversation/list'(context) {
            // console.log(axios)
            axios.get('/conversation/list').then(data => {
                context.commit('conversation/list', data.data.data)
            })

        }
    },
    getters: {}

}