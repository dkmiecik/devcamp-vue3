<template>
    <div>
        <div>
            <input v-model='todo' type='text'>
            <button @click='add'>Add</button>
        </div>
        <div
                class='todo-list'
                v-for='item in items'
                :key='item.name'
        >
            <button @click='done(item.name)'>
                <span class="todo" v-bind:class="{ 'done': item.isDone }">&#10004;</span>
            </button>
            <span>{{ item.name }}</span>
            <button @click='remove(item.name)'>
                <span>&times;</span>
            </button>
        </div>
    </div>
</template>

<script>
    import { value } from 'vue-function-api';

    import useStore from '../utils/useStore';

    export default {
        setup(props, { root }) {
            // Reactive value-based variables
            const todo = value('');
            const { items } = useStore(root);

            // Add: Click Handler Function
            const add = () => {
                if (todo.value) {
                    root.$store.commit('add', { name: todo.value, isDone: false });
                    todo.value = '';
                }
            };
            //Remove: Click Handler Function
            const remove = item => {
                root.$store.commit('remove', item);
            };
            const done = item => {
                root.$store.commit('toggleItemStatus', item);
            };
            return {
                todo,
                items,
                done,
                add,
                remove
            };
        }
    };
</script>
<style>
    .todo-list {
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20px auto;
    }
    .todo {
        color: red;
    }
    .done {
        color: green;
    }
</style>