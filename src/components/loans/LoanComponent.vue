<template>
  <main>
    <fwb-button @click="createLoanRepayment" class="bg-green-600"> Pagar empréstimo </fwb-button>
  </main>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import ListComponent from '@/components/products/ListComponent.vue'
import PurchaseSuccessful from '@/components/PurchaseSuccessful.vue'
import { useRepaymentStore } from '@/stores/repayment_store'
import { ref } from 'vue'
import { FwbButton, FwbModal } from 'flowbite-vue'

const repaymentStore = useRepaymentStore()
const { repayment, createRepayment } = repaymentStore

const createLoanRepayment = () => {
  createRepayment()
}
</script>
