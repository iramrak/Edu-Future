import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import arrow from '../../public/arrow-in-eclips.svg'
import one from '../../public/card-bg-one.png'
import two from '../../public/card-bg-two.png'
import three from '../../public/card-bg-three.png'


export const SectionSeven = () => {
  return (
    <>
        <div className="section-seven__card-one">
            <Link href={'#'}>
                <Image 
                src={one}
                alt='bg1'
                width={493}
            />
            </Link>
            <div className="section-seven__text">
                <p>Как правильно выбрать онлайн-курс?</p>
            </div>
        </div>
        <div className="section-seven__card-two">
            <Link href={'#'}>
                <Image 
                src={two}
                alt='bg1'
                width={493}
                />
            </Link>
            <div className="section-seven__text">
                <p>Советы по управлению временем для студентов</p>
            </div>
        </div>
        <div className="section-seven__card-three">
            <Link href={'#'}>
                <Image 
                src={three}
                alt='bg1'
                width={493}
                />
            </Link>
            <div className="section-seven__text">
                <p>Как стать автором курсов в EduFuture?</p>
            </div>
        </div>
    </>
  );
};