import TopBtn from "../../component/global/TopBtn";
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
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Deliver />
      <Pricing />
      <Template />
      <Feature />
      <Testmonial />
      <Footer />
      <TopBtn />
    </main>
  );
}
