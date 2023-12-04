"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    console.log(res);
    if (res.error) {
      setError(res.error);
    } else {
      router.push('/dashboard');
      router.refresh();
    }
  });

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500">
      <div className="flex flex-col items-center justify-center flex-grow">
        <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-md mx-auto mt-8">
          {error && (
            <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">{error}</p>
          )}
          <h1 className="text-gray-800 font-bold text-4xl mb-4 text-center">Login</h1>
          <label htmlFor="email" className="text-gray-700 mb-2 block text-sm">
            Email:
          </label>
          <input
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
            })}
            className="p-3 rounded block mb-2 bg-gray-200 text-gray-800 w-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="user@email.com"
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
          <label htmlFor="password" className="text-gray-700 mb-2 block text-sm">
            Password:
          </label>
          <input
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
            className="p-3 rounded block mb-2 bg-gray-200 text-gray-800 w-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="**"
          />
          {errors.password && (
            <span className="text-red-500 text-xs">{errors.password.message}</span>
          )}
          <button className="w-full bg-orange-600 text-white p-3 rounded-lg mt-2 transition duration-300 ease-in-out transform hover:scale-105">
            Login
          </button>
        </form>
      </div>
      <footer className="bg-black text-center p-4 text-sm text-gray-500">
        Creado por Sebastian Abdala Asencio y Juan Diego Martinez Causil | Universidad de Cartagena | Todos los derechos reservados © 2023
      </footer>
    </div>
  );
}

export default LoginPage;
