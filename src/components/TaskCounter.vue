<template>
    <div class="alert alert-secondary">
        TODO: {{notYetDoneItems.length}}
    </div>
</template>

<script>
    import useStore from '../utils/useStore';

    export default {
        setup(props, { root }) {
            const { notYetDoneItems } = useStore(root);
            return {
                notYetDoneItems,
            };
        }
    };
</script>
