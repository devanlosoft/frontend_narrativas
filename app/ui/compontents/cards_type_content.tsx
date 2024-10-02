import React from 'react';

interface CardProps {
  backgroundImage: string;
  type: 'INFOGRAFÍAS' | 'VIDEOS' | 'PODCASTS';
}

const Card: React.FC<CardProps> = ({ backgroundImage, type }) => {
  return (
    <div
      className="card flex items-center justify-center rounded-lg bg-cover bg-center p-4 shadow-lg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="card-content rounded-lg bg-white bg-opacity-100 p-4 text-center">
        <p className="text-lg font-bold text-fuchsia-900">{type}</p>
      </div>
    </div>
  );
};

const CardsContainer: React.FC = () => {
  return (
    <div className="cards-container grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      <Card
        backgroundImage="https://static.vecteezy.com/system/resources/previews/004/829/731/non_2x/phone-in-isometric-view-on-a-purple-background-transparent-screen-various-technological-gadgets-infographics-mobile-vibes-vector.jpg"
        type="INFOGRAFÍAS"
      />
      <Card
        backgroundImage="https://t.ctcdn.com.br/gbO3hsV5DRUS3MYFIL0-vgDJtYk=/640x360/smart/i533291.png"
        type="VIDEOS"
      />
      <Card
        backgroundImage="https://kinsta.com/es/wp-content/uploads/sites/8/2021/11/what-is-a-podcast.jpg"
        type="PODCASTS"
      />
    </div>
  );
};

export default CardsContainer;
