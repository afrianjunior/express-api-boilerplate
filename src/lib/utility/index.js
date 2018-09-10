import slugger from 'slugger'
const simpliFileName = (text) => {
  if (text) {
    // TODO: nanti harus pakai regex untuk misahin mime type
    let splitMimeType = text.split('.')
    let fileSlug = slugger(splitMimeType[0])
    return `${fileSlug}.${splitMimeType[1]}`
  }

  throw new Error('text not found')
}

const simpliFileNameCompress = (text, mimeType) => {
  if (text) {
    // TODO: nanti harus pakai regex untuk misahin mime type
    let splitMimeType = text.split('.')
    let fileSlug = slugger(splitMimeType[0])
    return `${fileSlug}.${mimeType}`
  }

  throw new Error('text not found')
}

export default {
  simpliFileName,
  simpliFileNameCompress
}
