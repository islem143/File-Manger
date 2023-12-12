<template>
  <nav
    style="width: 100%"
    class="p-1 shadow-4 flex border-round-md cursor-pointer align-items-center surface-200"
  >
    <div v-tooltip.top="'Home'" class="p-2 border-round-md hover:surface-300">
      <i class="pi pi-fw pi-home text-3xl" />
    </div>
    <div v-tooltip.top="'Refresh'" class="p-2 border-round-md hover:surface-300">
      <i class="pi pi-fw pi-refresh text-3xl" />
    </div>
    <InputText class="mx-1" placeholder="Search..." type="text" />

    <div
      @click="$emit('show-model', 'AddFolderModel')"
      class="p-2 border-round-md hover:surface-300"
    >
      <i v-tooltip.top="'Add Folder'" class="pi pi-fw pi-folder text-3xl"> </i>
    </div>
    <div
      @click="$emit('show-model', 'UploadFileModel')"
      class="p-2 border-round-md hover:surface-300"
    >
      <i v-tooltip.top="'Add File'" class="pi pi-fw pi-file text-3xl"> </i>
    </div>
  </nav>
</template>

<script setup>
defineEmits(['show-model'])

</script>

<style scoped></style>
