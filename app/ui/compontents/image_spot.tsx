import React from 'react';
import Image from 'next/image';

export default function ImageSpot() {
  return (
    <div className="grid h-full w-full place-content-center bg-sky-950 py-6">
      <Image
        width={1050}
        height={100}
        alt="Your alt text"
        src={'/banners.png'}
      />
    </div>
  );
}
