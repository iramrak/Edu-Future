import { AboutUs, CardSlider, Container , FirstCard, SecondCard, ThridCard, Banner} from "@/shared/components";

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

        <section className="section__five">
          {/*До делать СУКА !!!!*/}
        </section>
      </main>
    </Container>
  );
}
