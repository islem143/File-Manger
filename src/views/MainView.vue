<template>
  <div class="main flex justify-content-center align-items-center">
    <div class="container shadow-8 border-round-md flex flex-column justify-content-start">
      <Toolbar @showModel="showModel" class="toolbar" />
      <div class="p-5">
        <Files :files="files"></Files>
      </div>
      <component
        @add-folder="addFolder"
        @upload-file="uploadFile"
        @hide="hideModel"
        :is="currentModel"
      ></component>
    </div>
  </div>
  <Toast />
</template>

<script setup>
import Toolbar from '../components/Toolbar.vue'
import AddFolderModel from '../components/models/AddFolderModel.vue'
import UploadFileModel from '../components/models/UploadFileModel.vue'
import Files from '../components/Files.vue'
import { ref, watch } from 'vue'
import { useToast } from 'primevue/usetoast'
import { sortFilesAndFolders } from '../utils/utils'
const toast = useToast()
let id = ref(2)
const show = (detail) => {
  toast.add({ severity: 'success', summary: 'Info', detail, life: 3000 })
}
const map = {
  AddFolderModel,
  UploadFileModel
}

let files = ref([
  { id: 1, type: 'folder', title: 'Folder 1', extension: 'folder' },
  { id: 2, type: 'file', title: 'File1', extension: 'word' }
])

watch(files.value, (files) => {
  files = [...sortFilesAndFolders(files)]
})
const addFolder = (name) => {
  id.value = id.value + 1
  files.value.push({ id: id.value, type: 'folder', title: name, extension: 'folder' })
  show('Folder Added')
}
const uploadFile = () => {
  files.value.push({ type: 'file', title: 'File', extension: 'pdf' })
  show('File uploaded')
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
  width: 80vw;
  min-height: 70vh;
  background: var(--gray-100);
}
.toolbar {
  height: 80px;
}
</style>
