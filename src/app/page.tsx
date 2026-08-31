import Hero from "./sections/Hero";
import Features  from "./sections/Features";
import SecondaryFeatures from "./sections/secondary-features";
import GetStartedToday from "./sections/get-started-today";
import Testemonials from "./sections/Testemonials";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <SecondaryFeatures />
      <GetStartedToday />
      <Testemonials />
      <Pricing />
      <FAQ />
    </main>
  );
}
