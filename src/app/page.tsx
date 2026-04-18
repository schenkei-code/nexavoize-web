import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Demo } from "@/components/Demo";
import { UseCases } from "@/components/UseCases";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Demo />
      <UseCases />
      <Pricing />
      <FAQ />
    </>
  );
}
