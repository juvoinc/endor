<script setup lang="ts"></script>

<template>
  <div class="flex justify-between">
    <ul v-if="products.length" class="space-y-2">
      <li v-for="product in products" :key="product.id" class="flex items-center">
        <input
          type="radio"
          :id="product.id"
          v-model="selectedProduct"
          :value="product.id"
          name="productRadioGroup"
          :disabled="product.status === 'ineligible'"
          required
          class="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500"
        />
        <label :for="product.id" class="ml-2 text-gray-900">
          {{ product.action_text }}
        </label>
      </li>
    </ul>
    <p v-else class="text-gray-600">Loading products...</p>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed } from 'vue'
import { useProductsStore } from '@/stores/products_store'
import { ref } from 'vue'

const productsStore = useProductsStore()
const { products, fetchProducts } = productsStore

onMounted(() => {
  fetchProducts()
})

const selectedProduct = computed({
  get: () => productsStore.selectedProduct,
  set: (value) => productsStore.setSelectedProduct(value)
})
</script>
