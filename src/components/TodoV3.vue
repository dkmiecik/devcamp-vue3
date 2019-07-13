<template>
    <div>
        <div class="form-group d-flex">
            <input v-model="todo" type="text" class="form-control shadow-none rounded-0">
            <button class="btn btn-primary shadow-none border-0 rounded-0" @click="add">Add</button>
        </div>
        <div class="list-group">
            <div
                    class="list-group-item d-flex justify-content-between align-items-center"
                    v-for="item in items"
                    :key="item"
            >
                <span>{{ item }}</span>
                <button class="close shadow-none border-0" @click="remove(item)">
                    <span>&times;</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import { value } from "vue-function-api";

    export default {
        setup() {
            // Reactive value-based variables
            const todo = value("");
            const items = value(["Vue", "is", "Awesome"]);

            // Add: Click Handler Function
            const add = () => {
                if (todo.value) {
                    items.value.push(todo.value);
                    todo.value = "";
                }
            };
            //Remove: Click Handler Function
            const remove = item => {
                items.value = items.value.filter(v => v !== item);
            };
            return {
                todo,
                items,
                add,
                remove
            };
        }
    };
</script>
