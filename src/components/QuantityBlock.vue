<template>
    <div class="quantity">
        <p>Quantity</p>
        <div>
            <button class="decrement" @click="dec">-</button>
            <input v-model="counter" @input="valid" type="text">
            <button class="increment" @click="inc">+</button>
        </div>
    </div>
</template>

<script setup>

import { ref, defineEmits, onMounted } from 'vue'

const emit = defineEmits(['response'])
let counter = ref(1)

onMounted(() => {
    toParent ()
})


function inc () {
    if (counter.value < 100) {
        counter.value++
        sessionStorage.setItem('quantity', counter.value)
    }
    toParent ()
}

function dec () {
    if (counter.value > 1) {
        counter.value--
        sessionStorage.setItem('quantity', counter.value)
    }
    toParent ()
}
function valid () {
	
    counter.value = counter.value.replace(/[^\d]/g, '');
    counter.value = counter.value.replace(/^0+/, '');

    if (counter.value > 100) {
        counter.value = 100
    }
    if (counter.value == "") {
        counter.value = 1
    }
    sessionStorage.setItem('quantity', counter.value)
}

function toParent () {

    emit('response', counter.value)
}

</script>

<style scoped>
    .quantity p{
        font-weight: 500;
        font-size: 10px;
        line-height: 15px;
        margin-bottom: 5px;
    }
    .quantity div button {
        width: 16px;
        height: 25px;
        color: #8E8E8E;
        background-color: #F5F5F5;
    }
    .quantity div input {
        box-sizing: border-box;
        width: 43px;
        height: 25px;
        text-align: center;
    }
    .decrement {
        border-radius: 4px 0px 0px 4px;
    }
    .increment {
        border-radius: 0px 4px 4px 0px;
    }
</style>