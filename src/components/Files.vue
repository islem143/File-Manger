<template>
  <div class="grid gap-3">
    <FileLayout
      @open-context-menu="openContextMenu"
      class="col-2"
      v-for="f in files"
      :key="f.title"
      :file="f"
    ></FileLayout>
  </div>
  <ContextMenu ref="menu" :model="items" />
</template>

<script setup>
import { ref } from 'vue'
import FileLayout from './FileLayout.vue'
import { SELECTION_STATE } from '../constants/types'
defineProps(['files'])
const emit = defineEmits(['open-context-menu'])
const menu = ref()
const items = ref([
  { label: 'Download', icon: 'pi pi-download' },
  {
    label: 'Delete',
    icon: 'pi pi-times',
    command() {
      emit('delete-file', SELECTION_STATE['CURRENT'])
    }
  }
])
const onRightClick = (event, user) => {
  console.log(event, user)
}

const openContextMenu = (event, file) => {
  emit('set-current-file', file)
  menu.value.show(event)
}
</script>
