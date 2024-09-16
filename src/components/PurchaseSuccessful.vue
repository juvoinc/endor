<script setup lang="ts"></script>
<template>
  <div class="success-message">
    <p>
      Empréstimo feito com sucesso. Ao pagar esse empréstimo, você terá {{ purchase.points }} pontos
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { usePurchaseStore } from '@/stores/purchase_store'

defineProps({
  purchase: {
    type: Object,
    required: true
  }
})
</script>
