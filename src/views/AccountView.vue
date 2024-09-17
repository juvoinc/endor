<template>
  <main>
    <fwb-button @click="getAccountInfo" class="bg-green-600"> Ver informações da conta </fwb-button>
    <h1>{{ accountData.current_rank.name }}</h1>
    <p>Pontuação atual: {{ accountData.points }}</p>
    <h1>{{ accountData.next_rank.name }}</h1>
    <fwb-tabs v-model="activeTab" class="p-5">
      <fwb-tab v-for="rank in accountData.ranks" :name="rank.name" :title="rank.name">
        <p>Pontuação inicial: {{ rank.start_points }}</p>
        <p>Pontuação final: {{ rank.end_points || '-' }}</p>
      </fwb-tab>
    </fwb-tabs>
  </main>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useAccountStore } from '@/stores/account_store'
import { ref } from 'vue'
import { FwbButton, FwbTab, FwbTabs } from 'flowbite-vue'

const activeTab = ref('first')
const accountStore = useAccountStore()
const { accountData, fetchAccount } = accountStore

const getAccountInfo = () => {
  fetchAccount()
}
</script>
