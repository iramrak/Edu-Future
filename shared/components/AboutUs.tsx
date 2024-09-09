import React from 'react'
import Image from 'next/image'
import first from '../../public/section-two-first-img.png'
import bord from '../../public/section-two-bord.png'
import line from '../../public/section-two-line.svg'
import man from '../../public/sectoin-two-four-man.png'
import chat from '../../public/section-two-five.png'
export const AboutUs = () => {
  return (
    <>
        <div className="section-two__first">
          <p>Широкий выбор курсов <br /> и направлений</p>
          <Image 
          src={first}
          alt='pen'
          />
          
        </div>
        <div className="section-two__second">
          <p>Современные технологии и методы обучения</p>
        </div>
        <div className="section-two__third">
          <Image 
          src={bord}
          alt='bord'
          />
          <div className="line">
            <Image 
            src={line}
            alt='line'
            />
            <p>80%</p>
          </div>
          <p>Собственный уникальный сервис для удобного обучения</p>
        </div>
        <div className="section-two__fourth">
          <p>Профессиональные и знающие своего дела учителя</p>
          <Image 
          src={man}
          alt='man'
          />
        </div>
        <div className="section-two__fifth">
            <p>Поддержка студентов на каждом этапе</p>
            <Image 
            src={chat}
            alt='chat'
            />
        </div>
    </>
  )
}