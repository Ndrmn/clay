<template>
    <div class="cart">
        <h1 class="header">Cart</h1>
        <div class="headerList">
            <div class="number">№</div>
            <div class="name">Name</div>
            <div class="color">Color</div>
            <div class="quantity">Quantity</div>
            <div class="price">Price</div>
        </div>
        
        <CartShopItem v-for="item in filteredProducts" :key="item[0].shopName" :cartItems="JSON.stringify(item)"/>
        
        <!-- <div class="shop">
            <div class="shopName">Test name</div>
            <div v-for="item in cart" :key="item.color" class="item">
                <div class="number">{{++numberOfItem}}</div>
                <div class="name">{{item.name}}</div>
                <div class="color">{{item.color}}</div>
                <div class="quantity">{{item.quantity}}</div>
                <div class="price">{{item.price}} $</div>
            </div>
        </div> -->

        <div class="total">Total: {{totalSum}} $</div>
        <div>
            <button class="btn" @click="clearFunc">Clear cart</button><button class="btn">Buy</button>
        </div>
    </div>
</template>

<script setup>

import { ref, onMounted, computed } from 'vue';
import store from '../store.js';
import CartShopItem from '../components/CartShopItem.vue';

//let numberOfItem = 0;

let cart = ref();

function getCartValues() {
    if (store.state.cart.length > 0) {
        cart.value = store.state.cart;
    } else {
        cart.value = (localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : [] );
        store.dispatch("restoreCart", cart.value);
        console.log(cart.value)
    }
}

let shopSet = ref(new Set());

function getShopTitles() {
    for (let i = 0;  i < cart.value.length; i++) {
        console.log(cart.value[i].shopName)
        shopSet.value.add(cart.value[i].shopName)
    }
}

let filteredProducts = ref([]);

function sortByShops() {
    for (let item of shopSet.value) {
        let filteredArr = cart.value.filter(elem => elem.shopName === item);
        filteredProducts.value.push(filteredArr)
    }
}

onMounted(() => {
    getCartValues()
    getShopTitles()
    sortByShops()
})







let totalSum = computed(() => {
    return store.getters.getTotalPrice
})


function clearFunc () {
    store.dispatch("clearProduct", []);
    getCartValues();
    filteredProducts = ref([]);
}




</script>

<style scoped>
    .cart {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .header {
        width: 100%;
        padding: 10px 0;
        font-weight: 600;
        text-align: center;
        font-size: 16px;
    }
    .btn {
        margin: 20px 10px 0px 10px;
        width: 189px;
        height: 23px;
        background: #FFDB95;
        border-radius: 5px;
        font-weight: 400;
        font-size: 10px;
        line-height: 15px;
    }
    .elem {
        width: 100%;
    }
    .total {
        width: 100%;
        padding: 10px 0;
        margin-top: 10px;
        font-weight: 600;
        text-align: right;
        font-size: 16px;
        border-top: 1px solid black;      
    }
    .headerList {
        width: 100%;
        padding: 10px 0;
        font-weight: 600;
        text-align: left;
        font-size: 12px;
        border-bottom: 1px solid black;
        display: flex;
        margin-bottom: 10px; 
    }
    .number {
        width: 5%;
        padding-left: 5px;
    }
    .name {
        width: 65%;
        padding-left: 5px;
    }
    .color {
        width: 10%;
        padding-left: 5px;
    }
    .quantity {
        width: 10%;
        padding-left: 5px;
    }
    .price {
        width: 10%;
        padding-left: 5px;
    }

    .item {
        width: 100%;
        padding: 10px 0;
        font-weight: 400;
        text-align: left;
        font-size: 12px;
        display: flex;
    }
    .shop {
        width: 100%;
        margin: 10px 0px;
        border: 1px solid #636363;
        border-radius: 5px;
    }
    .shopName {
        margin: 5px;
        border-bottom: 1px solid #636363;
    }
</style>
