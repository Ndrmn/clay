<template>
    <div class="allProducts">
        <h1 class="title">All products</h1>
        <div class="productsBody">
            <ProductCard v-for="item in products" :key="item.color" :name="item[0].name" :image="require('@/assets/products/' + item[0].image)" :price="item[0].price" :shopName="item[0].shopName" :id="item[0].id" :color="item[0].color" :product="JSON.stringify(item)" />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import ProductCard from '../components/ProductCard.vue';
import productsJson from '../../products.json';

let products = ref([]);

function GenerateProducts(data) {
    for(let i = 0; i<data.length; i++) {
        products.value[i] = []; 
        for (let n = 0; n<(data[i].color.length); n++) {
            products.value[i][n] = {};
            products.value[i][n].name = data[i].name;
            products.value[i][n].description = data[i].description;
            products.value[i][n].price = data[i].price;
            products.value[i][n].image = data[i].image;
            products.value[i][n].color = data[i].color[n];
            products.value[i][n].colorCode = data[i].colorCode[n];
            products.value[i][n].shopName = data[i].shopName;
            products.value[i][n].id = data[i].id;
            products.value[i][n].checked = false;
        }
    }
}

onMounted(() => {
    GenerateProducts(productsJson);
})


// let product = reactive([
//     {color: 'blue', colorCode: "#9FC8DC", checked: false},
//     {color: 'red', colorCode: "#E8653A", checked: false},
//     {color: 'violet', colorCode: "#D29DD7", checked: false},
//     {color: 'pink', colorCode: "#F9B2BB", checked: false}
// ])

</script>

<style scoped>
    .allProducts {
        width: 100%;
        padding: 10px 0px;
    }
    .title {
        font-size: 16px;
        margin-bottom: 10px;
        text-align: center;
    }

</style>