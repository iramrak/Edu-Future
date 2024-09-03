"use client"

import Image from 'next/image';
import left from '../../public/arrow-left.svg'
import right from '../../public/arrow-right.svg'
import { useSwiper } from 'swiper/react';

export const NavigationBtns = () => {
  const swiper = useSwiper();
  return ( 
    <div className='navigation-btns'>
    <button onClick={() => swiper.slidePrev()}>
        <div className='btn-one'>
            <Image 
            src={right}
            alt='left'
            />
        </div>
    </button>

    <button onClick={() => swiper.slideNext()}>
        <div className='btn-two'>
            <Image 
            src={left}
            alt='right'
            />
        </div>
    </button>
    </div>
  );
}