interface Filee {
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
