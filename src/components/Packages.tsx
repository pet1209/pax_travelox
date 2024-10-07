"use client";

import React, { useState, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";
import Autoplay from "embla-carousel-autoplay";
import { packages } from "../data/content";
import { ArrowRight, Star } from "lucide-react";

export const Packages = () => {
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
            {packages.title}
          </h1>
          <p className="text-lg text-muted-foreground">{packages.desc}</p>
        </div>
        <div className="flex flex-wrap lg:px-0 sm:px-8 px-8">
          <Carousel
            className="w-full"
            plugins={isAutoplay ? [Autoplay({ delay: 1500 })] : []}
          >
            <CarouselContent>
              {packages.data.map((item, index) => (
                <CarouselItem
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  key={index}
                  className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <Card key={index} className="w-full">
                    <CardContent className="p-0 hover:scale-110 transition-transform duration-500 ease-in-out">
                      <div className="aspect-w-16 aspect-h-9">
                        <img
                          className="w-full object-cover rounded-xl h-72 "
                          src={item.url}
                          alt={item.title}
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="p-4  items-start flex-col text-start">
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="text-muted-foreground text-sm mb-1">
                        Manhattan, New York
                      </CardDescription>
                      <div className="flex items-center mb-2">
                        <span className="text-secondary-foreground">
                          Rating:
                        </span>
                        <ul className="text-lg font-medium list-none ms-2">
                          <li className="inline">
                            <Star
                              fill="orange"
                              size={"24"}
                              strokeWidth={0}
                              className="inline  align-middle"
                            />
                          </li>
                          <li className="inline">
                            <Star
                              fill="orange"
                              size={"24"}
                              strokeWidth={0}
                              className="inline  align-middle"
                            />
                          </li>
                          <li className="inline">
                            <Star
                              fill="orange"
                              size={"24"}
                              strokeWidth={0}
                              className="inline  align-middle"
                            />
                          </li>
                          <li className="inline">
                            <Star
                              fill="orange"
                              size={"24"}
                              strokeWidth={0}
                              className="inline  align-middle"
                            />
                          </li>
                          <li className="inline">
                            <Star
                              fill="orange"
                              size={"24"}
                              strokeWidth={0}
                              className="inline  align-middle"
                            />
                          </li>
                          <li className="inline ml-2 text-muted-foreground text-xs">
                            1202 reviews
                          </li>
                        </ul>
                      </div>
                      <div className="pt-2 flex w-full justify-between items-center border-t border-slate-100 dark:border-gray-800">
                        <h5 className="text-base font-medium text-primary">
                          $ 58 / Day
                        </h5>
                        <a
                          href=""
                          className="inline-flex items-center text-base text-muted-foreground hover:text-primary"
                        >
                          Explore Now <ArrowRight className="ml-2 size-5" />
                        </a>
                      </div>
                    </CardFooter>
                  </Card>
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
