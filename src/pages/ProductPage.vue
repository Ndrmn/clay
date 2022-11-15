<template>
    <div class="block">
        <ProductGallery />
        <ProductDescription />
    </div>
</template>

<script setup>

import ProductGallery from '../components/ProductGallery';
import ProductDescription from '../components/ProductDescription';

</script>

<style scoped>
    .block {
        box-sizing: border-box;
        width: 100%;
        padding: 25px 0px;
        min-height: 370px;
        display: flex;
    }
</style>