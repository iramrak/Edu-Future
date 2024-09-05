"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination , A11y} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const RevSlider = () => {
  return (
    <>
    <div className="section-five__nav">
        <h1 className="section-five__title"> Что студенты думают о <span>EduFuture?</span></h1>
    </div>
    <Swiper
    slidesPerView={3}
    modules={[Navigation, Pagination, A11y]}
    spaceBetween={20}>
        <SwiperSlide>
            
        </SwiperSlide>
    </Swiper>
    </>
  );
};