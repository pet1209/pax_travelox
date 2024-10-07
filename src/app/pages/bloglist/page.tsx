import LandingLayout from "../../../components/layout/Landing";
import { HeroDetails } from "../../../components/Hero";
import { Footer } from "../../../components/Footer";
import React from "react";
import { Blog } from "../../../components/Blog";

export default function Team() {
  return (
    <main className="flex flex-1 flex-col">
      <LandingLayout>
        <div>
          <HeroDetails title="Team"></HeroDetails>
          <Blog />
        </div>
      </LandingLayout>
      <Footer />
    </main>
  );
}
