import LandingLayout from "../../../components/layout/Landing";
import { HeroDetails } from "../../../components/Hero";
import { Footer } from "../../../components/Footer";
import React from "react";
import CartTable from "../../../components/CartTable";

export default function TourCart() {
  return (
    <main className="flex flex-1 flex-col">
      <LandingLayout>
        <div>
          <HeroDetails title="Cart"></HeroDetails>
          <section className="py-12 container">
            <div className="max-w-full  md:pb-4 mx-auto">
              <CartTable />
            </div>
          </section>
        </div>
      </LandingLayout>
      <Footer />
    </main>
  );
}
