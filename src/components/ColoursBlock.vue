<template>
    <div class="colours">
        <p>Colours</p>
        <ul>
            <li v-for="item in product" :key="item.color" :id="item.colorCode" :style=" 'background-color:'+item.colorCode" :class="[item.checked ? borderOn : '']" @click="checked">{{}}</li>
        </ul>
        <div class="btnScale"><button v-show="color" @click="cancelFunc" class="cancelBtn">X clear</button></div>
    </div>
</template>

<script setup>

import { ref, defineEmits, onMounted, defineProps } from 'vue';

const emit = defineEmits(['response']);
import store from '../store.js';

// let product = reactive([
//     {color: 'blue', colorCode: "#9FC8DC", checked: false},
//     {color: 'red', colorCode: "#E8653A", checked: false},
//     {color: 'violet', colorCode: "#D29DD7", checked: false},
//     {color: 'pink', colorCode: "#F9B2BB", checked: false}
// ])

const borderOn = ref('checkedElem')

const props = defineProps([
  "product"
])

let product = ref(JSON.parse(props.product));

onMounted(() => {
    product.value = store.state.product;
})


let color = ref(false)

onMounted(() => {
    toParent ()
})

function actualColor () {
    for (let el of product.value) {
        if (el.checked == true) {

            color.value = el.color
        }
    }
}

function toParent () {

    emit('response', color.value)
}

// function checked(item) {
//     let checkedColor = item.target
//     for (let i=0; i<product.length; i++) {
//         if (product[i].colorCode === checkedColor.id) {
//             product[i].checked = true
//         } else {
//             product[i].checked = false
//         }

//     }
//     actualColor()
//     toParent()
// }

function checked(item) {
    let checkedColor = item.target
    for (let elem of product.value) {
        if (elem.colorCode === checkedColor.id) {
            elem.checked = true
        } else {
            elem.checked = false
        }

    }
    actualColor()
    toParent()
}




function cancelFunc () {
    for (let i = 0; i<product.value.length; i++) {
        product.value[i].checked = false        
    }
    color.value = false
    toParent ()
}

</script>

<style scoped>
    .colours {
        margin-bottom: 11px;
    }
    .colours p{
        font-weight: 500;
        font-size: 10px;
        line-height: 15px;
        height: 15px;
        margin-bottom: 5px;
    }
    .colours ul {
        display: flex;
        flex-direction: row;
        width: 124px;
        height: 22px;
    }
    .colours ul li {
        width: 25px;
        height: 22px;
        border-radius: 2px;
        box-sizing: border-box;
        margin-right: 5px;
    }
    .blue {
        background-color: #9FC8DC;
    }

    .red {
        background-color: #E8653A;
    }
    .violet {
        background-color: #D29DD7;
    }
    .pink {
        background-color: #F9B2BB;
    }
    .checkedElem {
        border: 1px solid black;
    }
    .cancelBtn {
        margin-top: 5px;
        font-size: 10px;
        width: 50px;
        height: 20px;
    }
    .btnScale {
        width: 50px;
        height: 20px;
    }
</style>