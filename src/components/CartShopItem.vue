<template>
        <div v-if="totalSum" class="shop">
            <div class="shopName">{{shopItems[0].shopName}}</div>
            <div v-for="item in shopItems" :key="item.color" class="item">
                <div class="number">{{++numberOfItem}}</div>
                <div class="name">{{item.name}}</div>
                <div class="color">{{item.color}}</div>
                <div class="quantity">{{item.quantity}}</div>
                <div class="price">{{item.price}} $</div>
            </div>
        </div>
</template>

<script setup>
import { defineProps, reactive, computed } from 'vue';
import store from '../store.js';

let numberOfItem = 0;
const props = defineProps([
  "cartItems"
])

let shopItems = reactive(JSON.parse(props.cartItems));

let totalSum = computed(() => {
    return store.getters.getTotalPrice
})




</script>

<style scoped>
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