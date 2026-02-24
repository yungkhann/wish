import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../assets/gallery/gallery-img1.jpg";
import img2 from "../assets/gallery/gallery-img2.jpg";
import img3 from "../assets/gallery/gallery-img3.png";
import img4 from "../assets/gallery/gallery-img4.jpg";
import img5 from "../assets/gallery/gallery-img5.jpg";
import img6 from "../assets/gallery/gallery-img8.png";
import type { Lang } from "../i18n/ui";
import { getLangFromCookieClient, useTranslations } from "../i18n/utils";

const images = [img1, img2, img3, img4, img5, img6];

const Gallery = ({ lang: langProp }: { lang?: Lang }) => {
  const lang = langProp ?? getLangFromCookieClient();
  const t = useTranslations(lang);

  return (
    <div className="flex w-full flex-col items-center px-4 py-16 md:px-12">
      <h2 className="mb-10 text-center font-['Marcellus'] text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
        {t("gallery.title")}
      </h2>
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
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
        .gallery-swiper .swiper-pagination {
          position: relative;
          margin-top: 1rem;
          padding-bottom: 0.5rem;
        }
        .gallery-swiper .swiper-pagination-bullet {
          width: 4px;
          height: 4px;
          background: #7204BB !important;
          opacity: 0.5;
        }
        .gallery-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.25);
        }
      `}</style>
    </div>
  );
};

export default Gallery;
