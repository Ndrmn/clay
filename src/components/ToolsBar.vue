<template>
    <ul class="tools">
        <li>
           <button><img src="../assets/search.svg" alt="#"></button>
        </li>
        <li>
            <button onclick="document.location='#/cart'"><img src="../assets/shopping_bag.svg" alt="#"></button>
        </li>
        <li>
            <button><img src="../assets/account_circle.svg" alt="#"></button>
        </li>
    </ul>
</template>

<script>

</script>


<style scoped>
    .tools {
        display: flex;
        max-width: 114px;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
    .tools li button {
        width: 24px;
        height: 24px;
    }
    .tools li button img{
        width: 100%;
        height: 100%;
        background-color: #FFF9F1;
    }  
</style>
