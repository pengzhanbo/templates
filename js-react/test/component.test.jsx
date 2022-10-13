import React from 'react'
import renderer from 'react-test-renderer'
import { describe, expect, it } from 'vitest'
import Counter from '../src/components/Counter'

describe('Counter.tsx', () => {
  it('should render', () => {
    const component = renderer.create(<Counter />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
