<script setup lang="ts">
import Header from './components/Header.vue'
import Shop from './components/Shop/Shop.vue'
import Cart from './components/Cart/Cart.vue'
import Footer from './components/Footer.vue'
import data from './data/products'
import { reactive } from 'vue'
import type { ProductI } from './interface/product.interface'
import type { ProductCartI } from './interface/productCart.interface'

const state = reactive<{
  products: ProductI[]
  cart: ProductCartI[]
}>({
  products: data,
  cart: []
})

function addToCart(productId: number): void {
  const product = state.products.find((p) => p.id === productId)
  const cartProduct = state.cart.find((p) => productId === p.id)
  if (cartProduct) {
    cartProduct.quantity++
  } else {
    if (product) {
      state.cart.push({ ...product, quantity: 1 })
    } else {
      console.log("ce produit n'existe pas")
    }
  }
}

function deleteFromCart(productId: number): void {
  const cartProduct = state.cart.find((p) => productId === p.id)
  if (cartProduct) {
    if (cartProduct.quantity === 1) {
      state.cart = state.cart.filter((p) => p.id !== productId)
    } else {
      cartProduct.quantity--
    }
  }
}
</script>

<template>
  <div
    class="app-container"
    :class="{
      hideCart: state.cart.length === 0
    }"
  >
    <Header class="header" />
    <Shop :products="state.products" class="shop" @add-to-cart="addToCart" />
    <Cart
      class="cart"
      :cart="state.cart"
      @delete-from-cart="deleteFromCart"
      v-if="state.cart.length > 0"
    />
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

.hideCart {
  grid-template-areas:
    'header header'
    'shop shop'
    'footer footer';
  grid-template-columns: 100%;
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
