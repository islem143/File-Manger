<template>
  <div class="main flex justify-content-center align-items-center">
    <div class="container shadow-8 border-round-md flex flex-column justify-content-start">
      <Toolbar
        @showModel="showModel"
        :searchValue="search"
        @search="handleSearch"
        class="toolbar"
      />
      <div class="p-5">
        <Files
          :files="files"
          @set-current-file="setCurrentFile"
          :currentSelectedFile="currentSelectedFile"
          @delete-file="deleteFile"
        ></Files>
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

<script setup lang="ts">
import Toolbar from '../components/Toolbar.vue'
import AddFolderModel from '../components/models/AddFolderModel.vue'
import UploadFileModel from '../components/models/UploadFileModel.vue'
import Files from '../components/Files.vue'
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'
import { SELECTION_STATE, type FileInterface } from '../constants/types'
import type { Ref } from 'vue'
import { type ModelsType } from '../constants/types'

import FileManager from '../services/FileManager'

const toast = useToast()
let id = ref(2)
let search = ref('')
const currentSelectedFile: Ref<FileInterface | null> = ref(null)
const show = (detail: string) => {
  toast.add({ severity: 'success', summary: 'Info', detail, life: 3000 })
}
const map = {
  AddFolderModel,
  UploadFileModel
}
const files = FileManager.sortedFiles
function deleteFile(type: number) {
  switch (type) {
    case SELECTION_STATE['NONE']:
      break
    case SELECTION_STATE['CURRENT']:
      if (currentSelectedFile.value) {
        FileManager.deleteFile(currentSelectedFile.value)
      }
      break
    case SELECTION_STATE['ALL']:
      FileManager.deleteAll()
      break
  }
}
const addFolder = (name: string) => {
  id.value = id.value + 1
  FileManager.addFile({
    id: id.value,
    type: 'folder',
    title: name,
    extension: 'folder'
  })

  show('Folder Added')
}
const uploadFile = (file: FileInterface) => {
  console.log(file)

  FileManager.addFile(file)
  show('File uploaded')
}

const handleSearch = (name: string) => {
  //search.value = name.target.value

  
  FileManager.searchFiles(name.target.value)
}

const setCurrentFile = (file: FileInterface) => {
  currentSelectedFile.value = file
}
const currentModel = ref(null)
const showModel = (type: ModelsType) => {
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
