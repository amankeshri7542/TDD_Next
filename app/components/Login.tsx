'use client';

import { useState } from 'react';

export function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSignUp = () => {
    // Implement sign-up logic here
  };

  if (isLoggedIn) {
    return (
      <div>
        <p>You are logged in.</p>
      </div>
    );
  }

  return (
    <div>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
      <button type="button" onClick={handleSignUp}>
        Sign up
      </button>
    </div>
  );
}
