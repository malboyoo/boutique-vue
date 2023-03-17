import type { ProductI } from './product.interface'

export interface ProductCartI extends ProductI {
  quantity: number
}
