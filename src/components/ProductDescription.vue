<template>
    <div class="description">
        <p class="paragraph1">Half Daisy Dangles</p>
        <p class="paragraph2">PKR 900</p>
        <p class="paragraph3">These colorful half daisy earrings are a lightweight, handmade statement piece for any outfit available in four beautiful shades.</p>
        <p class="paragraph3">Dimensions: 2 x 2.5 in</p>
        <ColoursBlock @response="colorToCart"/>
        <QuantityBlock @response="quantityToCart"/>
        <button class="button" @click="toCart" :disabled="toggle">Add to cart</button>
    </div>
</template>

<script setup>

import { ref } from 'vue';

import ColoursBlock from './ColoursBlock';
import QuantityBlock from './QuantityBlock';
import store from '../store.js';

let productColor = ref('')
let productQuantity = ref('')

function colorToCart(color) {
    productColor.value = color
    console.log(productColor.value)
    disableToggle ()
}
function quantityToCart(quantity) {
    productQuantity.value = quantity
}


let toggle = ref(true)

function disableToggle () {
    if (productColor.value == false) {
        toggle.value = true
    } else {
        toggle.value = false
    }

}

function toCart() {
    let cartItem = {};
    cartItem.color = productColor.value
    cartItem.quantity = productQuantity.value
    cartItem.price = cartItem.quantity * 100;
    console.log(cartItem)
    store.dispatch("setProduct", cartItem);
}


</script>

<style scoped>
    .description {
        width: 36%;
        height: 320px;
        margin: 0px 15px;
        display: flex;
        flex-direction: column;
    }
    .paragraph1 {
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        margin-bottom: 3px;
    }
    .paragraph2 {
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        margin-bottom: 26px;
    }
    .paragraph3 {
        font-weight: 300;
        font-size: 10px;
        line-height: 15px;
        margin-bottom: 15px;
    }
    .button {
        margin-top: 18px;
        width: 189px;
        height: 23px;
        background: #FFDB95;
        border-radius: 5px;
        font-weight: 400;
        font-size: 10px;
        line-height: 15px;
        align-self: center;
    }
</style>