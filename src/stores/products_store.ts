import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getProducts } from '@/services/dt_service'

export const useProductsStore = defineStore(
  'product',
  () => {
    const products = ref([])
    const selectedProduct = ref('')
    const fetchProducts = async () => {
      try {
        const response = await getProducts()
        products.value = response.data[0].categories[0].subcategories[0].products
        console.log(products.value)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    const setSelectedProduct = (productId: string) => {
      selectedProduct.value = productId
    }

    return { products, selectedProduct, setSelectedProduct, fetchProducts }
  },
  {
    persist: true
  }
)
