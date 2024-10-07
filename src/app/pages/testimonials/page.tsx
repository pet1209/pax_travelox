import LandingLayout from "../../../components/layout/Landing";
import { HeroDetails } from "../../../components/Hero";
import { Footer } from "../../../components/Footer";
import React from "react";
import { Testmonials } from "../../../components/Testimonials";

export default function TestimonialsPage() {
  return (
    <main className="flex flex-1 flex-col">
      <LandingLayout>
        <div>
          <HeroDetails title="Testimonials"></HeroDetails>
          <Testmonials />
        </div>
      </LandingLayout>
      <Footer />
    </main>
  );
}
