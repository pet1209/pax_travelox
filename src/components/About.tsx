import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const About = () => {
  return (
    <section className="container">
      <div className="max-w-full py-12 mx-auto">
        {/* Grid */}
        <div className="md:grid md:grid-cols-2  md:gap-12 xl:gap-32">
          <div className="relative jos" data-jos_animation="fade-right">
            <img
              className="rounded-xl "
              src="/assets/img/about/fried-pork-meat-with-potatoes-onions-and-peppers-2023-11-27-05-26-51-utc.jpg"
              alt="Image Description"
            />
            <div className="absolute lg:flex md:flex  hidden items-center top-16 md:-end-10 -end-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3">
              <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-red-500/5 text-primary text-center rounded-xl me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-globe size-6"
                >
                  <circle cx={12} cy={12} r={10} />
                  <line x1={2} y1={12} x2={22} y2={12} />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-slate-400">Travel Packages</span>
                <p className="text-xl font-bold">
                  <span className="counter-value" data-target={50}>
                    50
                  </span>
                  +
                </p>
              </div>
            </div>
            <div className="absolute lg:flex md:flex  hidden items-center bottom-16 md:-start-10 -start-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-56 m-3">
              <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-red-500/5 text-primary text-center rounded-xl me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-users size-6"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-slate-400">Visitor</span>
                <p className="text-xl font-bold">
                  <span className="counter-value" data-target={4589}>
                    4589
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* End Col */}
          <div
            className="jos mt-5 sm:mt-10 lg:mt-0"
            data-jos_animation="fade-left"
          >
            <div className="space-y-6 sm:space-y-8">
              {/* Title */}
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl bg-clip-text text-primary">
                  WORLD BEST TRAVEL AGENCY COMPANY FOR YOU
                </h2>
                <p className="text-muted-foreground">
                  Get instant helpful resources about anything on the go, easily
                  implement secure money transfer solutions, boost your daily
                  efficiency, connect to other app users and create your own
                  network, and much more with just a few taps. commodo
                  consequat. Duis aute irure.
                </p>
              </div>
              {/* End Title */}
              {/* List */}
              <ul className="space-y-2 sm:space-y-4">
                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-primary dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 size-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                    <span className="font-bold">
                      Take a look at our round up of the{" "}
                    </span>{" "}
                    best shows
                  </span>
                </li>
                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-primary dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 size-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                    It has survived not only
                    <span className="font-bold"> five centuries</span>
                  </span>
                </li>
                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-primary dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 size-3.5"
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
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                    Lorem Ipsum has been the ndustry standard dummy text
                  </span>
                </li>
              </ul>
              <Button
                size={"lg"}
                className="justify-center items-center text-lg p-6"
              >
                Discover More <ArrowRight className="ml-2" />
              </Button>
              {/* End List */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
    </section>
  );
};
