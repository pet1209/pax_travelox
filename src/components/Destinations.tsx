"use client";

import React, { useState, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";
import Autoplay from "embla-carousel-autoplay";
import { destinations } from "../data/content";
import { Card } from "./ui/card";

export const Destinations = () => {
  const [isAutoplay, setIsAutoplay] = useState(true);

  const handleMouseEnter = useCallback(() => {
    setIsAutoplay(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsAutoplay(true);
  }, []);
  return (
    <section className="py-12 container">
      <div className="max-w-full  md:pb-4 mx-auto">
        {/* Title */}
        <div className="jos mx-auto  mb-12" data-jos_animation="zoom">
          <h1 className="text-4xl mb-2 font-bold tracking-tight text-primary md:text-5xl">
            {destinations.title}
          </h1>
          <p className="text-lg text-muted-foreground">{destinations.desc}</p>
        </div>
        <div className="flex flex-wrap lg:px-0 sm:px-8 px-8">
          <Carousel
            className="w-full"
            plugins={isAutoplay ? [Autoplay({ delay: 1500 })] : []}
          >
            <CarouselContent>
              {destinations.data.map((item, index) => (
                <CarouselItem
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  key={index}
                  className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="relative  flex items-center justify-center">
                    <DirectionAwareHover imageUrl={item.url}>
                      <p className="font-bold text-3xl">{item.title}</p>
                      <p className="font-normal text-lg">{item.desc}</p>
                    </DirectionAwareHover>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export const Destinations_3 = () => {
  return (
    <section className="py-12 container">
      <div className="max-w-full  md:pb-4 mx-auto">
        {/* Title */}
        <div className="jos mx-auto  mb-12" data-jos_animation="zoom">
          <h1 className="text-4xl mb-2 font-bold tracking-tight text-primary md:text-5xl">
            {destinations.title}
          </h1>
          <p className="text-lg text-muted-foreground">{destinations.desc}</p>
        </div>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
          {destinations.data.map((item, index) => (
            <Card key={index} className="w-full">
              <div className="relative  flex items-center justify-center">
                <DirectionAwareHover imageUrl={item.url}>
                  <p className="font-bold text-3xl">{item.title}</p>
                  <p className="font-normal text-lg">{item.desc}</p>
                </DirectionAwareHover>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
