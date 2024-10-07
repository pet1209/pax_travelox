import LandingLayout from "../../../components/layout/Landing";
import { HeroDetails } from "../../../components/Hero";
import { Footer } from "../../../components/Footer";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the MapComponent with SSR disabled
const MapComponentWithNoSSR = dynamic(() => import("../../../components/Map"), {
  ssr: false,
});

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col">
      <LandingLayout>
        <div>
          <HeroDetails title="Contact Us"></HeroDetails>
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl lg:max-w-5xl mx-auto">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                  Get In Touch
                </h1>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  We'd love to talk about how we can help you.
                </p>
              </div>
              <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
                {/* Card */}
                <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700">
                  <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200">
                    Fill in the form
                  </h2>
                  <form>
                    <div className="grid gap-4">
                      {/* Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="hs-firstname-contacts-1"
                            className="sr-only"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            name="hs-firstname-contacts-1"
                            id="hs-firstname-contacts-1"
                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="First Name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="hs-lastname-contacts-1"
                            className="sr-only"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="hs-lastname-contacts-1"
                            id="hs-lastname-contacts-1"
                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      {/* End Grid */}
                      <div>
                        <label
                          htmlFor="hs-email-contacts-1"
                          className="sr-only"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="hs-email-contacts-1"
                          id="hs-email-contacts-1"
                          autoComplete="email"
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                          placeholder="Email"
                        />
                      </div>
                      <div>
                        <label htmlFor="hs-phone-number-1" className="sr-only">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          name="hs-phone-number-1"
                          id="hs-phone-number-1"
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="hs-about-contacts-1"
                          className="sr-only"
                        >
                          Details
                        </label>
                        <textarea
                          id="hs-about-contacts-1"
                          name="hs-about-contacts-1"
                          rows={4}
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                          placeholder="Details"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    {/* End Grid */}
                    <div className="mt-4 grid">
                      <button
                        type="submit"
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
                {/* End Card */}
                <div className="divide-y divide-gray-200 dark:divide-neutral-800">
                  <MapComponentWithNoSSR />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LandingLayout>
      <Footer />
    </main>
  );
}
