<template>
  <div
    class="layout p-2 surface-300 hover:surface-200 cursor-pointer border-round-md flex justify-content-between align-items-center"
  >
    <div class="flex">
      <i class="pi pi-folder text-2xl align-self-center mr-2" />
      <p class="text-md align-self-center m-0">Folder</p>
    </div>

    <i class="pi pi-ellipsis-v cursor-pointer grey-300 text-lg" />
  </div>
</template>

<script setup></script>

<style scoped>
.layout {
  width: 200px;
  height: 60px;
}
</style>
