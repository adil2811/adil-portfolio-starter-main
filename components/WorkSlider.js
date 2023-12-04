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
          title: "Ecommerce front 1",
          path: "/thumb1.png",
          link: "https://www.yourchoiceee.com/", // Add the link for this box

        },
        {
          title: "Ecommerce front 2",
          path: "/thumb2.png",
          link: "https://www.yourchoiceee.com/", // Add the link for this box

        },
        {
          title: "Ecommerce front 3",
          path: "/t3.png",
          link: "https://www.yourchoiceee.com/", // Add the link for this box

        },
        {
          title: "Ecommerce front 4",
          path: "/thumb4.png",
          link: "https://www.yourchoiceee.com/", // Add the link for this box

        },
      ],
    },
    {
      images: [
        {
          title: "Admin page 1",
          path: "/a1.png",
          link: "https://www.yourchoiceee.com/", // Add the link for this box

        },
        {
          title: "Admin page 2",
          path: "/a2.png",
          link: "https://www.yourchoiceee.com/", // Add the link for this box

        },
        {
          title: "Admin page 3",
          path: "/a3.png",
          link: "https://www.yourchoiceee.com/", // Add the link for this box

        },
        {
          title: "Admin page 4",
          path: "/a4.png",
          link: "https://www.yourchoiceee.com/", // Add the link for this box

        },
      ],
    },
    {
      images: [
        {
          title: "Netflix clone 1",
          path: "/N1.png",
          link: "https://www.yourchoiceee.com/", // Add the link for this box

        },
        {
          title: "Netflix clone 2",
          path: "/N2.png",
          link: "https://www.yourchoiceee.com/", // Add the link for this box

        },
        {
          title: "Netflix clone 3",
          path: "/N3.png",
          link: "https://www.yourchoiceee.com/", // Add the link for this box

        },
        {
          title: "Netflix clone 4",
          path: "/N4.png",
          link: "https://www.yourchoiceee.com/", // Add the link for this box

        },
      ],
    },
    {
      images: [
        {
          title: "MPH 1",
          path: "/mph1.png",
          link: "https://www.yourchoiceee.com/", // Add the link for this box

        },
        {
          title: "MPH 2",
          path: "/mph2.png",
          link: "https://www.yourchoiceee.com/", // Add the link for this box

        },
        {
          title: "MPH 3",
          path: "/mph3.png",
          link: "https://www.yourchoiceee.com/", // Add the link for this box

        },
        {
          title: "MPH 4",
          path: "/mph4.png",
          link: "https://www.yourchoiceee.com/", // Add the link for this box

        },
      ],
    },
    {
      images: [
        {
          title: "what 1",
          path: "/what1.png",
          link: "https://www.yourchoiceee.com/", // Add the link for this box

        },
        {
          title: "what 2",
          path: "/what2.png",
          link: "https://www.yourchoiceee.com/", // Add the link for this box

        },
        {
          title: "what 3",
          path: "/what3.png",
          link: "https://www.yourchoiceee.com/", // Add the link for this box

        },
        {
          title: "what 4",
          path: "/what4.png",
          link: "https://www.yourchoiceee.com/", // Add the link for this box

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
                    href={image.link} // Use the link from the data
                    className="text-[13px] tracking-[0.2em]"
                  >
{image.title} 
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
