<template>
  <div
    @contextmenu="$emit('open-context-menu', $event)"
    class="layout shadow-2 p-2 surface-300 hover:surface-200 cursor-pointer border-round-md flex justify-content-between align-items-center"
  >
    <div class="flex">
      <i
        :class="extension != null ? fileType[extension] : ' ' + ' text-2xl align-self-center mr-2'"
      />
      <p class="text-md align-self-center m-0">{{ title }}</p>
    </div>

    <i class="pi pi-ellipsis-v cursor-pointer grey-300 text-lg" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { icons } from '../constants/icons'
defineProps({ title: String, type: String, extension: String })
defineEmits(['open-context-menu'])
const fileType = ref(icons)
</script>

<style scoped>
.layout {
  /* width: 200px; */
  height: 60px;
}
</style>
