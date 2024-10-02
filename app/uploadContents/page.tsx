'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FieldValues, useForm } from 'react-hook-form';
import Image from 'next/image';
import { FaHome } from 'react-icons/fa';

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectedImage, setSelectedImage] = useState<string | undefined>();
  const [selectedVideo, setSelectedVideo] = useState<string | undefined>();
  const [categorias, setCategorias] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          'https://backendnarrativas-production.up.railway.app/narrativas/categories',
        );
        console.log('categorias', response.data.category);
        setCategorias(response.data.category);
      } catch (err) {
        console.log('error de conexion al servidor', err);
      }
    };

    getCategories();
  }, []);

  const upload = async (onSubmit: FieldValues) => {
    setIsLoading(true);
    try {
      const {
        title,
        description,
        categoria,
        state,
        content_type,
        file,
        video,
      } = onSubmit;
      const dataToSend = {
        title: title,
        description: description,
        categoria: categoria,
        state: state === 'true',
        content_type: content_type,
      };

      const formDataToSend = new FormData();
      formDataToSend.append('file', file[0]);
      if (video && video.length > 0) {
        formDataToSend.append('video', video[0]);
      }
      formDataToSend.append('data', JSON.stringify(dataToSend));

      console.log('imagen', file[0]);
      if (video && video.length > 0) {
        console.log('video', video[0]);
      }

      const response = await axios.post(
        'https://backendnarrativas-production.up.railway.app/narrativas/formulario',
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      console.log('response', response);

      // Redirigir a la página de inicio después de la carga
    } catch (err) {
      console.log('error de conexion al servidor', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files?.[0]
      ? setSelectedImage(URL.createObjectURL(e.target.files[0]))
      : setSelectedImage(undefined);
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files?.[0]
      ? setSelectedVideo(URL.createObjectURL(e.target.files[0]))
      : setSelectedVideo(undefined);
  };

  return (
    <div className="grid grid-cols-6 gap-4">
      <nav className="col-span-6 grid grid-cols-2 bg-blue-500 p-5">
        <FaHome className="justify-self-start text-2xl text-white" />
        <h1 className="justify-self-end text-2xl text-white">
          Formulario subir contenido
        </h1>
      </nav>

      {isLoading ? (
        <div className="col-span-6 flex items-center justify-center">
          <p>Cargando...</p>
        </div>
      ) : (
        <form
          className="col-span-4 col-start-2 "
          onSubmit={handleSubmit((onSubmit) => {
            upload(onSubmit);
          })}
        >
          <div className="col-span-4 col-start-2 ">
            <span className="font-semibold">
              Escribe el titulo del contenido
            </span>
            <input
              {...register('title', { required: 'this is requires' })}
              aria-invalid={errors.title ? 'true' : 'false'}
              className="input input-bordered input-accent w-full"
            />
            {errors.title?.type === 'required' && (
              <p className="text-red-500" role="alert">
                Debes llenar el campo de título
              </p>
            )}
          </div>

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
            />
            {errors.description?.type === 'required' && (
              <p className="text-red-500" role="alert">
                Debes llenar el campo de descripción
              </p>
            )}
          </div>

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

          <div className="col-span-4 col-start-2 mt-5">
            <span className="font-semibold">Sube una imagen</span>
            <input
              type="file"
              {...register('file', { required: true })}
              onChange={handleImageChange}
              className="mt-2"
            />
            {selectedImage ? (
              <div className="mt-2">
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

          <div className="col-span-4 col-start-2 mt-5">
            <span className="font-semibold">Sube un video</span>
            <input
              type="file"
              {...register('video', { required: true })}
              onChange={handleVideoChange}
              className="mt-2"
            />
            {selectedVideo ? (
              <div className="mt-2">
                <video
                  src={selectedVideo}
                  controls
                  className="h-32 w-32 object-cover"
                />
              </div>
            ) : (
              <p>
                {errors.video?.type === 'required' && (
                  <p className="text-red-500" role="alert">
                    Debes seleccionar un video
                  </p>
                )}
              </p>
            )}
          </div>

          <div className="col-span-4 col-start-2 mt-5">
            <span className="font-semibold">
              Deseas que tu contenido se publique instantaneamente?
            </span>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Si</span>
                <input
                  type="radio"
                  {...register('state', { required: true, minLength: 4 })}
                  className="radio checked:bg-red-500"
                  value="true"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">No</span>
                <input
                  type="radio"
                  {...register('state', { required: true })}
                  className="radio checked:bg-blue-500"
                  value={'false'}
                />
              </label>
            </div>
            {errors.state?.type === 'required' && (
              <p className="text-red-500" role="alert">
                Debes seleccionar una opción
              </p>
            )}
          </div>

          <div className="col-span-4 col-start-2 mt-5">
            <input
              className="btn btn-secondary w-full text-white"
              type="submit"
            />
          </div>
        </form>
      )}
    </div>
  );
}
