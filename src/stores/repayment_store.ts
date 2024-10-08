import { ref } from 'vue'
import { defineStore } from 'pinia'
import { sendRepayment } from '@/services/dt_service'

export const useRepaymentStore = defineStore(
  'repayment',
  () => {
    const repayment = ref(0)
    const createRepayment = async () => {
      try {
        const response = await sendRepayment()
        repayment.value = response.status
        console.log(repayment.value)
      } catch (error) {
        console.error('Error fetching Purchases:', error)
      }
    }
    return { repayment, createRepayment }
  },
  {
    persist: true
  }
)
