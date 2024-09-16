<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useCustomerStore } from '@/stores/customer_store'
  const customerStore = useCustomerStore()

  onMounted(() => {
    customerStore.fetchAccountDetails()
  })
</script>

<template>
  <div>
  </div>
</template>
