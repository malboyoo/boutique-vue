import type { Category } from './filters.interface'

export interface ProductI {
  _id?: string
  title: string
  image: string
  price: number
  description: string
  category: Category
}
