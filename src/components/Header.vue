<script setup lang="ts">
import { ref } from 'vue'

const state = defineProps<{
  page: string
}>()

const emit = defineEmits<{
  (e: 'navigate', page: 'Boutique' | 'Admin'): void
}>()

const menuToggle = ref<boolean>(false)
</script>

<template>
  <!-- <i class="fa-solid fa-bars"></i> -->
  <header class="flex flex-row items-center">
    <a href="" class="ml-20 mr-40">
      <img src="../assets/img/logo.svg" alt="logo vue" />
      <span class="logo">Boutique</span>
    </a>
    <div class="flex flex-row items-center action-container fill">
      <i class="fa-solid fa-bars" @click="menuToggle = !menuToggle"></i>
      <div class="menu-xs-container show-xs">
        <Transition>
          <ul v-if="menuToggle" class="menu" @click="menuToggle = !menuToggle">
            <li>
              <a
                href="#"
                @click="emit('navigate', 'Boutique')"
                :class="{
                  active: state.page === 'Boutique'
                }"
                >Shop</a
              >
            </li>
            <li>
              <a
                href="#"
                @click="emit('navigate', 'Admin')"
                :class="{
                  active: state.page === 'Admin'
                }"
                >Admin</a
              >
            </li>
            <li>
              <a href="#">Inscription</a>
            </li>
            <li>
              <a href="#">Connexion</a>
            </li>
          </ul>
        </Transition>

        <div v-if="menuToggle" @click="menuToggle = !menuToggle" class="calc"></div>
      </div>

      <ul class="flex flex-row fill hide-xs">
        <li>
          <a
            href="#"
            @click="emit('navigate', 'Boutique')"
            :class="{
              active: state.page === 'Boutique'
            }"
            >Shop</a
          >
        </li>
        <li>
          <a
            href="#"
            @click="emit('navigate', 'Admin')"
            :class="{
              active: state.page === 'Admin'
            }"
            >Admin</a
          >
        </li>
      </ul>
      <ul class="flex flex-row mr-10 hide-xs">
        <li>
          <a href="#">Inscription</a>
        </li>
        <li>
          <a href="#">Connexion</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '../assets/scss/mixins' as m;
.action-container {
  @include m.xs {
    margin-right: 20px;
    justify-content: end;
  }
}
.show-xs {
  @include m.sm {
    display: none;
  }
}

.menu-xs-container {
  position: relative;
}

.calc {
  z-index: 10;
  position: fixed;
  height: 100vh;
  width: 100%;
}

.menu {
  display: block;
  position: absolute;
  background-color: var(--gray-3);
  border-radius: var(--border-radius);
  text-align: end;
  padding: 10px;
  color: white;
  top: 40px;
  right: 0px;
  li {
    padding: 5px 0;
  }
}
header {
  background-color: var(--primary-1);
  .active {
    font-weight: 600;
    text-decoration: underline;
  }
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
    cursor: pointer;
  }
}
</style>
