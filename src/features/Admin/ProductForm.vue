<script setup lang="ts">
import type { ProductI } from '@/interface/product.interface'
import { toFormValidator } from '@vee-validate/zod'
import { useForm, useField, useResetForm } from 'vee-validate'
import { z } from 'zod'
import { createProduct, getProducts } from '../../api/api'
//import data from '../Boutique/data/products'

const validationSchema = toFormValidator(
  z.object({
    title: z
      .string({ required_error: 'Champ obligatoire' })
      .min(2, { message: "Nom de l'article trop court" })
      .max(25, { message: 'Nom article trop long' }),
    image: z.string({ required_error: 'Champ obligatoire' }),
    price: z.number({ required_error: 'Champ obligatoire' }),
    description: z
      .string({ required_error: 'Champ obligatoire' })
      .min(8, { message: 'Description trop courte' })
      .max(50, { message: 'Description trop longue' }),
    category: z.string({ required_error: 'Champ obligatoire' })
  })
)

const { handleSubmit, isSubmitting } = useForm({
  validationSchema
})

const title = useField('title')
const image = useField('image')
const price = useField('price')
const description = useField('description')
const category = useField('category')

const trySubmit = handleSubmit(async (formValues) => {
  try {
    await createProduct(formValues)
    useResetForm()
  } catch (error) {
    console.log(error)
  }
})

//feedProducts(data)
</script>

<template>
  <div class="card">
    <h2 class="mb-20">Ajouter un article</h2>
    <form @submit="trySubmit" class="flex flex-col">
      <div class="flex flex-col mb-10">
        <label class="mb-5">*Titre</label>
        <input type="text" name="title" v-model="title.value.value" />
        <small v-if="title.errorMessage.value"> {{ title.errorMessage.value }}</small>
      </div>

      <div class="flex flex-col mb-10">
        <label class="mb-5">*Image</label>
        <input type="text" name="image" v-model="image.value.value" />
        <small v-if="image.errorMessage.value"> {{ image.errorMessage.value }}</small>
      </div>

      <div class="flex flex-col mb-10">
        <label class="mb-5">*Prix</label>
        <input type="number" name="price" v-model="price.value.value" />
        <small v-if="price.errorMessage.value"> {{ price.errorMessage.value }}</small>
      </div>

      <div class="flex flex-col mb-20">
        <label class="mb-5">*Description</label>
        <textarea
          type="text"
          name="description"
          v-model="(description.value.value as string)"
        ></textarea>
        <small v-if="description.errorMessage.value"> {{ description.errorMessage.value }}</small>
      </div>

      <div class="flex flex-col mb-20">
        <label class="mb-5">*Catégorie</label>
        <select name="category" v-model="category.value.value">
          <option value>Choisir une catégorie</option>
          <option value="desktop">Desktop</option>
          <option value="gamer">Gamer</option>
          <option value="streaming">Streaming</option>
        </select>
        <small v-if="category.errorMessage.value"> {{ category.errorMessage.value }}</small>
      </div>
      <button class="btn btn-primary" :disabled="isSubmitting">Valider</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 500px;
  font-size: 13px;
}

.btn-primary {
  align-self: self-end;
}
</style>
