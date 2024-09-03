import React from 'react';
import Image from 'next/image';
import woman from '../../public/banner-woman.png'
import Link from 'next/link';

export const Banner = () => {
  return (
    <div className='section-four__content'>
        <div className="section-four-text">
            <h1>Учитесь у лучших <br /> преподавателей мира!</h1>
            <h5>Откройте доступ к знаниям от ведущих специалистов. <br />Получайте качественное обучение на нашей платформе в<br /> удобное для вас время и месте!</h5>
            <Link href='#'>
                  <button className="section-one__btn">Выбрать курс</button>
            </Link>
            <p className='section-four__subtext'>*Нажимая кнопку «Записаться» вы даете согласие на обработку персональных данных</p>
        </div>
        <div className="section-four__woman">
            <Image 
            src={woman}
            alt="woman"
            />
        </div>
    </div>
  );
};