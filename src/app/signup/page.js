// pages/SignUp.js
'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
     
    try { 
    const signupResponse = await axios.post('/api/auth/register', { email, password })
    console.log(signupResponse)

      const res = await signIn('credentials', { 
        email: signupResponse.data.email,
        password: password,
        redirect: false,
      }); 

      if (res?.ok) return router.push('/dashboard');

        console.log(res)
      } catch (error) {
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
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSignUp}>
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
          type="submit"
          className="w-full bg-red-200 text-white font-bold py-2 px-4 rounded mb-2"
        >
          Sign Up
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