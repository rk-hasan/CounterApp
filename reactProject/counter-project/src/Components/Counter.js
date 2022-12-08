import React, { useState } from 'react';

export default function Counter() {
    let [count, Setcount] = useState(0);
    const handleIncriment = ()=>{
        Setcount(count + 1)
    }
    const handleDecriment = ()=>{
        Setcount(count - 1)
    }
    const handleReset = ()=>{
        Setcount(count = 0)
    }
  return (
    <div className='container'>
        <div className='box'>
            <h1>Count: {count}</h1>
            <button className='btn-1' onClick={handleIncriment}>+</button>
            <button className='btn-2' onClick={handleDecriment} disabled={count === 0 ? true : false}>-</button>
            <div className='reset-box'>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    </div>
  )
}
