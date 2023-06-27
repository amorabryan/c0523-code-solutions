import { useState } from 'react';

export default function ToggleSwitch() {
  const [toggle, setToggle] = useState('false');
  const [switchText, setSwitchText] = useState('OFF');

  function activateSwitch() {
    if (toggle) {
      setSwitchText('ON');
    } else {
      setSwitchText('OFF');
    }
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
