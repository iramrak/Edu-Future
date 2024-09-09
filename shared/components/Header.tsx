import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.png'
import { Container } from './Container'
import Link from 'next/link'

export const Header = () => {
  return (
    <Container>
        <header>
            <div className="header__logo">
                <Image 
                src={logo}
                alt='Edu Future logo'
                />
            </div>
            <nav className="header__nav">
                <ul>
                    <li className="header-contact__link">
                        <Link href='#section__two'>О нас</Link>
                    </li>
                    <li className="header-contact__link">
                        <Link href='#section__three'>Курсы</Link>
                    </li>
                    <li className="header-contact__link">
                        <Link href='#section__five'>Отзывы</Link>
                    </li>
                    <li className="header-contact__link">
                        <Link href='#section__six'>Вопросы</Link>
                    </li>
                    <li className="header-contact__link">
                        <Link href='#section__seven'>Блог</Link>
                    </li>
                </ul>
                <Link href="#">
                    <div className="header-nav__button">
                        <p>Выбрать курс</p>
                   </div>
                </Link>
            </nav>
        </header>
    </Container>
  )
}