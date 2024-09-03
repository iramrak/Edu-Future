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
          <h1>Широкий выбор курсов <br /> и направлений</h1>
          <Image 
          src={first}
          alt='pen'
          />
          
        </div>
        <div className="section-two__second">
          <h1>Современные технологии и методы обучения</h1>
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
          <h1>Собственный уникальный сервис для удобного обучения</h1>
        </div>
        <div className="section-two__fourth">
          <h1>Профессиональные и знающие своего дела учителя</h1>
          <Image 
          src={man}
          alt='man'
          />
        </div>
        <div className="section-two__fifth">
            <h1>Поддержка студентов на каждом этапе</h1>
            <Image 
            src={chat}
            alt='chat'
            />
        </div>
    </>
  )
}