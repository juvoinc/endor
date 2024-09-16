<script setup>
import DeviceMockup from '@/components/DeviceMockup.vue'
import LoanModal from '@/components/LoanModal.vue'
import { useCustomerStore } from '@/stores/customer_store'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <DeviceMockup>
      <RouterView />
    </DeviceMockup>
    <LoanModal />
  </main>
</template>
