import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { teams } from "../data/content";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Card } from "./ui/card";

export const OurTeam = () => {
  return (
    <section className="container py-12">
      {/* Features */}
      <div className="mx-auto">
        {/* Title */}
        <div
          className="jos mx-auto  mb-12 items-center text-center"
          data-jos_animation="zoom"
        >
          <h1 className="text-4xl mb-2 font-bold tracking-tight text-primary md:text-5xl">
            MEET OUR TOUR GUIDES
          </h1>
          <p className="text-lg text-muted-foreground">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 ">
          {teams.map((item, index) => (
            <Card key={index} className="flex flex-col rounded-xl p-4 md:p-6">
              <div className="text-center">
                <img
                  className="rounded-xl size-56 mx-auto object-cover"
                  src={item.img}
                  alt="Image Description"
                />
                <div className="mt-2 sm:mt-4">
                  <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-neutral-400">
                    {item.title}
                  </p>
                </div>
              </div>

              <div className=" flex mt-3  items-center justify-center  space-x-1">
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-primary hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-700"
                  href="#"
                >
                  <Facebook className="flex-shrink-0 size-3.5 text-primary" />
                </a>
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-700"
                  href="#"
                >
                  <Twitter className="flex-shrink-0 size-3.5 text-primary" />
                </a>
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-700"
                  href="#"
                >
                  <Instagram className="flex-shrink-0 size-3.5 text-primary" />
                </a>
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-700"
                  href="#"
                >
                  <Linkedin className="flex-shrink-0 size-3.5 text-primary" />
                </a>
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-700"
                  href="#"
                >
                  <Youtube className="flex-shrink-0 size-3.5 text-primary" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
      {/* End Features */}
    </section>
  );
};
