import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getAccountDetails } from '@/services/dt_service'

export const useCustomerStore = defineStore(
  'customer',
  () => {
    const balance = ref(0)
    const msisdn = ref('')
    const fetchAccountDetails = async () => {
      try {
        const response = await getAccountDetails()
        console.log(response)
      } catch (error) {
        console.error('Error fetching account details:', error)
      }
    }

    return { balance, msisdn, fetchAccountDetails }
  },
  {
    persist: true
  }
)
