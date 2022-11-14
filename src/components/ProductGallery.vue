<template>
    <div class="gallery">
        <ul class="carousel">
            <li><img src="../assets/ProductImages/blue.svg" alt="#"></li>
            <li><img src="../assets/ProductImages/red.svg" alt="#"></li>
            <li><img src="../assets/ProductImages/violet.svg" alt="#"></li>
            <li><img src="../assets/ProductImages/pink.svg" alt="#"></li>
        </ul>
        <div class="preview">
            <img src="../assets/ProductImages/main.svg" alt="#">
        </div>
        <div class="button">
            <button><img src="../assets/ProductImages/arrow_forward.svg" alt="#"></button>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
    .gallery {
        width: 56%;
        height: 100%;
        display: flex;
        margin: 0px 15px;
    }
    .carousel {
        height: 191px;
        width: 49px;
        display: flex;
        flex-direction: column;
        justify-content: space-betweenn;
        margin-right: 6px;
    }
    .carousel li {
        margin-bottom: 5px;
    }
    .carousel li img {
        border-radius: 4px;
    }
    .preview {
        max-width: 320px;
        max-height: 320px;
        margin-right: 11px;
    }
    .preview img {
        width: 100%;
        height: 100%;
    }
    .button {
        display: flex;
        width: 24px;
        justify-content: center;
        align-items: center;
    }
    .button button {
        width: 24px;
        height: 24px;
        border-radius: 100%;
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>