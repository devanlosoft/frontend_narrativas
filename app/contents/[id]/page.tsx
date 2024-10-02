'use client';
import Button from '@/app/ui/contents/button';
import FileInput from '@/app/ui/contents/file_input';
import InputForm from '@/app/ui/contents/form_input';
import SelectForm from '@/app/ui/contents/form_layout';
import React, { useState } from 'react';

export default function Page() {
  const [formData, setFormData] = useState({
    title: 'prueba',
    state: false,
    description: 'prueba',
    content_type: 'video',
    imagen: null as File | null, // Inicializar imagen como null o File
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      title: e.target.value,
    });
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      description: e.target.value,
    });
  };

  const handleStateChange = (newValue: boolean) => {
    setFormData({
      ...formData,
      state: newValue,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files && e.target.files.length > 0) {
      selectedFile({
        selectedFile: e.target.files[0],
      });
      console.log('FormData:', formData);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      // Verificar si el valor es de tipo string o Blob antes de agregarlo al FormData
      if (typeof value === 'string' || value instanceof Blob) {
        formDataToSend.append(key, value);
      }
    });

    try {
      const response = await fetch(
        `http://localhost:3001/narrativas/uploadImage`,
        {
          method: 'POST',
          body: selectedFile,
        },
      );

      if (response.ok) {
        // Manejar el éxito
        console.log('Formulario enviado exitosamente');
      } else {
        // Manejar el error
        console.error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <div className="container relative mx-auto mt-10 grid grid-rows-5 rounded-lg bg-white  px-10">
      <form id="form" onSubmit={handleSubmit}>
        <div className="my-5">
          <label
            htmlFor="title"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Titulo
          </label>
          <InputForm name="title" onChange={handleTitleChange} />
        </div>

        <div className="mb-5">
          <label
            htmlFor="description"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Descripción
          </label>
          <InputForm name="description" onChange={handleDescriptionChange} />
        </div>

        <div className="mb-5">
          <SelectForm name="state" onChange={handleStateChange} />
        </div>

        <div className="mb-5">
          <FileInput name="image" onChange={handleImageChange} />
        </div>

        <Button
          onClick={function (
            event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
          ): void {
            console.log(formData);
          }}
        />
      </form>
    </div>
  );
}
