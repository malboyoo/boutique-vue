<script setup lang="ts">
import Header from './components/Header.vue'
import Shop from './components/Shop/Shop.vue'
import Cart from './components/Cart/Cart.vue'
import Footer from './components/Footer.vue'
import data from './data/products'
import { reactive, computed } from 'vue'
import type { ProductI } from './interface/product.interface'
import type { ProductCartI } from './interface/productCart.interface'
import type { FiltersI, FilterUpdateI } from './interface/filters.interface'
import { DEFAULT_FILTER } from './data/filters'

const state = reactive<{
  products: ProductI[]
  cart: ProductCartI[]
  filters: FiltersI
}>({
  products: data,
  cart: [],
  filters: { ...DEFAULT_FILTER }
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

const filteredProduct = computed((): ProductI[] => {
  return state.products.filter((p) => {
    if (
      p.price >= state.filters.priceRange[0] &&
      p.price <= state.filters.priceRange[1] &&
      (p.category === state.filters.category || state.filters.category === 'all') &&
      (p.title.toLocaleLowerCase().includes(state.filters.search.toLocaleLowerCase()) ||
        state.filters.search === '')
    ) {
      return true
    } else {
      return false
    }
  })
})

function updateFilter(filterUpdate: FilterUpdateI) {
  if (filterUpdate.search !== undefined) {
    state.filters.search = filterUpdate.search
  } else if (filterUpdate.priceRange) {
    state.filters.priceRange = filterUpdate.priceRange
  } else if (filterUpdate.category) {
    state.filters.category = filterUpdate.category
  } else {
    state.filters = { ...DEFAULT_FILTER }
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
    <Shop
      @update-filter="updateFilter"
      @add-to-cart="addToCart"
      :products="filteredProduct"
      :filters="state.filters"
      class="shop"
    />
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
