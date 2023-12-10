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
defineProps(['files'])
const menu = ref()
const items = ref([
  { label: 'Download', icon: 'pi pi-download' },
  {
    label: 'Delete',
    icon: 'pi pi-times',
    command() {
      console.log('clicked delete')
    }
  }
])
const onRightClick = (event, user) => {
  console.log(event, user)
}

const openContextMenu = (event, file) => {
  console.log(file)
  menu.value.show(event)
}
</script>
