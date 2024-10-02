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
      description:
        'El Sinú es uno de los tres ríos más importantes de Córdoba, pasa por 17 municipios en un recorrido total de 415 kilómetros. Conecta de sur a norte a la ciudad de Montería, allí ha adquirido mayor relevancia debido las fallas del transporte público convencional.',
      button_url: 'https://rutasdelconflicto.com/rios-vida-muerte/rios/r-o',
    },
    {
      image:
        'https://colombiabellezapura.com/wp-content/uploads/2023/05/Rio-Sinu-Monteria.jpg',
      title: 'Montería',
      description:
        'Montería es una ciudad del norte de Colombia. Es conocida por su cultura ganadera y los planchones (balsas techadas) que transportan a los pasajeros a través del río Sinú.',
      button_url:
        'https://res.cloudinary.com/dtquyqxyl/video/upload/v1727889983/public/stp6olv9d3umzfpbazfa.mp4',
    },
    {
      image:
        'https://web.comisiondelaverdad.co/media/zoo/images/Galeria-Monteria-3_0169181a3f2f74110410e2ad92d1cb0c.jpg',
      title: 'Los planchones',
      description:
        'Por las aguas del río Sinú, en Montería, navegan embarcaciones artesanales que transportan a los habitantes de una orilla a otra. Estas mismas aguas llevan consigo la historia de décadas de conflicto armado.',
      button_url:
        'https://res.cloudinary.com/dtquyqxyl/video/upload/v1727889983/public/stp6olv9d3umzfpbazfa.mp4',
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
