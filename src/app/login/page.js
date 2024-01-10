// pages/Login.js
'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn('credentials', { email, password, redirect: false });
    

    if(res?.error) return setError(res.error);

    if(res?.ok) return router.push('/dashboard');

  } 
  catch (error) {
    console.log(error);
  }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-red-200">
      <div className="bg-gray-100 p-8 rounded shadow-md">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className="w-full border border-gray-300 rounded-md p-2 mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full border border-gray-300 rounded-md p-2 mb-2"
        />
        <button
          className="w-full bg-red-200 text-white font-bold py-2 px-4 mb-2 rounded"
        >
          Login
        </button>
        <button
          onClick={() => router.push('/')}
          className="w-full bg-gray-300 text-white font-bold py-2 px-4 rounded"
        >
          Cancel
        </button>
        </form>
      </div>
    </div>
  );
}