<script setup lang="ts">
import type { ProductCartI } from '@/interface/productCart.interface'
import { computed } from 'vue'
import CartProductList from './CartProductList.vue'
const props = defineProps<{ cart: ProductCartI[] }>()

const emit = defineEmits<{
  (e: 'deleteFromCart', productId: string): void
}>()

const totalPrice = computed(() => {
  return props.cart.reduce((acc, curr): number => {
    return curr.price * curr.quantity + acc
  }, 0)
})
</script>

<template>
  <aside class="p-20 flex flex-col">
    <h2>Panier</h2>
    <CartProductList :cart="cart" @delete-from-cart="emit('deleteFromCart', $event)" />
    <button class="btn btn-success">Commader ( {{ totalPrice }} € )</button>
  </aside>
</template>

<style scoped lang="scss"></style>
