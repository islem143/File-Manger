interface SelectionInterface {
  NONE: number
  CURRENT: number
  SELECTED: number
  ALL: number
}

export const SELECTION_STATE: SelectionInterface = {
  NONE: 0,
  CURRENT: 1,
  SELECTED: 2,
  ALL: 3
}
const FILE_TYPES = ['folder', 'file'] as const
type FileTypes = (typeof FILE_TYPES)[number]
const EXTENSIONS = ['folder', 'txt', 'pdf', 'word', 'excel'] as const
type Extensions = (typeof EXTENSIONS)[number]
const MODELS_TYPE = ['UploadFileModel', 'AddFolderModel'] as const
export type ModelsType = (typeof MODELS_TYPE)[number]

export interface FileInterface {
  id: number
  type: FileTypes
  title: string
  extension: Extensions
}
