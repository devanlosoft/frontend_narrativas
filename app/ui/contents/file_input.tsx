import React from 'react';

export default function FileInput({ name, onChange }) {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    onChange(selectedFile);
  };

  return (
    <div className="mb-3">
      <div className="mb-2 inline-block text-neutral-500 dark:text-neutral-400">
        Sube una imagen para la miniatura de tu contenido
      </div>
      <input
        className="border-secondary-500 text-surface file:text-surface focus:border-primary focus:shadow-inset relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid bg-transparent bg-clip-padding px-3 py-[0.32rem] text-base font-normal transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid  file:border-inherit file:bg-transparent file:px-3 file:py-[0.32rem] focus:text-gray-700 focus:outline-none dark:border-white/70 dark:text-white  file:dark:text-white"
        type="file"
        id={name}
        name={name}
        onChange={handleFileChange} // Agrega el controlador de eventos onChange
      />
    </div>
  );
}
