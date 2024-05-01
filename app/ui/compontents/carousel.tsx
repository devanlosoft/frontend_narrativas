// components/Carousel.js
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { v4 as uuidv4 } from 'uuid';
import Card from './card';

export default function Carousel () {
  const carouselItems = [
    {
      image:
        'https://img.freepik.com/foto-gratis/papel-pintado-gatito-lindo-fantasia_1409-6188.jpg',
      title: 'Tiempo, más allá del reloj',
      description: 'descripcion para imagen 1',
      button_url: 'facebook.com'
    },
    {
      image: 'https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg',
      title: 'Formas de relacionamiento con el rio',
      description: 'Una vision mas alla del barrio',
      button_url: 'x.com'
    },
    {
      image:
        'https://media.es.wired.com/photos/6501e7429fa9000811a95fe8/16:9/w_2240,c_limit/Adobe%20Firefly.jpeg',
      title: 'Titulo para imagen 3',
      description: 'descripcion para imagen 3',
      button_url: 'instagram.com'
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 13000,
  };

  return (
    <div>
      <div className="carousel-wrapper relative">
        <Slider {...settings}>
          {carouselItems.map((item, index) => (
            <div key={uuidv4()} className="h-screen">
              <Card
                imageUrl={item.image}
                title={item.title}
                description={item.description}
                buttonUrl={item.button_url}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
