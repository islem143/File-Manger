interface Filee {
  id: number
  type: string
  title: string
  extension: string
}

export const sortFilesAndFolders = (files: Filee[]): any => {
  return files.sort((a, b) => {
    if (a['type'] < b['type']) {
      return 1
    }
    if (a['type'] > b['type']) {
      return -1
    }
    return 0
  })
}

export const deleteFile = (files: Filee[], id: number): any => {
  return files.filter((f) => f.id != id)
}
