import VueRouter from "vue-router";
import Vue from "vue";

import List from '../components/List.vue'
import ListDone from '../components/ListDone.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: List },
    { path: '/done', component: ListDone },
];

const router = new VueRouter({
    routes
});

export default router;
