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

        <div v-for="item in cart" :key="item.color" class="elem item">
            <div class="number">{{++numberOfItem}}</div>
            <div class="name">Half Daisy Dangles</div>
            <div class="color">{{item.color}}</div>
            <div class="quantity">{{item.quantity}}</div>
            <div class="price">{{item.price}} $</div>
        </div>

        <div class="total">Total: {{totalSum}} $</div>
        <button class="btn">Buy</button>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import store from '../store.js';

let numberOfItem = 0;

let cart = ref(store.state.cart);

let totalSum = ref(0);

function totalSumm () {
    for (let i = 0; i<cart.value.length; i++) {
        totalSum.value += cart.value[i].price
    }
}

totalSumm ();

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
        margin-top: 20px;
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
</style>
