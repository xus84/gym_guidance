// pages/Login.js
'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes implementar la lógica para iniciar sesión
    // utilizando la dirección de correo electrónico y contraseña proporcionados
  };

  return (
    <div className="flex justify-center items-center h-screen bg-red-200">
      <div className="bg-gray-100 p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mb-2"
        />
        <button
          onClick={handleLogin}
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
      </div>
    </div>
  );
}