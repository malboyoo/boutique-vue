<script setup lang="ts">
import type { ProductCartI } from '@/interface/productCart.interface'

defineProps<{
  product: ProductCartI
}>()

const emit = defineEmits<{
  (e: 'deleteFromCart', productId: number): void
}>()
</script>

<template>
  <li class="product flex flex-row items-center p-10 mt-10">
    <div class="fill">
      <strong class="mr-5">{{ product.title }}</strong>
      <span> * {{ product.quantity }}</span>
    </div>

    <div class="flex flex-row mr-20">
      <div>
        <p>{{ product.quantity * product.price }} €</p>
      </div>
    </div>
    <button class="btn btn-danger" @click="emit('deleteFromCart', product.id)">supprimer</button>
  </li>
</template>

<style scoped lang="scss">
.product {
  font-size: 14px;
  border: var(--border);
  border-radius: var(--border-radius);
  width: 100%;
  height: 50px;
  background-color: var(--gray-1);

  p {
    white-space: nowrap;
  }
}
</style>
