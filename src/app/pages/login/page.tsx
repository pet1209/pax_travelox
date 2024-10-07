import LandingLayout from "../../../components/layout/Landing";
import { HeroDetails } from "../../../components/Hero";
import { Footer } from "../../../components/Footer";
import React from "react";
import { LoginForm } from "../../../components/Login";

export default function Login() {
  return (
    <main className="flex flex-1 flex-col">
      <LandingLayout>
        <div>
          <HeroDetails title="Login"></HeroDetails>
          <section className="py-12 container">
            <div className="max-w-full  md:pb-4 mx-auto">
              <LoginForm />
            </div>
          </section>
        </div>
      </LandingLayout>
      <Footer />
    </main>
  );
}
