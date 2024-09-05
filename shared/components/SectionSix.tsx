import React from 'react';
import plus from '../../public/plus.svg'
import Image from 'next/image';

export const SectionSix = () => {
  return (
    <>
        <div className="section-six__one">
            <p>Какие курсы предлагает EduFuture?</p>
            <Image 
            src={plus}
            alt='plus'
            />
        </div>
        <div className="section-six__two">
            <p>Можно ли учиться в удобное для меня время?</p>
            <Image 
            src={plus}
            alt='plus'
            />
        </div>
        <div className="section-six__three">
            <p>Дают ли сертификаты по окончании курса?</p>
            <Image 
            src={plus}
            alt='plus'
            />
        </div>
        <div className="section-six__four">
            <p>Как я могу записаться на курс?</p>
            <Image 
            src={plus}
            alt='plus'
            />
        </div>
        <div className="section-six__five">
            <p>Какую поддержку я получу во время обучения?</p>
            <Image 
            src={plus}
            alt='plus'
            />
        </div>
        <div className="section-six__six">
            <p>Можно вернуть деньги, если курс не понравится?</p>
            <Image 
            src={plus}
            alt='plus'
            />
        </div>
    </>
  );
};