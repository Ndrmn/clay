import { createRouter, createWebHashHistory } from 'vue-router';
import CartPage from "./pages/CartPage.vue";
import ProductPage from "./pages/ProductPage.vue";
import AllProductsPage from './pages/AllProductsPage.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: AllProductsPage},        
        {path: '/product/:id?', component: ProductPage},
        {path: '/cart', component: CartPage},
    ]
})