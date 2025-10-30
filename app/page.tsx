"use client"

import React, { useState } from "react";


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // basit fake login
    if (email === "test@demo.com" && password === "123456") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("E-posta veya şifre hatalı.");
      setIsLoggedIn(false);
    }
  };

  if (isLoggedIn) {
    return (
      <div className="app">
        <h2 data-testid="dashboard-title">Dashboard</h2>
        <p>Hoş geldin {email}</p>
      </div>
    );
  }

  return (
    <div className="app">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} data-testid="login-form">
        <input
          type="email"
          placeholder="Email"
          className="email-input"
          data-testid="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="password-input"
          data-testid="password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" data-testid="login-button">
          Login
        </button>
      </form>

      {error && (
        <p className="error" data-testid="error-message">
          {error}
        </p>
      )}
    </div>
  );
}

export default App;
