//import { useState } from "react";
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    };
    const resetCount = () => {
        setCount(0);
    };
    const mincCount = () => {
        setCount(count - 1)
    };
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>Counter: {count}</h1>
          <button onClick={incrementCount}>Increment</button>
          <button onClick={mincCount}>Minc</button>
          <button onClick={resetCount}>Reset</button>
        </div>
      );      
};
export default Counter;