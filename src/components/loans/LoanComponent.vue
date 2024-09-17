<template>
  <main>
    <fwb-button @click="createLoanRepayment" class="bg-green-600"> Pagar empréstimo </fwb-button>
    <p v-if="repayment.value === 201">Seu pagamento foi agendado com sucesso</p>
  </main>
</template>
<script setup lang="ts">
import { useRepaymentStore } from '@/stores/repayment_store'
import { FwbButton } from 'flowbite-vue'

const repaymentStore = useRepaymentStore()
const { repayment, createRepayment } = repaymentStore

const createLoanRepayment = () => {
  createRepayment()
}
</script>
