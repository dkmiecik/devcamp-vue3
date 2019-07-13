import { computed } from 'vue-function-api';

function useStore(root) {
    const items = computed(() => root.$store.state.items);
    const doneItems = computed(() => root.$store.getters.doneItems);
    return {
        items,
        doneItems
    };
}

export default useStore;
