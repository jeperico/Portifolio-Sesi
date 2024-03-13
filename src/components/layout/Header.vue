<script setup lang="ts">

</script>
<template>
    <header id="header-area" class="header hideable-header">
        <a href="#">
            <img src="./assets/logo-sesi.png" id="logo-sesi-header">
        </a>
        <nav id="nav-wrapper">
            <ul id="list-page-menu">
                <li class="item-nav-page"><a href="#testeLorem">About me</a></li>
                <li class="item-nav-page"><a href="">CHU</a></li>
                <li class="item-nav-page"><a href="">CNA</a></li>
                <li class="item-nav-page"><a href="./pages/MathPage.html">MAT</a></li>
                <li class="item-nav-page"><a href="">LIN</a></li>
                <li class="item-nav-page"><a href=""><button id="cyber-button-nav">Cyber Rain</button></a></li>
            </ul>
        </nav>
    </header>
</template>
<style scoped>
#header-area {
    height: 8rem;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5rem 0 4rem;
    position: fixed;
    transition: top .5s;
    left: 0;
    z-index: 50;
}

.item-nav-page {
    margin-right: 1rem;
    color: var(--color-white);
    transition: transform .5s, box-shadow .5s;
    height: 2.5rem;
    width: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
}

.item-nav-page > a {
    color: var(--color-white);
    font-size: var(--p1);
    font-weight: 600;
    text-shadow: 0 0 10px black;
}

.item-nav-page:hover {
    transition: transform .5s, box-shadow .5s;
    transform: translateY(-2px);
    box-shadow: 0 0 10px var(--color-violet);
}

.header {
    top: 0;
}

.scrollHide {
    top: -30rem;
}

#logo-sesi-header {
    transition: transform .5s;
    height: 5rem;
}

#list-page-menu {
    display: flex;
    flex-direction: row;
}

#cyber-button-nav {
    background-color: var(--color-violet);
    color: var(--color-white);
    font-size: var(--p1);
    height: 3.3rem;
    width: 9rem;
    font-weight: 600;
    border-radius: 8px;
    transition: background-color .5s, transform .5s;
    margin-left: 3rem;
}

#cyber-button-nav:hover {
    transition: background-color .5s, transform .5s, color .5s;
    background-color: var(--cr-yellow);
    color: var(--color-black);
    transform: translateY(-2px);
}

#logo-sesi-header:hover {
    transition: transform .5s;
    transform: translateY(-2px);
}
</style>