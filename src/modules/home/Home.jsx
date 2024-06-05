import {
  Hero,
  About,
  Deliver,
  Pricing,
  Template,
  Feature,
  Testmonial,
  Navbar,
  Footer,
} from "../component/pages";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Deliver />
      <Pricing />
      <Template />
      <Feature />
      <Testmonial />
      <Footer />
    </>
  );
}
