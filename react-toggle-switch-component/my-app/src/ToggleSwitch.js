import { useState } from 'react';
import './ToggleSwitch.css';

export default function ToggleSwitch() {
  const [toggle, setToggle] = useState('false');
  const switchText = toggle ? 'ON' : 'OFF';

  function activateSwitch() {
    setToggle(!toggle);
  }

  return (
    <div className="wrapper">
      <div className={`slider ${switchText}`}>
        <button
          className={`toggle ${switchText}`}
          onClick={activateSwitch}></button>
      </div>
      <p>{switchText}</p>
    </div>
  );
}
