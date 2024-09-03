import React from 'react'
import Image from "next/image";
import humans from "../../public/humans.png"
import woman from "../../public/woman.png"
import Link from "next/link"
export const FirstCard = () => {
  return (

          <div className="section-one__main-card">
            <div className="section-one__content">
              <div className="section-one__txt">
                <h1>Онлайн-курсы высшего качества для вашего успеха</h1>
                  <div className="sectoin-one__humans">
                    <Image src={humans}
                    alt="humans"
                    />
                    <p>Подходит для всех возрастов <br /> и уровней подготовки</p>
                  </div>
                <Link href='#'>
                  <button className="section-one__btn">Выбрать курс</button>
                </Link>
              </div>
              <div className="section-one__bg-woman">
                <Image
                src={woman}
                alt="woman"        
                />
              </div>
            </div>
          </div>
  )
}


