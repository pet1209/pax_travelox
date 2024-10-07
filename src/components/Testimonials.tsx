"use client";

import React, { useState, useCallback } from "react";
import {
  Carousel,
  CarouselIndicator,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbsContainer,
  SliderMainItem,
} from "@/components/extension/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { blogs } from "../data/content";
import { Star } from "lucide-react";
export const Testmonials = () => {
  const [isAutoplay, setIsAutoplay] = useState(true);

  const handleMouseEnter = useCallback(() => {
    setIsAutoplay(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsAutoplay(true);
  }, []);
  return (
    <section className="py-12 bg-secondary">
      {/* Features */}
      <div className="mx-auto container pb-8">
        {/* Title */}
        <div
          className="jos mx-auto  mb-12 items-center text-center"
          data-jos_animation="zoom"
        >
          <h1 className="text-4xl mb-2 font-bold tracking-tight text-primary md:text-5xl">
            WHAT CLIENT SAY'S
          </h1>
          <p className="text-lg text-muted-foreground">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="flex flex-wrap lg:px-0 sm:px-8 px-8">
          <Carousel className="w-full">
            <CarouselMainContainer>
              {blogs.data.map((item, index) => (
                <SliderMainItem
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  key={index}
                  className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="flex h-auto w-full">
                    <div className="flex flex-col bg-white rounded-xl dark:bg-neutral-900">
                      <div className="flex-auto p-4 md:p-6">
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
                        </ul>
                        <p className="text-base italic md:text-lg text-gray-800 dark:text-neutral-200">
                          " There are many variations of passages available but
                          the majority have suffered alteration in some form. "
                        </p>
                      </div>
                      <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                              src="/assets/img/testimonial/1.jpg"
                              alt="Image Description"
                            />
                          </div>
                          <div className="grow ms-3">
                            <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                              Josh Tyson
                            </p>
                            <p className="text-xs text-gray-500 dark:text-neutral-400">
                              Traveller
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SliderMainItem>
              ))}
            </CarouselMainContainer>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
              <CarouselThumbsContainer className="gap-x-1 ">
                {Array.from({ length: 2 }).map((_, index) => (
                  <CarouselIndicator
                    className="py-1"
                    key={index}
                    index={index}
                  />
                ))}
              </CarouselThumbsContainer>
            </div>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      {/* End Features */}
    </section>
  );
};
