'use client';
import Navbar from './ui/compontents/navbar';
import Carousel from './ui/compontents/carousel';
import Footer from './ui/compontents/footer';
import LastedContent from './ui/compontents/lasted_content';

export default function Page() {
  return (
    <div className="overflow-hidden">
      <Navbar />

      <Carousel />

      <LastedContent />

      <Footer />
    </div>
  );
}
