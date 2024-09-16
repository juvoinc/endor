<template>
  <fwb-button @click="showModal"> Novo Empréstimo </fwb-button>

  <fwb-modal v-if="isShowModal" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg">Novo empréstimo</div>
    </template>
    <template #body>
      <ListComponent />
      <PurchaseSuccessful v-if="purchaseSuccess" :purchase="purchase" />
    </template>
    <template #footer>
      <fwb-button @click="createLoan" class="bg-green-600"> Confirmar </fwb-button>
      <fwb-button @click="closeModal" class="bg-red-600"> Cancelar </fwb-button>
    </template>
  </fwb-modal>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import ListComponent from '@/components/products/ListComponent.vue'
import PurchaseSuccessful from '@/components/PurchaseSuccessful.vue'
import { usePurchaseStore } from '@/stores/purchase_store'
import { useProductsStore } from '@/stores/products_store'
import { ref } from 'vue'
import { FwbButton, FwbModal } from 'flowbite-vue'

const purchaseStore = usePurchaseStore()
const productsStore = useProductsStore()

const { purchase, createPurchase } = purchaseStore

const purchaseSuccess = computed(() => purchaseStore.purchaseSuccess)

const isShowModal = ref(false)

const closeModal = () => {
  isShowModal.value = false
}

const showModal = () => {
  isShowModal.value = true
}

const createLoan = () => {
  if (productsStore.selectedProduct) {
    createPurchase(productsStore.selectedProduct)
  }
}
</script>
