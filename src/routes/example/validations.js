import Validator from 'validatorjs'

const store = ({ body }) => {
  const rules = {
    name: 'required'
  }

  return new Validator(body, rules)
}

export default {
  store
}
