<template>
    <div class="list-group">
        <div
                class='todo-list list-group-item d-flex justify-content-between align-items-center'
                v-for='item in doneItems'
                :key='item.name'
        >
            <span>{{ item.name }}</span>
        </div>
    </div>
</template>

<script>
    import useStore from '../utils/useStore';

    export default {
        setup(props, { root }) {
            const { doneItems } = useStore(root);
            return {
                doneItems,
            };
        }
    };
</script>
