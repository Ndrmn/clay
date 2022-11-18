<template>
    <div class="description">
        <p class="paragraph1">{{product[0].name ? product[0].name : "Name"}}</p>
        <p class="paragraph2">PKR 900</p>
        <p class="paragraph3">{{product[0].description ? product[0].description : "Description" }}</p>
        <p class="paragraph4">Dimensions: 2 x 2.5 in</p>
        <ColoursBlock @response="colorToCart" :product= "a" />
        <QuantityBlock @response="quantityToCart" />
        <button class="button" @click="toCart" :disabled="toggle">Add to cart</button>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';

import ColoursBlock from './ColoursBlock';
import QuantityBlock from './QuantityBlock';
import store from '../store.js';
            import { useRoute } from 'vue-router';

let productColor = ref('')
let productQuantity = ref('')


let product = ref([
    {color: 'blue', colorCode: "#9FC8DC", checked: false},
])


            

            const route = useRoute();

            onMounted (()=>{
                console.log(route.params.id)
            })



function objToColors() {
    return (JSON.stringify(product.value))
}

let a = ref()

a.value = objToColors()


onMounted(() => {
    product.value = store.state.product;
//    a.value = objToColors()
})

function colorToCart(color) {
    productColor.value = color
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
    cartItem.name = product.value[0].name;
    cartItem.color = productColor.value;
    cartItem.quantity = productQuantity.value;
    cartItem.price = cartItem.quantity * product.value[0].price;
    cartItem.shopName = product.value[0].shopName;
    cartItem.id = product.value[0].id;
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
        visibility: hidden;
    }
    .paragraph3 {
        font-weight: 300;
        font-size: 10px;
        line-height: 15px;
        margin-bottom: 15px;
        /* visibility: hidden; */
    }
    .paragraph4 {
        font-weight: 300;
        font-size: 10px;
        line-height: 15px;
        margin-bottom: 15px;
        visibility: hidden;
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