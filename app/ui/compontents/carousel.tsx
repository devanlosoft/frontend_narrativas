// components/Carousel.js
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { v4 as uuidv4 } from 'uuid';
import Card from './card';

export default function Carousel() {
  const carouselItems = [
    {
      image:
        'https://www.laguiademonteria.co/wp-content/uploads/2015/07/rio-sinu-Monteria.jpg',
      title: 'El rio sinu',
      description: 'El Sinú es uno de los tres ríos más importantes de Córdoba, pasa por 17 municipios en un recorrido total de 415 kilómetros. Conecta de sur a norte a la ciudad de Montería, allí ha adquirido mayor relevancia debido las fallas del transporte público convencional.',
      button_url: 'https://rutasdelconflicto.com/rios-vida-muerte/rios/r-o',
    },
    {
      image: 'https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg',
      title: 'Formas de relacionamiento con el rio parte 2',
      description: 'Una vision mas alla del barrio',
      button_url: 'x.com',
    },
    {
      image:
        'https://media.es.wired.com/photos/6501e7429fa9000811a95fe8/16:9/w_2240,c_limit/Adobe%20Firefly.jpeg',
      title: 'Titulo para imagen 3',
      description: 'descripcion para imagen 3',
      button_url: 'instagram.com',
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
}
