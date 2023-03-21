import type { ProductI } from '@/interface/product.interface'

export async function createProduct(values: any) {
  try {
    const response = await fetch('https://restapi.fr/api/malboyoo', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getProducts() {
  try {
    const response = await fetch('https://restapi.fr/api/malboyoo')
    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    console.log(error)
  }
}

async function feedProducts(data: ProductI[]) {
  for (let d of data) {
    await createProduct(d)
  }
}
