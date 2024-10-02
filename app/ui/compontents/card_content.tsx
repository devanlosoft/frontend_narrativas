import React from 'react';

export default function CardContent({
  imageUrl,
  title,
  description,
  buttonUrl,
}: any) {
  return (
    <div className="relative" style={{ backgroundImage: `url(${imageUrl})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Contenedor del contenido */}
      <div className="relative  p-32 text-left text-white">
        {/* Título */}
        <h2 className="text-5xl font-bold lg:text-2xl ">{title}</h2>

        {/* Descripción */}
        <p className="mb-4 mt-4 text-justify text-base font-bold lg:text-xs">
          {description}
        </p>

        {/* Botón */}
        <div className="">
          <a
            href={buttonUrl}
            className="group relative inline-flex items-center justify-start overflow-hidden rounded bg-gray-50 py-3 pl-4 pr-12 font-semibold text-indigo-600 shadow transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6"
          >
            <span className="absolute bottom-0 left-0 h-1 w-full bg-indigo-600 transition-all duration-150 ease-in-out group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="h-5 w-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 -translate-x-12 pl-2.5 duration-200 ease-out group-hover:translate-x-0">
              <svg
                className="h-5 w-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Reproducir
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
