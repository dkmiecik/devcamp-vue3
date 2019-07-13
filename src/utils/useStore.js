import { computed } from 'vue-function-api';

function useStore(root) {
    const items = computed(() => root.$store.state.items);
    const doneItems = computed(() => root.$store.getters.doneItems);
    const notYetDoneItems = computed(() => root.$store.getters.notYetDoneItems);
    return {
        items,
        doneItems,
        notYetDoneItems
    };
}

export default useStore;
