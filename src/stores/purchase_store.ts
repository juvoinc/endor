import { ref } from 'vue'
import { defineStore } from 'pinia'
import { sendPurchase } from '@/services/dt_service'

export const usePurchaseStore = defineStore(
  'purchase',
  () => {
    const purchase = ref({})
    const purchaseSuccess = ref(false)
    const createPurchase = async (productId: String) => {
      try {
        const response = await sendPurchase(productId)
        purchase.value = response.data
        purchaseSuccess.value = true
        console.log(purchase.value)
      } catch (error) {
        purchaseSuccess.value = false
        console.error('Error fetching Purchases:', error)
      }
    }
    return { purchase, purchaseSuccess, createPurchase }
  },
  {
    persist: true
  }
)
