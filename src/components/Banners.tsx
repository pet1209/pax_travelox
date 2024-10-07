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
import { banners } from "../data/content";
import { ArrowRight } from "lucide-react";

export const Banners = () => {
  const [isAutoplay, setIsAutoplay] = useState(true);

  const handleMouseEnter = useCallback(() => {
    setIsAutoplay(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsAutoplay(true);
  }, []);
  return (
    <section className="p-12 bg-secondary">
      <div className="max-w-full md:pb-4 mx-auto">
        <div className="flex flex-wrap lg:px-0 sm:px-8 px-8">
          <Carousel
            className="w-full"
            plugins={isAutoplay ? [Autoplay({ delay: 1500 })] : []}
          >
            <CarouselContent>
              {banners.map((item, index) => (
                <CarouselItem
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  key={index}
                  className="sm:basis-1/1 md:basis-1/2 lg:basis-1/2 xl:basis-1/3 "
                >
                  <div className="hs-carousel-slide active">
                    <div
                      className={`h-80 w-full flex flex-col rounded-xl relative`}
                    >
                      <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-full before:absolute before:inset-x-0 before:z-[1] before:size-full">
                        <img
                          className="size-full absolute top-0 start-0 object-cover"
                          src={item.img}
                          alt={item.title}
                        />
                      </div>

                      <div className="absolute top-0 inset-x-0 z-10 mt-12 w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                        <span className="block font-bold text-primary text-xl md:text-4xl">
                          {item.title}
                        </span>
                        <div className="mt-5">
                          <a
                            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-primary border border-transparent text-primary-foreground hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                            href="#"
                          >
                            View More <ArrowRight />
                          </a>
                        </div>
                      </div>
                    </div>
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
