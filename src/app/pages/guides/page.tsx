import LandingLayout from "../../../components/layout/Landing";
import { HeroDetails } from "../../../components/Hero";
import { Footer } from "../../../components/Footer";
import React from "react";
import { OurTeam } from "../../../components/OurTeam";
import { Testmonials } from "../../../components/Testimonials";

export default function Guides() {
  return (
    <main className="flex flex-1 flex-col">
      <LandingLayout>
        <div>
          <HeroDetails title="Guides"></HeroDetails>
          <OurTeam />
        </div>
      </LandingLayout>
      <Footer />
    </main>
  );
}
