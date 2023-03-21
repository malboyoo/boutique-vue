<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Boutique from './features/Boutique/Boutique.vue'
import Admin from './features/Admin/Admin.vue'
import { ref, type Component as C, reactive } from 'vue'

const pages: { [s: string]: C } = {
  Boutique,
  Admin
}
const state = reactive<{
  page: 'Boutique' | 'Admin'
}>({
  page: 'Admin'
})

function navigate(page: 'Boutique' | 'Admin'): void {
  state.page = page
}
</script>

<template>
  <div class="app-container">
    <Header class="header" @navigate="navigate" :page="state.page" />
    <div class="app-content">
      <Suspense>
        <Component :is="pages[state.page]" />
      </Suspense>
    </div>

    <Footer class="footer" />
  </div>
</template>

<style lang="scss">
.app-container {
  height: 100vh;
  display: grid;
  grid-template-areas:
    'header'
    'app-content'
    'footer';
  grid-template-rows: 48px 1fr 48px;
  grid-template-columns: 100%;
}
.app-content {
  grid-area: app-content;
  min-height: 100%;
}

.header {
  grid-area: header;
}

.footer {
  grid-area: footer;
}
</style>
