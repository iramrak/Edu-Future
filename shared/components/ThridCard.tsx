import React from 'react';
import Image from 'next/image';
import arrow from '../../public/arrow-in-eclips.svg'

export const ThridCard = () => {
  return (
    <div className='section-one__third-card'>
      <div className='section-one-third__content'>
        <div className='section-one-third__objects'>
          <div className='section-one-third__rew'>
            <div className="section-one-thrid__rew">
                <p>25к+ курсов</p>
            </div>
            <div className="section-one-thrid__rew">
                <p>6 филлалов</p>
            </div>
          </div>
          <div className='section-one-third__arrow'>
            <Image src={arrow} alt='arrow' />
          </div>
        </div>

        <div className='section-one-third__txt'>
            <div className="section-one-third__text">
                <h1>Обучайся бесплатно</h1>
                <p>Перейдите на наш католог и найдите новые возможности <br /> и знания с нашими доступными курсами уже сегодня</p>
            </div>
        </div>
      </div>
    </div>
  );
};