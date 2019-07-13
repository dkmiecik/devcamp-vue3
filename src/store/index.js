import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        items: ['Vue', 'is', 'Awesome']
    },
    mutations: {
        add (state, value) {
            state.items.push(value);
        }
    }
});
