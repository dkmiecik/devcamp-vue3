<template>
    <div>
        <div class='list-group'>

            <div
                    class='list-group-item d-flex justify-content-between align-items-center'
                    v-for='item in doneItems'
                    :key='item.name'
            >
                <span>{{ item.name }}</span>
                <span>{{ item.isDone }}</span>
            </div>
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
