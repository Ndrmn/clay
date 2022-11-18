<template>
        <div class="product">
            <div class="image">
                <img :src="props.image" alt="">
            </div>
            <div class="text">
                <div class="name">{{props.name}}</div>
                <div class="shop">{{props.shopName}}</div>
            </div>
            <div class="price">
                <p>{{props.price}}$</p>
            </div>
            <div class="buttons">
                <button :id="props.id" @click="toCart" class="btn">Add to cart</button>
                <router-link :to="'/product/' + props.id "><button @click="details" class="btn">Details</button></router-link>
                
            </div>
        </div>
</template>

<script setup>
import { defineProps } from 'vue';
import store from '../store.js';


function toCart() {
    let cartItem = {};
    cartItem.color = props.color;
    cartItem.quantity = 1;
    cartItem.price = props.price;
    cartItem.shopName = props.shopName;
    cartItem.id = props.id;
    cartItem.name = props.name;  
    store.dispatch("setProduct", cartItem);
}

const props = defineProps([
  "name",
  "image",
  "price",
  "shopName",
  "id",
  "color",
  "product"
])

function details() {
    store.dispatch("setObj", JSON.parse(props.product));
}

</script>

<style scoped>
    .product {
        box-sizing: border-box;
        border: 1px solid #6B6B6B;
        border-radius: 5px;
        padding: 10px;
        margin: 5px;
        display: flex;
    }
    .image {
        width: 20%;
    }
    .image img {
        width: 100%;
        border-radius: 5px;
        margin-right: 10px;
    }
    .text {
        width: 60%;
        margin: 0px 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: border-box;
    }
    .shop {
        font-size: 10px;
    }
    .price {
        width: 10%;
        display: flex;
        align-items: center;    
     }
    .buttons {
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .btn {
        width: 100%;
        height: 23px;
        background: #FFDB95;
        border-radius: 5px;
        font-weight: 400;
        font-size: 10px;
        line-height: 15px;
        margin: 5px 0px;
    }
</style>