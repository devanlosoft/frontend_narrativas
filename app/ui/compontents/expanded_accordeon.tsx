import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

interface CarouselProps {
  images: string[];
}

const ExpandedAccordion: React.FC<CarouselProps> = ({ images }) => {
  return (
    <div style={{ width: '100vw', overflow: 'hidden' }}>
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`Slide ${index}`}
              layout="responsive"
              width={1920}
              height={1080}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ExpandedAccordion;
