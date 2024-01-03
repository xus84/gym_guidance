// pages/SignUp.js
'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Validar que se haya ingresado un correo electrónico y una contraseña
    if (email === '' || password === '') {
      // Mostrar un mensaje de error o realizar alguna acción en caso de campos vacíos
      return;
    }

    // Aquí puedes implementar la lógica para registrar al usuario
    // utilizando la dirección de correo electrónico y contraseña proporcionados

    // Ejemplo de cómo guardar los datos del usuario en el localStorage
    const user = {
      email,
      password// Puedes agregar más propiedades del usuario si es necesario
    };

    localStorage.setItem('user', JSON.stringify(user));

    setEmail('');
    setPassword('');


    router.push('/login')

    // Realizar alguna acción adicional, como redirigir a otra página o mostrar un mensaje de éxito
    console.log('User registered successfully:', user.email, user.password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-red-200">
      <div className="bg-gray-100 p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
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
          onClick={handleSignUp}
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
      </div>
    </div>
  );
}