import { useState } from 'react';

export default function CounterButton() {
  const [count, setCount] = useState(0);
  function handleClick1() {
    setCount(count - 1);
  }
  function handleClick2() {
    setCount(count + 1);
  }
  return (
    <div className="counter">
      <button onClick={handleClick1}>Down</button>
      <p>{count}</p>
      <button onClick={handleClick2}>Up</button>
    </div>
  );
}
