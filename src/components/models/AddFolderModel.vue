<template>
  <BaseModel @hide="$emit('hide')" header="Add Folder">
    <form>
      <InputText class="w-full" placeholder="File Name" type="text" v-model="value" />
    </form>
  </BaseModel>
</template>

<script setup>
import BaseModel from './BaseModel.vue'
import { ref } from 'vue'

const value = ref('')
defineOptions({
  name: 'AddFolderModel'
})
</script>
