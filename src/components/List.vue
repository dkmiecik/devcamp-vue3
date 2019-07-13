<template>
    <div>
        <div class="form-group d-flex">
            <input class="form-control shadow-none rounded-0" v-model='todo' type='text'>
            <button class="btn btn-primary shadow-none border-0 rounded-0" @click='add'>Add</button>
        </div>
        <div class="list-group">
            <div
                    class='todo-list list-group-item d-flex justify-content-between align-items-center'
                    v-for='item in items'
                    :key='item.name'
            >
                <button @click='done(item.name)' class="shadow-none border-0">
                    <span class="todo" v-bind:class="{ 'done': item.isDone }">&#10004;</span>
                </button>
                <span>{{ item.name }}</span>
                <button @click='remove(item.name)' class="shadow-none border-0">
                    <span>&times;</span>
                </button>
            </div>
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

    .todo {
        color: red;
    }
    .done {
        color: green;
    }
</style>