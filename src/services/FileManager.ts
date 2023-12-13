import { type FileInterface } from '../constants/types'
import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { sortFilesAndFolders } from '../utils/utils'

interface FileManagerInterace {
  addFile: (file: FileInterface) => void
  updateFile: (file: FileInterface) => void
  deleteFile: (file: FileInterface) => void
}
class FileManager implements FileManagerInterace {
  files: Ref<FileInterface[]> = ref([
    { id: 1, type: 'folder', title: 'Folder 1', extension: 'folder' },
    { id: 2, type: 'file', title: 'File1', extension: 'word' }
  ])
  sortedFiles: Ref<FileInterface[]>
  constructor() {
    this.sortedFiles = computed<FileInterface[]>(() => {
      return [...sortFilesAndFolders(fileManager.files.value)]
    })
  }

  addFile(file: FileInterface): void {
    this.files.value = [...this.files.value, file]
  }
  updateFile(file: FileInterface): void {
    this.files.value = this.files.value.map((f) => (f.id == file.id ? file : f))
  }

  deleteFile(file: FileInterface): void {
    this.files.value = this.files.value.filter((f) => f.id != file.id)
  }
  deleteAll(): void {
    this.files.value = []
  }
  searchFiles(name: string): void {
  
    console.log(name);
    
    this.files.value.filter((f) => f.title.includes(name))
  }
}
const fileManager = new FileManager()

export default fileManager
