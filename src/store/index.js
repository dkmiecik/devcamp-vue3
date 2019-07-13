import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        items: [
            {
                name: 'Vue',
                isDone: false
            },
            {
                name: 'is',
                isDone: false
            },
            {
                name: 'Awesome',
                isDone: false
            }]
    },
    mutations: {
        add (state, value) {
            state.items.push(value);
        },
        remove (state, item) {
            state.items = state.items.filter(v => v.name !== item);
        },
        setAsDone (state, item) {
            state.items = state.items.map(i => {
                if (i.name === item) {
                    i.isDone = true;
                }
                return i;
            });
        }
    },
    getters: {
        doneItems: state => {
            return state.items.filter(todo => todo.isDone);
        }
    }
});
