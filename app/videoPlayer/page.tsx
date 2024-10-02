'use client';

import Footer from '../ui/compontents/footer';
import Navbar from '../ui/compontents/navbar';
import RelatedVideos from '../ui/videoComponents/related_videos';
import VideoPlayer from '../ui/videoComponents/video_player';

export default function VideoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900">
      <Navbar />
      <main className="relative flex flex-grow flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://www.laguiademonteria.co/wp-content/uploads/2015/07/rio-sinu-Monteria.jpg"
            alt="Background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative z-10 mx-auto mt-16 flex w-full max-w-5xl flex-col space-y-6 rounded-lg bg-gray-800 bg-opacity-80 p-8 shadow-2xl">
          <VideoPlayer
            cloudinaryVideoId={'gq0ud5ppzokod4h7ecqe'}
            title={'El rio sinú'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.'
            }
          />
          <RelatedVideos
            videos={[
              {
                id: '1',
                title: 'Sample Video',
                profileImage:
                  'https://burbujapolitica.com/wp-content/uploads/2024/02/IMG-20240211-WA0019.jpg',
              },
              {
                id: '2',
                title: 'Sample Video',
                profileImage:
                  'https://burbujapolitica.com/wp-content/uploads/2024/02/IMG-20240211-WA0019.jpg',
              },
              {
                id: '3',
                title: 'Sample Video',
                profileImage:
                  'https://burbujapolitica.com/wp-content/uploads/2024/02/IMG-20240211-WA0019.jpg',
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
