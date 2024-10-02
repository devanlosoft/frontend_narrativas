import React from 'react';
import Image from 'next/image';

export default function ContentType() {
  return (
    <div className="flex flex-row place-content-center space-x-12 py-4">
      <div className="card glass w-96 bg-sky-500">
        <figure>
          <Image
            width={400}
            height={200}
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Videos</h2>
          <p>Política, ideología, seguridad y diversos temas.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>

      <div className="card glass w-96 bg-sky-500">
        <figure>
          <Image
            width={400}
            height={200}
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Podcast</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>

      <div className="card glass w-96 bg-sky-500">
        <figure>
          <Image
            width={400}
            height={200}
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Infografias</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
