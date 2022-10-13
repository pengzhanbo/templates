import { observer } from 'mobx-react'
import styled from 'styled-components'
import { count } from '~/store/demo'

const Wrapper = styled.div`
  padding: 1rem;
`

const Button = styled.button`
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  background-color: blue;
  color: white;
  border: none;

  &.ml {
    margin-left: 0.5rem;
  }
`

function Counter() {
  const doubleCount = count.count * 2
  return (
    <Wrapper>
      <p>count: {count.count}</p>
      <p>doubleCount: {doubleCount}</p>
      <Button onClick={() => count.increment()}>+</Button>
      <Button className="ml" onClick={() => count.decrement()}>
        -
      </Button>
    </Wrapper>
  )
}

export default observer(Counter)
