import slugger from 'slugger'

const gen = (title, id) => {
  const idLength = id.length
  if (id) {
    const idString = id.toString().substr(12, idLength)
    return `${slugger(title)}-${idString}`
  } else {
    return slugger(title)
  }
}

export default {
  gen
}
