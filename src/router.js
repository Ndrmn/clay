import { createRouter, createWebHashHistory } from 'vue-router';
import CartPage from "./pages/CartPage.vue";
import ProductPage from "./pages/ProductPage.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: ProductPage},
        {path: '/cart', component: CartPage},
    ]
})