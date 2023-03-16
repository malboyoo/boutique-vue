<script setup lang="ts">
import Header from './components/Header.vue'
import Shop from './components/Shop/Shop.vue'
import Cart from './components/Cart/Cart.vue'
import Footer from './components/Footer.vue'
import data from './data/products'
import { reactive } from 'vue'
import type { ProductI } from './interface/product.interface'

const products = reactive<ProductI[]>(data)
const panier = reactive<ProductI[]>([])
</script>

<template>
  <div class="app-container">
    <Header class="header" />
    <Shop :products="products" class="shop" />
    <Cart class="cart" />
    <Footer class="footer" />
  </div>
</template>

<style lang="scss">
.app-container {
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    'header header'
    'shop cart'
    'footer footer';
  grid-template-rows: 48px 1fr 48px;
  grid-template-columns: 75% 25%;
}

.header {
  grid-area: header;
}
.shop {
  grid-area: shop;
}
.cart {
  grid-area: cart;
  border-left: var(--border);
  background-color: white;
}
.footer {
  grid-area: footer;
}
</style>
