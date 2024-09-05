import { AboutUs, CardSlider, Container , FirstCard, SecondCard, ThridCard, Banner, RevSlider, SectionSix, SectionSeven} from "@/shared/components";
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

        <h1 className="section-two__title"><span>«EduFuture» —</span> это...</h1>
        <section className="section__two">
          {/*about us grid section*/}
            <AboutUs />
        </section>
  
        <section className="section__three">
          <CardSlider />
        </section>

        <section className="section__four">
          <Banner />
        </section>

        {/*<section className="section__five">
          <RevSlider />
        </section>
        */} 
        <div className='section-six__title'>
          <h1>Остались вопросы?</h1>    
        </div>
        <section className="section__six">
          <SectionSix />
        </section>

        <div className="section-seven__title">
            <h1>Наши последние статьи</h1>
            <Link href={'#'}>
              <p>ВСЕ СТАТЬИ</p>
            </Link>
        </div>
        <section className="section__seven">
          <SectionSeven />
        </section>
      </main>
    </Container>
  );
}
