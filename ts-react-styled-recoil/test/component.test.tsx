import React from 'react'
import renderer from 'react-test-renderer'
import { RecoilRoot } from 'recoil'
import { describe, expect, it } from 'vitest'
import Counter from '../src/components/Counter'

describe('Counter.tsx', () => {
  it('should render', () => {
    const component = renderer.create(
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
