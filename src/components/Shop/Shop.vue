<script setup lang="ts">
import type { ProductI } from '@/interface/product.interface'
import ShopProductList from './ShopProductList.vue'

defineProps<{
  products: ProductI[]
}>()

const emit = defineEmits<{
  (e: 'addToCart', productId: number): void
}>()
</script>

<template>
  <main>
    <ShopProductList :products="products" @add-to-cart="emit('addToCart', $event)" />
  </main>
</template>

<style scoped lang="scss"></style>
