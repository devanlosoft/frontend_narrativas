import React, { useState } from 'react';

interface VideoPlayerProps {
  cloudinaryVideoId: string;
  title: string;
  description: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  cloudinaryVideoId,
  title,
  description,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="video-player-container">
      <div className="video-header">
        <h1 className="video-title">{title}</h1>
        <p className="video-description">{description}</p>
      </div>
      <div className="video-wrapper">
        <video
          className="video-element"
          controls
          src={`https://res.cloudinary.com/dtquyqxyl/video/upload/v1727763725/narrativas/videos/${cloudinaryVideoId}.mp4`}
          autoPlay={isPlaying}
        />
      </div>
      <button className="play-pause-button" onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default VideoPlayer;
