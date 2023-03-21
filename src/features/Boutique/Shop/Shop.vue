<script setup lang="ts">
import type { FiltersI, FilterUpdateI } from '@/interface/filters.interface'
import type { ProductI } from '@/interface/product.interface'
import Filter from './Filter.vue'
import ShopProductList from './ShopProductList.vue'

defineProps<{
  products: ProductI[]
  filters: FiltersI
}>()

const emit = defineEmits<{
  (e: 'addToCart', productId: string): void
  (e: 'updateFilter', updateFilter: FilterUpdateI): void
}>()
</script>

<template>
  <main class="flex flex-row">
    <Filter
      :nbr-of-products="products.length"
      @update-filter="emit('updateFilter', $event)"
      :filters="filters"
      class="shop-filter"
    />
    <ShopProductList class="fill" :products="products" @add-to-cart="emit('addToCart', $event)" />
  </main>
</template>

<style scoped lang="scss">
.shop-filter {
  flex: 0 0 200px;
}
</style>
