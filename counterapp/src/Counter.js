import React, { useState } from "react";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import './counter.css'



function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

    return (
      <div className={`container text-center justify-content-center align-content-center`}>
      <h1>Counter</h1>
    <div className={`border border-5 py-5 border-black`}>
      <p>Count: { count }</p>
      <button onClick={ increment }>Click to increase</button>
      <button onClick={ decrement }>Click to decrease</button>

    </div>
    </div>
  );
}

export default Counter;
