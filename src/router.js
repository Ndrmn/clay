import { createRouter, createWebHashHistory } from 'vue-router';
import CartPage from "./components/CartPage.vue";
import ProductBlock from "./components/ProductBlock.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: ProductBlock},
        {path: '/cart', component: CartPage},
    ]
})