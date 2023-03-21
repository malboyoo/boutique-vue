<script setup lang="ts">
import Shop from '@/features/Boutique/Shop/Shop.vue'
import Cart from './Cart/Cart.vue'
import { DEFAULT_FILTER } from '../Boutique/data/filters'
import { reactive, computed } from 'vue'
import type { ProductI } from '../../interface/product.interface'
import type { ProductCartI } from '../../interface/productCart.interface'
import type { FiltersI, FilterUpdateI } from '../../interface/filters.interface'
import { getProducts } from '@/api/api'

const state = reactive<{
  products: ProductI[]
  cart: ProductCartI[]
  filters: FiltersI
}>({
  products: [],
  cart: [],
  filters: { ...DEFAULT_FILTER }
})

state.products = await getProducts()

function addToCart(productId: string): void {
  const product = state.products.find((p) => p._id === productId)
  const cartProduct = state.cart.find((p) => productId === p._id)
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

function deleteFromCart(productId: string): void {
  const cartProduct = state.cart.find((p) => productId === p._id)
  if (cartProduct) {
    if (cartProduct.quantity === 1) {
      state.cart = state.cart.filter((p) => p._id !== productId)
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
    class="boutique-container"
    :class="{
      hideCart: state.cart.length === 0
    }"
  >
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
  </div>
</template>

<style lang="scss">
.boutique-container {
  display: grid;
  grid-template-areas: 'shop cart';
  grid-template-columns: 75% 25%;
  height: 100%;
}

.hideCart {
  grid-template-areas: 'shop';
  grid-template-columns: 100%;
}

.shop {
  grid-area: shop;
}
.cart {
  grid-area: cart;
  border-left: var(--border);
  background-color: white;
}
</style>
