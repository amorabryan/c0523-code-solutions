import { useState } from 'react';

export default function CounterButton() {
  const [count, setCount] = useState(0);
  function handleDecrement() {
    setCount(count - 1);
  }
  function handleIncrement() {
    setCount(count + 1);
  }
  return (
    <div className="counter">
      <button onClick={handleDecrement}>Down</button>
      <p>{count}</p>
      <button onClick={handleIncrement}>Up</button>
    </div>
  );
}
