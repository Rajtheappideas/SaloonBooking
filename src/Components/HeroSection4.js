import React, { useState } from "react";
import styled from "styled-components";
import img1 from "../assets/hair&beauty.jpg";
import img2 from "../assets/blush&blow.jpg";
import img3 from "../assets/universal hair.jpg";
import img4 from "../assets/spa.jpg";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import LazyLoad from "react-lazyload";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

const data = [
  {
    id: 1,
    img: img1,
    name: "Jawed Hair & Beauty",
  },
  {
    id: 2,
    img: img2,
    name: "Blush & Blow",
  },
  {
    id: 3,
    img: img3,
    name: "universal Hair & Beauty",
  },
  {
    id: 4,
    img: img4,
    name: "Nevya spa",
  },
  {
    id: 5,
    img: img2,
    name: "universal Hair & Beauty",
  },
  {
    id: 6,
    img: img4,
    name: "Nevya spa",
  },
  {
    id: 7,
    img: img3,
    name: "universal Hair & Beauty",
  },
  {
    id: 8,
    img: img4,
    name: "Nevya spa",
  },
  {
    id: 9,
    img: img1,
    name: "Jawed Hair & Beauty",
  },
  {
    id: 10,
    img: img3,
    name: "universal Hair & Beauty",
  },
];
const HeroSection4 = () => {
  return (
    <div className="p-20" style={{ backgroundColor: "#ebebeb" }}>
      <div className="text-center mb-8 ">
        <div className="font-semibold tracking-wider relative inline-block uppercase text-2xl">
          our popular pro
          <Underline className="mt-4" />
        </div>
      </div>
      {/* <div className="flex justify-center items-center text-center h-52 w-full  p-40">
        <Swiper
          spaceBetween={30}
          freeMode={true}
          slidesPerView={4}
          navigation={true}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.img} alt={item.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}

      {/* <div className="flex mx-auto"> */}
      {/* <div className="flex items-center justify-start">
          <button className="hover:animate-pulse mx-2 " onClick={prevImage}>
            <FaChevronCircleLeft size={30} />
          </button>
        </div> */}

      {/* <div className="grid lg:grid-cols-4 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-4 items-center text-center w-full h-40"> */}
      <div className="flex justify-center items-center text-center w-full p-16">
        <Swiper
          spaceBetween={10}
          // freeMode={true}
          slidesPerView={3}
          // centeredSlides={true}
          autoplay={true}
          navigation={true}
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className="w-full">
              <img
                src={item.img}
                alt={item.name}
                className="object-cover object-center w-full h-48"
              />
              <p className="w-full bg-gray-300 p-1">{item.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className="flex items-center justify-end">
          <button className="hover:animate-pulse mx-2" onClick={nextImage}>
            <FaChevronCircleRight size={30} />
          </button>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default HeroSection4;

const Underline = styled.p`
  ::after {
    content: "";
    position: absolute;
    background: #000;
    bottom: 0%;
    left: calc(40% - 10%);
    height: 4px;
    width: 40%;
  }
`;
