import React from "react";
import { paymentBrands } from "../data/content";
import Image from "next/image";

export const Brands = () => {
  return (
    <section className="container pt-16 overflow-x-hidden overscroll-x-none">
      <div
        className="jos  mx-auto"
        data-jos_once="1"
        data-jos_animation="fade-up"
        data-jos_timingfunction="ease"
        data-jos_duration="0.7"
        data-jos_delay="0.5"
        data-jos_counter="1"
      >
        <div className="w-full inline-flex flex-nowrap">
          <div className="flex justify-center [&_a]:lg:mx-24 [&_a]:mx-8  animate-infinite-scroll">
            {paymentBrands.map((item, index) => (
              <a
                key={index}
                className="flex-shrink-0 transition  hover:-translate-y-3"
              >
                <img src={item.icon} alt={item.title} />
              </a>
            ))}
          </div>
          {/* <div
            className="flex justify-center [&_a]:lg:mx-24 [&_a]:mx-8  animate-infinite-scroll"
            aria-hidden="true"
          >
            {paymentBrands.map((item, index) => (
              <a
                key={index}
                className="flex-shrink-0 transition hover:-translate-y-3"
              >
                <img src={item.icon} alt={item.title} />
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};
