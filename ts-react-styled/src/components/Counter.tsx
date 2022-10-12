import { useRecoilState, useRecoilValue } from 'recoil'
import styled from 'styled-components'
import { countState, doubleCountState } from '~/store/demo'

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
  const [count, setCount] = useRecoilState(countState)
  const doubleCount = useRecoilValue(doubleCountState)
  const increment = () => setCount((count) => count + 1)
  const decrement = () => setCount((count) => count - 1)
  return (
    <Wrapper>
      <p>count: {count}</p>
      <p>doubleCount: {doubleCount}</p>
      <Button onClick={increment}>+</Button>
      <Button className="ml" onClick={decrement}>
        -
      </Button>
    </Wrapper>
  )
}

export default Counter
