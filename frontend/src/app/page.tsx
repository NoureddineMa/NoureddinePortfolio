import { Hero , Header , About , Techs } from "./components";

export default function Home() {
  return (
  <section className="px-[10rem]">
    <Header />
    <Hero />
    <About />
    <Techs />
  </section>
  );
}
