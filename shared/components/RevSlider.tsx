"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination , A11y} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import userone from '../../public/section-five__rew-one.png'
import usertwo from '../../public/section-five__rew-two.png'
import userthree from '../../public/section-five__rew-three.png'
import { NavigationBtns } from './NavigationBtns';

export const RevSlider = () => {
  return (
    <>
    <div className="section-five__nav" id="section__five">
        <h1 className="section-five__title"> Что студенты думают о <span>EduFuture?</span></h1>
    </div>
    <Swiper
    slidesPerView={3}
    modules={[Navigation, Pagination, A11y]}
    spaceBetween={20}>
        <SwiperSlide className='rev__one'> 
            <div className="user__one">
                <Image 
                src={userone}
                alt='userone'
                />
              <p>Иван Смирнов</p>
            </div>
            <div className="section-five__des">
            Обучение на EduFuture стало для меня <br /> настоящим открытием. Удобная платформа,<br /> качественные курсы и постоянная поддержка преподавателей — все это помогло мне достичь новых высот в карьере
            </div>
        </SwiperSlide>
        <SwiperSlide className='rev__two'> 
            <div className="user__two">
                <Image 
                src={usertwo}
                alt='usertwo'
                />
              <p>Алексей Кузнецов</p>
            </div>
            <div className="section-five__des">
              Программа по кибербезопасности была <br />очень информативной и полезной. <br /> Преподаватели — настоящие<br /> профессионалы своего дела, а материалы <br /> всегда актуальны и интересны.
            </div>
        </SwiperSlide>
        <SwiperSlide className='rev__three'> 
            <div className="user__three">
                <Image 
                src={userthree}
                alt='userthree'
                />
              <p>Иван Смирнов</p>
            </div>
            <div className="section-five__des">
            Обучение на EduFuture стало для меня <br /> настоящим открытием. Удобная платформа,<br /> качественные курсы и постоянная поддержка преподавателей — все это помогло мне достичь новых высот в карьере
            </div>
        </SwiperSlide>
        <SwiperSlide className='rev__four'> 
            <div className="user__four">
                <Image 
                src={userone}
                alt='userone'
                />
              <p>Тайлер Дёрнул</p>
            </div>
            <div className="section-five__des">
            Обучение на EduFuture оказалось для меня настоящим откровением. <br /> Удобный интерфейс платформы <br /> поддержка преподавателей помогли мне достичь значительных успехов в карьере
            </div>
        </SwiperSlide>
        <SwiperSlide className='rev__one'> 
            <div className="user__one">
                <Image 
                src={userone}
                alt='userone'
                />
              <p>Иван Смирнов</p>
            </div>
            <div className="section-five__des">
            Обучение на EduFuture стало для меня <br /> настоящим открытием. Удобная платформа,<br /> качественные курсы и постоянная поддержка преподавателей — все это помогло мне достичь новых высот в карьере
            </div>
        </SwiperSlide>
        <NavigationBtns />
    </Swiper>
    </>
  );
};