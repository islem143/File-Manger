<template>
  <Dialog
    v-model:visible="visible"
    modal
    dismissableMask
    closeOnEscape
    :header="header"
    :style="{ width: '30rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <slot></slot>
    <template #footer>
      <Button label="Ok" icon="pi pi-check" @click="visible = false" autofocus />
    </template>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue'
defineProps(['header'])

const visible = ref(true)
</script>
