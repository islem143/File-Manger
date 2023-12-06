<template>
  <BaseModel @confirm="$emit('upload-file', file)" header="Upload File">
    <form class="">
      <FileUpload
        mode="basic"
        name="demo[]"
        url="/api/upload"
        accept="image/*"
        :maxFileSize="1000000"
      />
    </form>
  </BaseModel>
</template>

<script setup>
import BaseModel from './BaseModel.vue'
</script>
