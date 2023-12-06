<template>
  <BaseModel @confirm="$emit('add-folder', value)" @hide="$emit('hide')" header="Add Folder">
    <div>
      <InputText class="w-full" placeholder="File Name" type="text" v-model="value" />
    </div>
  </BaseModel>
</template>

<script setup>
import BaseModel from './BaseModel.vue'
import { ref } from 'vue'
defineEmits(['add-folder'])
const value = ref('')
defineOptions({
  name: 'AddFolderModel'
})
</script>
