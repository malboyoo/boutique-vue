export type Category = 'gamer' | 'desktop' | 'streaming' | 'all'

export interface FiltersI {
  search: string
  priceRange: [number, number]
  category: Category
}

export interface FilterUpdateI {
  search?: string
  priceRange?: [number, number]
  category?: Category
}
