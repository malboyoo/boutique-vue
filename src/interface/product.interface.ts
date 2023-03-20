import type { Category } from './filters.interface'

export interface ProductI {
  id: number
  title: string
  image: string
  price: number
  description: string
  category: Category
}
