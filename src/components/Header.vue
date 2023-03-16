<script setup lang="ts"></script>

<template>
  <header class="flex flex-row items-center">
    <a href="" class="ml-20 mr-40">
      <img src="../assets/img/logo.svg" alt="logo vue" />
      <span class="logo">Boutique</span>
    </a>
    <ul class="flex flex-row fill">
      <li>
        <a href="#">Shop</a>
      </li>
      <li>
        <a href="#">Admin</a>
      </li>
    </ul>
    <ul class="flex flex-row mr-10">
      <li>
        <a href="#">Inscription</a>
      </li>
      <li>
        <a href="#">Connexion</a>
      </li>
    </ul>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: var(--primary-1);
  a {
    color: var(--text-primary-color);
    img {
      width: 20px;
      margin-right: 10px;
    }
    .logo {
      font-size: 20px;
      font-weight: 700;
    }
  }
  li {
    margin-right: 8px;
  }
}
</style>
