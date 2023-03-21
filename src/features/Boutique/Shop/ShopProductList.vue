<script setup lang="ts">
import type { ProductI } from '@/interface/product.interface'
import ShopProduct from './ShopProduct.vue'

defineProps<{
  products: ProductI[]
}>()

const emit = defineEmits<{
  (e: 'addToCart', productId: string): void
}>()
</script>

<template>
  <ul class="grid p-20 scrollable">
    <ShopProduct
      v-for="product of products"
      :product="product"
      @add-to-cart="emit('addToCart', $event)"
      :key="product._id"
    />
  </ul>
</template>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as m;
.grid {
  display: grid;
  grid-template-columns: 1fr;
  @include m.md {
    grid-template-columns: 1fr 1fr;
  }
  @include m.lg {
    grid-template-columns: 1fr 1fr 1fr;
  }
  grid-auto-rows: 350px;
  gap: 20px;
}

.scrollable {
  overflow-y: auto;
  height: calc(100vh - 96px);
}
</style>
