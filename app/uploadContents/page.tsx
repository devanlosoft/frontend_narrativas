'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FieldValues, useForm } from 'react-hook-form';
import Image from 'next/image';
import { FaHome } from 'react-icons/fa'; // Importa el icono que quieras usar
// import { v4 as uuidv4 } from 'uuid';

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectedImage, setSelectedImage] = useState<string | undefined>();
  const [categorias, setCategorias] = useState([]);

  //funcion para llamar al servidor para traer las categorias una unica vez al cargar la pagina
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3001/narrativas/categories',
        );
        console.log('categorias', response.data.category);
        setCategorias(response.data.category); // Almacenamos los datos en el estado
      } catch (err) {
        console.log('error de conexion al servidor', err);
      }
    };

    getCategories(); // Llamamos a la función al cargar la página
  }, []); // Array de dependencias vacío

  // Función para subir el archivo y el formulario al servidor
  const upload = async (onSubmit: FieldValues) => {
    try {
      const { title, description, categoria, state, content_type, file } =
        onSubmit;
      const dataToSend = {
        title: title,
        description: description,
        categoria: categoria,
        state: state === 'true',
        content_type: content_type,
      };

      const formDataToSend = new FormData();
      formDataToSend.append('file', file[0]);
      formDataToSend.append('data', JSON.stringify(dataToSend));

      console.log('imagen', file[0]);

      //enviar formulario al servidor
      await axios.post(
        'http://localhost:3001/narrativas/formulario',
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
    } catch (err) {
      console.log('error de conexion al servidor', err);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files?.[0]
      ? setSelectedImage(URL.createObjectURL(e.target.files[0]))
      : setSelectedImage(undefined);
  };

  return (
    <div className="grid grid-cols-6 gap-4">
      <nav className="col-span-6 grid grid-cols-2 bg-blue-500 p-5">
        <FaHome className="justify-self-start text-2xl text-white" />
        <h1 className="justify-self-end text-2xl text-white">
          Formulario subir contenido
        </h1>
      </nav>

      <form
        className="col-span-4 col-start-2 "
        onSubmit={handleSubmit((onSubmit) => {
          upload(onSubmit);
        })}
      >
        {/* Input de texto para el título */}
        <div className="col-span-4 col-start-2 ">
          <span className="font-semibold">Escribe el titulo del contenido</span>
          <input
            {...register('title', { required: 'this is requires' })}
            aria-invalid={errors.title ? 'true' : 'false'}
            className="input input-bordered input-accent w-full"
            //value={formData.title}
            // onChange={handleInputChange}
          />
          {errors.title?.type === 'required' && (
            <p className="text-red-500" role="alert">
              Debes llenar el campo de título
            </p>
          )}
        </div>
        {/* Input de texto para la descripción */}
        <div className="col-span-4 col-start-2 mt-5">
          <span className="font-semibold">
            Escribe la descripcion del contenido
          </span>
          <input
            type="text"
            {...register('description', {
              required: 'Este campo es requerido',
              minLength: {
                value: 4,
                message: 'El tamaño mínimo son 4 caracteres',
              },
            })}
            className="input input-bordered input-accent w-full"
            //value={formData.description}
            //onChange={handleInputChange}
          />
          {errors.description?.type === 'required' && (
            <p className="text-red-500" role="alert">
              Debes llenar el campo de descripción
            </p>
          )}
        </div>

        {/* Select para la categoria del contenido */}
        <div className="col-span-4 col-start-2 mt-5">
          <span className="font-semibold">
            Publicar contenido en la categoria:
          </span>
          <select
            {...register('categoria', {
              required: 'Debes seleccionar una categoria',
            })}
            className="select select-accent w-full"
            defaultValue=""
          >
            <option disabled value="">
              Selecciona una opción
            </option>
            {Array.isArray(categorias) &&
              categorias.map((categoria: { _id: string; title: string }) => (
                <option key={categoria._id} value={categoria._id}>
                  {categoria.title}
                </option>
              ))}
          </select>
          {errors.categoria && (
            <p className="text-red-500" role="alert">
              Debes seleccionar una categoria
            </p>
          )}
        </div>

        {/* Select para el tipo de contenido */}
        <div className="col-span-4 col-start-2 mt-5">
          <span className="font-semibold">
            Selecciona el tipo de contenido a subir
          </span>
          <select
            {...register('content_type', {
              required: 'Debes seleccionar un tipo de contenido',
            })}
            className="select select-accent w-full"
            defaultValue=""
            //value={formData.content_type.toString()}
            //onChange={handleSelectContentChange}
          >
            <option disabled value="">
              Selecciona una opción
            </option>
            <option>video</option>
            <option>podcast</option>
            <option>infografia</option>
          </select>
          {errors.content_type && (
            <p className="text-red-500" role="alert">
              Debes seleccionar un tipo de contenido
            </p>
          )}
        </div>
        {/* Input de archivo para la imagen */}
        <div className="col-span-4 col-start-2 mt-5">
          <input
            type="file"
            {...register('file', { required: true })}
            onChange={handleImageChange}
          />
          {selectedImage ? (
            <div>
              |
              <Image
                src={selectedImage}
                alt="Uploaded Image"
                className="h-32 w-32 object-cover"
                width={800}
                height={500}
              />
            </div>
          ) : (
            <p>
              {errors.file?.type === 'required' && (
                <p className="text-red-500" role="alert">
                  Debes seleccionar una imagen
                </p>
              )}
            </p>
          )}
        </div>
        {/* Radio para el estado */}
        <div className="col-span-4 col-start-2 mt-5">
          <span className="font-semibold">
            Deseas que tu contenido se publique instantaneamente?
          </span>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Si</span>
              <input
                type="radio"
                {...register('state', { required: true, minLength: 4 })} // Registra el radio con React Hook Form y marca como requerido
                className="radio checked:bg-red-500"
                value="true" // Establece el valor del radio
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">No</span>
              <input
                type="radio"
                {...register('state', { required: true })} // Registra el radio con React Hook Form y marca como requerido
                className="radio checked:bg-blue-500"
                value={'false'} // Establece el valor del radio
              />
            </label>
          </div>
          {errors.state?.type === 'required' && (
            <p className="text-red-500" role="alert">
              Debes seleccionar una opción
            </p>
          )}
        </div>
        {/* Botón para enviar el formulario */}
        <div className="col-span-4 col-start-2 mt-5">
          <input
            //onClick={upload}
            className="btn btn-secondary w-full text-white"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}
