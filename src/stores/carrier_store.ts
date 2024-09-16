import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCarrierStore = defineStore('carrier', () => {
  const carrier = ref('')

  const setCarrier = (value) => {
    carrier.value = value
  }

  return { carrier, setCarrier }
}, { 
  persist: true,
})
