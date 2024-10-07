"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { categories } from "../data/content";

export const Categories = () => {
  return (
    <section className="py-12 container">
      <div className="max-w-full  md:pb-4 mx-auto">
        {/* Title */}
        <div className="jos mx-auto  mb-12" data-jos_animation="zoom">
          <h1 className="text-4xl mb-2 font-bold tracking-tight text-primary md:text-5xl">
            {categories.title}
          </h1>
          <p className="text-lg text-muted-foreground">{categories.desc}</p>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 ">
          {categories.data.map((item, index) => (
            <Card key={index} className="w-full">
              <CardContent className="p-4">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full object-cover rounded-xl h-40 hover:scale-110 transition-transform duration-500 ease-in-out"
                    src={item.url}
                    alt={item.title}
                  />
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex-col">
                <CardTitle className="mb-2">{item.title}</CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
