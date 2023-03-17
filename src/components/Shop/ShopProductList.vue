<script setup lang="ts">
import type { ProductI } from '@/interface/product.interface'
import ShopProduct from './ShopProduct.vue'

defineProps<{
  products: ProductI[]
}>()

const emit = defineEmits<{
  (e: 'addToCart', productId: number): void
}>()
</script>

<template>
  <ul class="grid p-20">
    <ShopProduct
      v-for="product of products"
      :product="product"
      @add-to-cart="emit('addToCart', $event)"
    />
  </ul>
</template>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: 350px;
  gap: 20px;
}
</style>
