import type { FiltersI } from '@/interface/filters.interface'

export const DEFAULT_FILTER: FiltersI = {
  search: '',
  priceRange: [0, 10000],
  category: 'all'
}
