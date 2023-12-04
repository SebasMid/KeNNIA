"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert("Las contraseñas no coinciden");
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
    });

    if (res.ok) {
      router.push('/auth/login');
    }
    console.log(res);
  });

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500">
      <div className="flex justify-center items-center flex-grow">
        <div className="bg-white p-6 rounded-md shadow-md w-full sm:w-96">
          <form onSubmit={onSubmit}>
            <h1 className="text-gray-800 font-bold text-4xl mb-4 text-center">Registrarse</h1>

            <label htmlFor="username" className="text-gray-700 mb-2 block text-sm">
              Usuario:
            </label>
            <input
              type="username"
              {...register("username", {
                required: {
                  value: true,
                  message: "Usuario es requerido",
                },
              })}
              className="p-3 rounded block mb-2 bg-gray-200 text-gray-800 w-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Usuario"
            />
            {errors.username && (
              <span className="text-red-500">{errors.username.message}</span>
            )}

            <label htmlFor="email" className="text-gray-700 mb-2 block text-sm">
              Email:
            </label>
            <input
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "El email es requerido",
                },
              })}
              className="p-3 rounded block mb-2 bg-gray-200 text-gray-800 w-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="usuario@dominio.com"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}

            <label htmlFor="password" className="text-gray-700 mb-2 block text-sm">
              Contraseña:
            </label>
            <input
              type="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "La contraseña es requerida",
                },
              })}
              className="p-3 rounded block mb-2 bg-gray-200 text-gray-800 w-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="***"
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}

            <label
              htmlFor="confirmPassword"
              className="text-gray-700 mb-2 block text-sm"
            >
              Confirmar contraseña
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Este apartado es requerido",
                },
              })}
              className="p-3 rounded block mb-2 bg-gray-200 text-gray-800 w-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="***"
            />
            {errors.confirmPassword && (
              <span className="text-red-500">{errors.confirmPassword.message}</span>
            )}

            <button className="w-full bg-orange-600 text-white p-3 rounded-lg mt-2 transition duration-300 ease-in-out transform hover:scale-105">
              Registrar
            </button>
          </form>
        </div>
      </div>
      <footer className="bg-black text-center p-4 text-sm text-gray-500 mt-auto">
        Creado por Sebastian Abdala Asencio y Juan Diego Martinez Causil | Universidad de Cartagena | Todos los derechos reservados © 2023
      </footer>
    </div>
  );
}

export default RegisterPage;
