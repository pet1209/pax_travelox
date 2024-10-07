import LandingLayout from "../../../components/layout/Landing";
import { HeroDetails } from "../../../components/Hero";
import { Footer } from "../../../components/Footer";
import React from "react";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col">
      <LandingLayout>
        <div>
          <HeroDetails title="Guides"></HeroDetails>
          <section className="py-12 container">
            <div className="max-w-full  md:pb-4 mx-auto">
              <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
                <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">
                  404
                </h1>
                <p className="mt-3 text-gray-600 dark:text-neutral-400">
                  Oops, something went wrong.
                </p>
                <p className="text-gray-600 dark:text-neutral-400">
                  Sorry, we couldn't find your page.
                </p>
                <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                  <a
                    className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white  disabled:opacity-50 disabled:pointer-events-none"
                    href="/"
                  >
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                    Go Back
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </LandingLayout>
      <Footer />
    </main>
  );
}
