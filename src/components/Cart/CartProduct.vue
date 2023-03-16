<script setup lang="ts"></script>

<template>
  <li class="product flex flex-row items-center p-10 mt-10">
    <strong class="fill mr-10">Macbook pro</strong>
    <span class="mr-10">prix : 1500 €</span>
    <button class="btn btn-danger">supprimer</button>
  </li>
</template>

<style scoped lang="scss">
.product {
  border: var(--border);
  border-radius: var(--border-radius);
  width: 100%;
  height: 50px;
  background-color: var(--gray-1);
}
</style>
