import { describe, expect, it } from 'vitest'

import { breeds } from '../src/breeds.js'
import { comboBreeds, species } from '../src/index.js'

describe('species', () => {
  it('exports the sheep metadata', () => {
    expect(species).toEqual({
      id: 'sheep',
      label: 'Sheep',
      summary: 'Shared behaviour and wording for sheep journeys.'
    })
  })
})

describe('comboBreeds', () => {
  it('starts with an empty option', () => {
    expect(comboBreeds[0]).toEqual({ value: null, text: null })
  })

  it('maps every breed to a combo-box option', () => {
    expect(comboBreeds.slice(1)).toEqual(
      breeds.map(({ code, name }) => ({ value: code, text: name }))
    )
  })
})
