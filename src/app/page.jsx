import React from 'react';

function HomePage() {
  return (
    <>
      <section className="h-[calc(100vh-7rem)] flex justify-center items-center bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500">
        <div className="text-center p-8 rounded-lg bg-white w-1/2 shadow-lg">
          <h1 className="text-gray-800 text-4xl md:text-5xl font-bold mb-4">¡Bienvenido a Kennia!</h1>
          <p className="text-gray-700 text-sm md:text-base">
            Kennia es nuestra inteligencia artificial de última generación, especializada en la clasificación de imágenes de animales. Utiliza tecnología avanzada para identificar y categorizar diferentes especies. ¡Explora el fascinante reino animal con Kennia!
          </p>
          <div className="mt-6">
            <a
              href="/auth/register"
              className="text-orange-500 hover:underline transition duration-300 transform hover:scale-105"
            >
              Descubre más
            </a>
            <svg className="h-4 w-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </section>
      <footer className="text-center mt-8 text-sm text-gray-500">
        <p>
          Creado por Sebastian Abdala Asencio y Juan Diego Martinez Causil |
          Universidad de Cartagena | Todos los derechos reservados &copy; 2023
        </p>
      </footer>
    </>
  );
}

export default HomePage;