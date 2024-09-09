import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import vk from '../../public/vk.svg';
import tg from '../../public/tg.svg';
import inst from '../../public/inst.svg';

export const Footer = () => {
  return (
    <footer>
    <div className="footer__content">
            <div className="footer__title">
                <h1>EduFuture</h1>
                <div className="footer__info">
                    <p>info@edufuture.com</p>
                    <div className="info__contacts">
                        <div className="vk">
                            <Image 
                            src={vk}
                            alt='vk'
                            />
                        </div>
                        <div className="tg">
                            <Image 
                            src={tg}
                            alt=''
                            />
                        </div>
                        <div className="inst">
                            <Image 
                            src={inst}
                            alt='vk'
                            />
                        </div>
                    </div>
                </div>
            </div>
        <div className="footer__rew-two">
            <div className="footer__about">
                <div className="footer-about__first">
                    <Link href={'#'}>
                       <p>О нас</p>
                       <p>О платформе</p>
                       <p>Стоимость</p>
                       <p>Все курсы</p>
                    </Link>
                </div>
                <div className="footer-about__second">
                    <Link href={'#'}>
                        <p>Автор курсов</p>
                        <p>Наши соц сети</p>
                        <p>Отзывы</p>
                        <p>Вопросы и ответы</p>
                    </Link>
                </div>
            </div>
            <div className="footer__btns">
                <Link href={'#'}>
                    <div className="footer__btn">
                        <p>Написать нам</p>
                    </div>
                </Link>
                
                <Link href={'#'}>
                    <div className="footer__btn">
                        <p>Перейти в платформу</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
    </footer>
  );
};