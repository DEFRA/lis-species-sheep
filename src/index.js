import { breeds } from './breeds.js'

export const species = {
  id: 'sheep',
  label: 'Sheep',
  summary: 'Shared behaviour and wording for sheep journeys.'
}

export const comboBreeds = [
  { value: null, text: null },
  ...breeds.map(({ code, name }) => ({ value: code, text: name }))
]
