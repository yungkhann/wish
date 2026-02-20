import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../assets/gallery/gallery-img1.jpg";
import img2 from "../assets/gallery/gallery-img2.jpg";
import img3 from "../assets/gallery/gallery-img3.png";
import img4 from "../assets/gallery/gallery-img4.jpg";
import img5 from "../assets/gallery/gallery-img5.jpg";
import img6 from "../assets/gallery/gallery-img6.png";
import img7 from "../assets/gallery/gallery-img7.png";
import img8 from "../assets/gallery/gallery-img8.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Gallery = () => {
  return (
    <div className="flex w-full flex-col items-center px-4 py-16 md:px-12">
      <h2 className="mb-10 text-center font-['Cinzel_Decorative'] text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
        Gallery
      </h2>
      <Swiper
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        spaceBetween={30}
        className="gallery-swiper w-full"
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex h-[220px] items-center justify-center sm:h-[300px] lg:h-[380px]">
              <img
                src={img.src ?? img}
                alt={`Gallery image ${idx + 1}`}
                className="h-[220px] w-full rounded-xl bg-black/40 object-cover sm:h-[300px] lg:h-[380px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style>{`
        .gallery-swiper .swiper-pagination-bullet {
          background: #7204BB !important;

        }
      `}</style>
    </div>
  );
};

export default Gallery;
