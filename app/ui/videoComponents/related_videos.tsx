import React from 'react';

interface Video {
  id: string;
  title: string;
  profileImage: string;
}

interface RelatedVideosProps {
  videos: Video[];
}

const RelatedVideos: React.FC<RelatedVideosProps> = ({ videos }) => {
  return (
    <div>
      <h2>Related Videos</h2>
      <ul>
        {videos.map((video) => (
          <li
            key={video.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <img
              src={video.profileImage}
              alt={`${video.title} profile`}
              style={{
                width: '70px', // Tamaño más grande
                height: '70px', // Tamaño más grande
                marginRight: '10px',
              }}
            />
            <span
              style={{
                color: 'white', // Color blanco
                fontWeight: 'bold', // Texto en negrita
              }}
            >
              {video.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedVideos;
