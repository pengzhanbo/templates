import styles from './index.module.scss'

function Counter() {
  const [count, setCount] = useState(1)
  const doubleCount = count * 2
  const increment = () => setCount((count) => count + 1)
  const decrement = () => setCount((count) => count - 1)
  return (
    <div className={styles.wrapper}>
      <p>count: {count}</p>
      <p>doubleCount: {doubleCount}</p>
      <button className={styles.btn} onClick={increment}>
        +
      </button>
      <button className={`${styles.btn} ${styles.ml}`} onClick={decrement}>
        -
      </button>
    </div>
  )
}

export default Counter
