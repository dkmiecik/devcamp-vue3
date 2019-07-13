<template>
    <div>
        <div
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
