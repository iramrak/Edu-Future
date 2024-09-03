import React from 'react';
import Image from 'next/image';
import arrow from '../../public/arrow-in-eclips.svg'
import woman from '../../public/second-card-woman.png'

export const SecondCard = () => {
  return (
    <div className="section-one__second-card">
        <div className="section-one-second__content">
            <div className="section-one-second__two-objects">
                <div className="section-one-second__rew">
                    <p>Отзывы студентов</p>
                </div>
                <div className="section-one-second__arrow">
                    <Image src={arrow} alt="arrow"/>
                </div>
            </div>
            <div className="section-one-second__txt">
                <h2>Что говорят о нас <br />наши студенты </h2>
                <Image
                src={woman}
                alt={"woman"}
                />
            </div>
        </div>
    </div>
  );
};