import { Button } from "@/components/ui/button";
import LandingLayout from "../components/layout/Landing";
import { Hero } from "../components/Hero";
import { Destinations } from "../components/Destinations";
import { About } from "../components/About";
import { Categories } from "../components/Categories";
import { HowItWorks } from "../components/HowItWorks";
import { Packages } from "../components/Packages";
import { TravelWithUs } from "../components/TravelWithUs";
import { Brands } from "../components/Brands";
import { Footer } from "../components/Footer";
import { TopLocations } from "../components/TopLocations";
import { Banners } from "../components/Banners";
import { Contact } from "../components/Contact";
import { Blog } from "../components/Blog";
import { OurTeam } from "../components/OurTeam";
import { Testmonials } from "../components/Testimonials";
import { Stats } from "../components/Stats";
import { Video } from "../components/Video";
import Chatbot from "../components/Chatbot";
import ScrollToTopButton from "../components/ui/ScrollToTopButton";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <LandingLayout>
        <div>
          <Hero></Hero>
          <Destinations />
          <About />
          <Categories />
          <Banners />
          <HowItWorks />
          <Packages />
          <TravelWithUs />
          <Brands />
          <TopLocations />
          <Testmonials />
          <Blog />
          <Stats />
          <Video />
          <OurTeam />
          <Contact />
          <Footer />
          <Chatbot />
          {/* <ScrollToTopButton /> */}
          <Toaster />
        </div>
      </LandingLayout>
    </main>
  );
}
