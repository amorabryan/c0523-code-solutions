import { useState } from 'react';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleEvent(event) {
    event.preventDefault();
    const inputPassword = event.target.value;
    if (inputPassword.length === 0) {
      setError('A password is required.');
    } else if (inputPassword.length < 8) {
      setError('Your password is too short.');
    } else {
      setError('');
    }
    setPassword(inputPassword);
  }

  return (
    <form>
      <div>
        <label>Password</label>
      </div>
      <div className="password-input">
        <input
          type="password"
          name="password"
          value={password}
          onInput={handleEvent}
          required
        />{' '}
        {error && <i className="fas fa-times error"></i>}
        {!error && password.length >= 8 && (
          <i className="fas fa-check verified"></i>
        )}
      </div>
      <p className="error">{error}</p>
    </form>
  );
}
