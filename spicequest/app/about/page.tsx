'use client'
import Nav from '../Components/Nav';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const AboutPage = () => {
  const images = [
    "../public/carousel/vietnam_pho_bo.jpg",
    "../public/carousel/vietnam_pho_bo_2",
    "../public/carousel/ph_adobo",
    "../public/carousel/balut.jpg"
  ];

  return (
    <div className="bg-gradient-to-t from-gradient2 to-gradient1 w-screen overflow-hidden">
      {/* Header */}
      <Nav />
      
      {/* Main */}
      <div className="text-center flex justify-center items-center py-48 figtree">
        <div className="space-y-12 px-20">
          <p className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl">ABOUT US</p>
          <p className="text-lg md:text-lg lg:text-xl xl:text-2xl font-light">
            SpiceQuest is a Southeast Asian food review hub that aims to introduce the rich flavors and culinary wonders of Southeast Asia to the world. Our platform features delicious dishes from four SEA countries, carefully curated to create the perfect full-course meal. Get ready to indulge in the vibrant flavors of Southeast Asia! 🍜🍛🥢
          </p>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="max-w-4xl mx-auto my-12">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          className="rounded-xl shadow-lg"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Dish ${index + 1}`} className="w-full h-96 object-cover rounded-xl" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AboutPage;
