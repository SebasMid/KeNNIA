"use client"; // Usaremos el interpreter del navegador
import { useForm } from "react-hook-form"; //Importamos de react-hook https://react-hook-form.com/
import { useRouter } from "next/navigation"; 


// creamos una funcion para la pagina de registro
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
        router.push('/auth/login')
    }
    console.log(res);
  });

  //respuesta de nuestra funcion, aqui se almacena todo lo que queremos en la pagina
  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={onSubmit} className="w-1/4">
        <h1 className="text-slate-200 font-bold text-4xl mb-4">Registrarse</h1>

        <label htmlFor="username" className="text-slate-500 mb-2 block text sm">
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
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300
          w-full"
          placeholder="Usuario"
        />
        {errors.username && (
          <span className="text-red-500">{errors.username.message}</span>
        )}

        <label htmlFor="email" className="text-slate-500 mb-2 block text sm">
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
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300
          w-full"
          placeholder="usuario@dominio.com"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}

        <label htmlFor="password" className="text-slate-500 mb-2 block text sm">
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
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300
          w-full"
          placeholder="*******"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}

        <label
          htmlFor="confirmPassword"
          className="text-slate-500 mb-2 block text sm"
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
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300
          w-full"
          placeholder="*******"
        />
        {errors.confirmPassword && (
          <span className="text-red-500">{errors.confirmPassword.message}</span>
        )}

        <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
          Registrar
        </button>
      </form>
    </div>
  );
}
export default RegisterPage;
