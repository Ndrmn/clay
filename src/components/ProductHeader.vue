<template>
    <div class="header">
        <div class="logo">
           <HeaderLogo />
        </div>
        <div class="navigation">
            <NavigationBar />
            <ToolsBar />
        </div>
    </div>
</template>

<script setup>

import HeaderLogo from './HeaderLogo';
import NavigationBar from './NavigationBar';
import ToolsBar from './ToolsBar';

</script>


<style scoped>
    .header {
        box-sizing: border-box;
        width: 100%;
        min-height: 36px;
        display: flex;
        justify-content: space-between;
        padding: 25px 0px;
    }
    .logo {
        width: 184px;
        height: 36px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .navigation {
        display: flex;
        max-width: 423px;
        width: 100%;
        justify-content: space-between;
    }
</style>
