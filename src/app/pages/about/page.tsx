import LandingLayout from "../../../components/layout/Landing";
import { HeroDetails } from "../../../components/Hero";
import { Footer } from "../../../components/Footer";
import React from "react";
import { About } from "../../../components/About";
import { Testmonials } from "../../../components/Testimonials";

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col">
      <LandingLayout>
        <div>
          <HeroDetails title="About Us"></HeroDetails>
          <About />
          <Testmonials />
        </div>
      </LandingLayout>
      <Footer />
    </main>
  );
}
