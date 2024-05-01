'use client';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { title } from 'process';

interface FormState {
  title: string;
  description: string;
  state: boolean;
}

const Page: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState<FormState>({
    title: '',
    description: '',
    state: false,
  });
  const [param, setParam] = useState<string>('');

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  // Función para subir el archivo y el formulario al servidor
  // Función para subir el archivo y el formulario al servidor
  // Función para subir el archivo y el formulario al servidor
  const upload = async () => {
    try {
      const dataToSend = {
        title: formData.title,
        description: formData.description,
        state: formData.state,
      };

      const formDataToSend = new FormData();
      formDataToSend.append('imagen', file!);
      formDataToSend.append('data', JSON.stringify(dataToSend));

      console.log(dataToSend);
      console.log(file);
      console.log(param);

      //enviar formulario al servidor
      await axios.post(
        `http://localhost:3001/narrativas/formulario/${parametro}`,
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
    } catch (err) {
      console.log(err);
    }
  };

  // Función para manejar el cambio de los inputs de texto
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Función para manejar el cambio del select
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      state: e.target.value === 'true',
    });
  };

  return (
    <div className="grid grid-cols-6 gap-4 p-4 shadow-xl">
      {/* Input de texto para el título */}
      <div className="col-span-4 col-start-2">
        <input
          type="text"
          name="title"
          placeholder="Titulo del contenido"
          className="input input-bordered input-accent w-full"
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>

      {/* Input de texto para la descripción */}
      <div className="col-span-4 col-start-2">
        <input
          type="text"
          name="description"
          placeholder="Descripción del contenido"
          className="input input-bordered input-accent w-full"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>

      {/* Select para el estado */}
      <div className="col-span-4 col-start-2">
        <select
          name="state"
          className="select select-accent w-full"
          value={formData.state.toString()}
          onChange={handleSelectChange}
        >
          <option disabled value="">
            Quieres publicarlo enseguida?
          </option>
          <option value="true">Si</option>
          <option value="false">No</option>
        </select>
      </div>

      {/* Input de archivo para la imagen */}
      <div className="col-span-4 col-start-2">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>
            Arrastra y suelta un archivo aquí, o haz clic para seleccionar un
            archivo.
          </p>
          {file && <div>{file.name}</div>}
        </div>
      </div>

      {/* Botón para enviar el formulario */}
      <div className="col-span-4 col-start-2">
        <button
          className="btn btn-secondary w-full text-white"
          onClick={upload}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Page;
