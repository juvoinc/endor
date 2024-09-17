<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useCarrierStore } from '@/stores/carrier_store'

const carrierStore = useCarrierStore()
</script>

<template>
  <aside
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-800">
      <ul class="space-y-2 font-medium"></ul>
      <ul class="pt-2 mt-4 space-y-2 font-medium border-t border-gray-700">
        <li></li>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/loans">Pagar Empréstimo</RouterLink>
        </li>
        <li>
          <RouterLink to="/testing">Testing</RouterLink>
        </li>
        <li>
          <RouterLink to="/account">Ver informações da conta</RouterLink>
        </li>
      </ul>
    </div>
  </aside>

  <div class="p-4 sm:ml-64">
    <RouterView />
  </div>
</template>
