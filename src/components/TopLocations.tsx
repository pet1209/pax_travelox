import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { packages } from "../data/content";

export const TopLocations = () => {
  return (
    <section className="container py-12">
      {/* Features */}
      <div className="mx-auto pb-16">
        {/* Title */}
        <div
          className="jos mx-auto  mb-12 items-center text-center"
          data-jos_animation="zoom"
        >
          <h1 className="text-4xl mb-2 font-bold tracking-tight text-primary md:text-5xl">
            Explore Hot Locations
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover the World's Treasures
          </p>
        </div>
        <BentoGrid className="mx-auto">
          {packages.data.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.desc}
              image={item.url}
              url={item.url}
              className={
                i === 0 || i === 5 || i === 6 || i === 13 ? "md:col-span-2" : ""
              }
            />
          ))}
        </BentoGrid>
      </div>
      {/* End Features */}
    </section>
  );
};
export const Destination_1 = () => {
  return (
    <section className="container py-12">
      {/* Features */}
      <div className="mx-auto pb-16">
        {/* Title */}
        <div
          className="jos mx-auto  mb-12 items-center text-center"
          data-jos_animation="zoom"
        >
          <h1 className="text-4xl mb-2 font-bold tracking-tight text-primary md:text-5xl">
            Top Destinations
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover the World's Treasures
          </p>
        </div>
        <BentoGrid className="mx-auto">
          {packages.data.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.desc}
              image={item.url}
              url={item.url}
              className={
                i === 0 || i === 5 || i === 6 || i === 13 ? "md:col-span-2" : ""
              }
            />
          ))}
        </BentoGrid>
      </div>
      {/* End Features */}
    </section>
  );
};
