import React from "react";
import { cn } from "../../lib/utils";
import Image from "next/image";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "jos grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-4 gap-4  mx-auto",
        className
      )}
      id="projects"
      data-jos_stagger="flip"
      data-jos_staggerinverse="none"
      data-jos_stagger_anchor="#projects"
      data-jos_stagger_sequence="0.1"
      data-jos_stagger_delay="0"
      data-jos_stagger_duration="0.4"
      data-jos_stagger_timing-function="ease-in-out"
      data-jos_stagger_mirror="true"
      data-jos_stagger_rootMargin="0% 0% -50% 0%"
      data-jos_stagger_startVisible="false"
      data-jos_stagger_scrollDirection="down"
      data-jos_stagger_once="false"
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  image,
  url,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image?: string;
  url: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl  group/bento hover:shadow-xl transition duration-200 p-0 isolate border border-white/10 shadow-lg ring-1 ring-black/5 gradient-card justify-between flex flex-col space-y-2",
        className
      )}
    >
      <div className="relative  w-full h-full">
        <div className="flex flex-1 w-full h-full min-h-[6rem]  ">
          <img
            className="object-cover object-center h-full w-full rounded-2xl hover:scale-110 transition-transform duration-500 ease-in-out"
            alt={"image"}
            src={image || ""}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={1200}
            height={600}
          />
        </div>
        <div className="absolute bottom-0 inset-x-0 z-10">
          <div className=" p-4 group-hover/bento:translate-x-2 transition duration-200">
            <div className="font-sans font-bold text-primary-foreground text-3xl mb-1">
              {title}
            </div>
            <div className="font-sans font-normal text-lg text-white">
              {description}
            </div>
            {/* <Link
          href={url}
          target="_blank"
          aria-label={"project"}
          className="text-primary inline-flex items-center  text-sm mt-2"
        >
          Live Preview
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};
