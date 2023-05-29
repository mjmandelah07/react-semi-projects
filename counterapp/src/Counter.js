import React, { useState } from "react";
import styles from './my-style.module.css'

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

    return (
      <>
      <h1>Counter</h1>
    <div className={styles.counter}>
      <button onClick={ increment }>Click to increase</button>
      <button onClick={ decrement }>Click to decrease</button>
      <p>Count: { count }</p>
    </div>
    </>
  );
}

export default Counter;
