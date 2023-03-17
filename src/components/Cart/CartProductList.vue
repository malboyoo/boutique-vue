<script setup lang="ts">
import type { ProductCartI } from '@/interface/productCart.interface'
import CartProduct from './CartProduct.vue'
defineProps<{ cart: ProductCartI[] }>()

const emit = defineEmits<{
  (e: 'deleteFromCart', productId: number): void
}>()
</script>

<template>
  <ul class="flex flex-col justify-start items-center fill">
    <CartProduct
      v-for="product of cart"
      :product="product"
      :key="product.id"
      @delete-from-cart="emit('deleteFromCart', $event)"
    />
  </ul>
</template>

<style scoped lang="scss"></style>
