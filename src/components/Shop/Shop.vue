<script setup lang="ts">
import type { ProductI } from '@/interface/product.interface'
import ShopProductList from './ShopProductList.vue'

defineProps<{
  products: ProductI[]
}>()
</script>

<template>
  <main class="">
    <ShopProductList :products="products" />
  </main>
</template>

<style scoped lang="scss"></style>
