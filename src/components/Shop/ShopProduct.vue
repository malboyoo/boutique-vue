<script setup lang="ts">
import type { FiltersI } from '@/interface/filters.interface'
import type { ProductI } from '@/interface/product.interface'

defineProps<{
  product: ProductI
}>()

const emit = defineEmits<{
  (e: 'addToCart', productId: number): void
}>()
</script>

<template>
  <li class="product flex flex-col p-5" :key="product.id">
    <div
      class="product-image"
      :style="{
        backgroundImage: `url(${product.image})`
      }"
    ></div>
    <div class="p-10 flex flex-col justify-center">
      <h4>{{ product.title }}</h4>
      <p class="mt-20 mb-20">
        {{ product.description }}
      </p>
      <div class="flex flex-row items-center justify-center">
        <span class="fill">Prix: {{ product.price }} €</span>
        <button class="btn btn-primary" @click="emit('addToCart', product.id)">
          Ajouter au panier
        </button>
      </div>
    </div>
  </li>
</template>

<style scoped lang="scss">
.product {
  background-color: white;
  border: var(--border);
  border-radius: var(--border-radius);
  justify-content: space-around;
  p {
    font-size: 12px;
  }
  .product-image {
    align-self: center;
    border-top-right-radius: var(--border-radius);
    border-top-left-radius: var(--border-radius);
    background-size: cover;
    background-position: center;
    max-height: 200px;
    height: 200px;
    max-width: 307px;
    width: 100%;
  }
  span {
    font-weight: 500;
  }
}
</style>
