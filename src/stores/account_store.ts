import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAccountDetails } from '@/services/dt_service'

export const useAccountStore = defineStore(
  'account',
  () => {
    const accountData = ref({
      current_rank: '',
      next_rank: '',
      level: ''
    })
    const fetchAccount = async () => {
      try {
        const response = await getAccountDetails()
        accountData.value = response.data[0]
        console.log(accountData.value)
      } catch (error) {
        console.error('Error fetching account details:', error)
      }
    }
    return { accountData, fetchAccount }
  },
  {
    persist: true
  }
)
