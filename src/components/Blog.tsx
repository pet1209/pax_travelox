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
import { blogs } from "../data/content";
export const Blog = () => {
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
            {blogs.title}
          </h1>
          <p className="text-lg text-muted-foreground">{blogs.desc}</p>
        </div>
        <div className="flex flex-wrap lg:px-0 sm:px-8 px-8">
          <Carousel className="w-full">
            <CarouselContent>
              {blogs.data.map((item, index) => (
                <CarouselItem
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  key={index}
                  className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <Card key={index} className="w-full">
                    <CardContent className="p-0">
                      <div className="aspect-w-16 aspect-h-9">
                        <img
                          className="w-full object-cover rounded-xl h-72 hover:scale-125 transition-transform duration-500 ease-in-out"
                          src={item.url}
                          alt={item.title}
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="p-4  items-start flex-col text-start">
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="text-muted-foreground text-sm mb-1">
                        12 Jun 2024
                      </CardDescription>
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
