"use client"

import React from 'react';
import Image from 'next/image';
import arrow from '../../public/arrow-in-eclips.svg'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination , A11y} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import arrowBlack from '../../public/arrow-eclipce-black.svg'
import { NavigationBtns } from './NavigationBtns';

export const CardSlider = () => {
  return (
    <>
    <div className="section-three__nav">
        <h1 className="section-three__title" id="section__three"> {"{Популярные курсы}"} </h1>
    </div>
    <Swiper
        slidesPerView={3}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
    >
    <NavigationBtns />
    <SwiperSlide className="card__one">
        <div className="card-one__sub">
            <div className="card-one__date">
                6 месяцев
            </div>
            <div className="card-one__link">
                <Link
                href={'#'}
                >
                    <Image 
                    src={arrow}
                    alt='arrow'
                    />

                </Link>
            </div>
        </div>
        <div className="card-one__content">
            <div className="card-one__title">
                <p>Аналитик данных</p>
            </div>
            <div className="card-one__description">
                <p>Освойте анализ данных и современные инструменты, чтобы повысить свою карьеру и стать востребованным специалистом.</p>
            </div>
        </div>
    </SwiperSlide>
    
    <SwiperSlide className="card__two">
        <div className="card-two__sub">
            <div className="card-two__date">
                8 месяцев
            </div>
            <div className="card-two__link">
                <Link
                href={'#'}
                >
                    <Image 
                    src={arrow}
                    alt='arrow'
                    />

                </Link>
            </div>
        </div>
        <div className="card-two__content">
            <div className="card-two__title">
                <p>Специалист по ИИ</p>
            </div>
            <div className="card-two__description">
                <p>Изучите машинное обучение и ИИ, создавайте передовые модели и алгоритмы, чтобы стать экспертом в одной из  быстрорастущих отраслей.</p>
            </div>
        </div>
    </SwiperSlide>

    <SwiperSlide className="card__three">
        <div className="card-three__sub">
            <div className="card-three__date">
                12 месяцев
            </div>
            <div className="card-three__link">
                <Link
                href={'#'}
                >
                    <Image 
                    src={arrow}
                    alt='arrow'
                    />

                </Link>
            </div>
        </div>
        <div className="card-three__content">
            <div className="card-three__title">
                <p>Менеджер проектов</p>
            </div>
            <div className="card-three__description">
                <p>Изучите управление проектами, планирование и координацию команд для успешной реализации проектов в срок и в рамках бюджета.</p>
            </div>
        </div>
    </SwiperSlide>

    <SwiperSlide className="card__four">
        <div className="card-four__sub">
            <div className="card-four__date">
                1 месяцев
            </div>
            <div className="card-four__link">
                <Link
                href={'#'}
                >
                    <Image 
                    src={arrow}
                    alt='arrow'
                    />

                </Link>
            </div>
        </div>
        <div className="card-four__content">
            <div className="card-four__title">
                <p>Финансовый аналитик</p>
            </div>
            <div className="card-four__description">
                <p>Научитесь анализировать финансовые данные, прогнозировать тенденции и принимать обоснованные инвестиционные решения.</p>
            </div>
        </div>
    </SwiperSlide>

    <SwiperSlide className="card__five">
        <div className="card-five__content">
            <Image 
            src={arrowBlack}
            alt='arrow'
            />
            <div className="card-five__text">
                <h1>Не нашли подходящий курс?</h1>
                <p>Откройте полный список наших программ обучения и найдите идеальный путь к вашему профессиональному успеху.</p>
            </div>
        </div>
    </SwiperSlide>
    
    </Swiper>
    </>
  );
};