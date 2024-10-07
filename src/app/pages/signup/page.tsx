import LandingLayout from "../../../components/layout/Landing";
import { HeroDetails } from "../../../components/Hero";
import { Footer } from "../../../components/Footer";
import React from "react";
import { SignupForm } from "../../../components/ui/signup";

export default function Signup() {
  return (
    <main className="flex flex-1 flex-col">
      <LandingLayout>
        <div>
          <HeroDetails title="Sign Up"></HeroDetails>{" "}
          <section className="py-12 container">
            <div className="max-w-full  md:pb-4 mx-auto">
              <SignupForm />
            </div>
          </section>
        </div>
      </LandingLayout>
      <Footer />
    </main>
  );
}
