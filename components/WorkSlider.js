import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/free-mode"; // Import additional Swiper styles
import "swiper/css/pagination"; // Import pagination styles
import { Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";

// Define your data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title1",
          path: "/thumb1.png",
        },
        {
          title: "title2",
          path: "/thumb2.png",
        },
        {
          title: "title3",
          path: "/t3.png",
        },
        {
          title: "title4",
          path: "/thumb4.png",
        },
      ],
    },
    {
      images: [
        {
          title: "title5",
          path: "/a1.png",
        },
        {
          title: "title6",
          path: "/a2.png",
        },
        {
          title: "title7",
          path: "/a3.png",
        },
        {
          title: "title8",
          path: "/a4.png",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true, // Make pagination clickable
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
              >
                <div className="flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={image.path}
                    width={400}
                    height={400}
                    alt={image.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    {/* Use Link from 'next/link' for client-side navigation */}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={"https://www.yourchoiceee.com/"}
                      className="text-[13px] tracking-[0.2em]"
                    >
                      Live Project
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
