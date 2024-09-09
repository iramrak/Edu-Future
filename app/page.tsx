import { AboutUs, CardSlider, Container , FirstCard, SecondCard, ThridCard, Banner, RevSlider, SectionSix, SectionSeven, Footer} from "@/shared/components";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <main>
      <section className="section__one">
        <FirstCard />
        <SecondCard />
        <ThridCard />
      </section>

        <h1 className="section-two__title" id="section__two"><span>«EduFuture» —</span> это...</h1>
        <section className="section__two">
          {/*about us grid section*/}
            <AboutUs />
        </section>
  
        <section className="section__three">
          <CardSlider />
        </section>

        <section className="section__four" >
          <Banner />
        </section>

        <section className="section__five">
          <RevSlider />
        </section>
        

        <div className='section-six__title' id="section__six">
          <h1>Остались вопросы?</h1>    
        </div>
        <section className="section__six">
          <SectionSix />
        </section>

        <div className="section-seven__title" id="section__seven">
            <h1>Наши последние статьи</h1>
            <Link href={'#'}>
              <p>ВСЕ СТАТЬИ</p>
            </Link>
        </div>
        <section className="section__seven">
          <SectionSeven />
        </section>
      </main>
      <Footer />

      <div className="divine">
          <a href="#">Политика конфиценциальности</a>
          <a href="#">Договор оферты</a>
          <a href="#">Разработка сайта</a>
      </div>
    </Container>
  );
}
