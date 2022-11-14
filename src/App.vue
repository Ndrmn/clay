<template>
  <div class="wrapper">
    <ProductHeader />
    <BreadCrumbs />
    <router-view></router-view>
    <!-- <ProductBlock /> -->

    <!-- <CartPage /> -->
  </div>

</template>

<script setup>

import ProductHeader from './components/ProductHeader';
import BreadCrumbs from './components/BreadCrumbs';
//import ProductBlock from './components/ProductBlock';

// import CartPage from './components/CartPage';

</script>

<style>
*{padding: 0; margin: 0; border: 0;}
*,*:before,*after{-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}
:focus,:active{outline: none;}
a:focus,a:active{outline: none;}
nav,footer,header,aside{display: block;}
html,body{height: 100%;width: 100%;font-size: 100%;line-height: 1;font-size: 14px;-ms-text-size-adjust: 100%;-moz-text-size-adjust: 100%;-webkit-text-size-aadjust: 100%;}
input,button,textarea{font-family:inherit;}
input::-ms-clear{display: none;}
button{cursor: pointer;}
button::-moz-focus-inner {padding:0;border:0;}
a, a:visited{text-decoration: none;}
a:hover{text-decoration: none;}
ul li{list-style: none;}
img{vertical-align: top;}
h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: inherit;}


#app {
  background-color: #FFF9F1;
  min-width: 100%;
  min-height: 100%;
  font-family: 'Poppins', sans-serif;
}

.wrapper {
  max-width: 800px;
  width: 100%;
  padding: 0px 30px;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
