import React from 'react';
import { useState } from 'react';

const Button = () => {
const [count, setCOunt]= useState(0)

const increment = ()=>{
  setCOunt(count + 1)
}

const decrement = ()=>{
  setCOunt(count - 1)
}

const reset = ()=>{
  setCOunt("")
}

  return (
    <div>
      <span>{count}</span>
      <button onClick={increment}>Click me</button>
      <button onClick={decrement}>unclick me</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Button;

