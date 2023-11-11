<template>
  <div class="main flex justify-content-center align-items-center">
    <div class="container border-round-md flex flex-column justify-content-start">
      <Toolbar @showModel="showModel" class="toolbar" />
      <div class="p-5">
        <FileLayout />
      </div>
      <component @hide="hideModel" :is="currentModel"></component>
    </div>
  </div>
</template>

<script setup>
import Toolbar from '../components/Toolbar.vue'
import AddFolderModel from '../components/models/AddFolderModel.vue'
import UploadFileModel from '../components/models/UploadFileModel.vue'
import FileLayout from '../components/FileLayout.vue'
import { ref } from 'vue'
const map = {
  AddFolderModel,
  UploadFileModel
}
const currentModel = ref(null)
const showModel = (type) => {
  currentModel.value = map[type]
}
const hideModel = () => {
  currentModel.value = null
}
</script>

<style scoped>
.main {
  min-height: 100vh;
}
.container {
  min-width: 80vw;
  min-height: 70vh;
  background: var(--gray-100);
}
.toolbar {
  height: 80px;
}
</style>
