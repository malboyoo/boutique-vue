<script setup lang="ts">
import { DEFAULT_FILTER } from '@/data/filters'
import type { Category, FiltersI, FilterUpdateI } from '@/interface/filters.interface'

defineProps<{
  filters: FiltersI
  nbrOfProducts: number
}>()

const emit = defineEmits<{
  (e: 'updateFilter', filterUpdate: FilterUpdateI): void
}>()
</script>

<template>
  <aside class="p-20 flex flex-col">
    <div class="fill">
      <section class="mb-20">
        <h3 class="mb-10">Rechercher</h3>
        <input
          :value="filters.search"
          type="text"
          placeholder="Rechercher"
          @input="emit('updateFilter', { search: ($event.target as HTMLInputElement).value })"
        />
      </section>
      <section class="mb-20">
        <h3 class="mb-10">Trier par prix</h3>
        <div
          class="mb-5"
          v-for="priceRange of ([
          [0, 10000],
          [800, 1000],
          [1000, 1500],
          [1500, 2000],
          [2000, 10000]
        ] as [number, number][])"
        >
          <input
            type="radio"
            name="priceRange"
            :id="priceRange[0] + ''"
            @input="emit('updateFilter', { priceRange: priceRange })"
          />
          <label :for="priceRange[0] + ''">{{ ` ${priceRange[0]}-${priceRange[1]}€` }}</label>
        </div>
      </section>
      <section class="mb-20">
        <h3 class="mb-10">Trier par catégories</h3>
        <p
          class="category"
          :class="{ selected: filters.category === category }"
          v-for="category in (['all', 'desktop', 'gamer', 'streaming'] as Category[])"
          @click="emit('updateFilter', { category })"
        >
          {{ category }}
        </p>
      </section>
    </div>
    <small class="mb-5"
      >Nombre de résultats: <strong>{{ nbrOfProducts }}</strong>
    </small>
    <button class="btn btn-danger" @click="emit('updateFilter', {})">Supprimer les filtres</button>
  </aside>
</template>

<style scoped lang="scss">
.category {
  cursor: pointer;
}
.selected {
  font-weight: 600;
}
</style>
