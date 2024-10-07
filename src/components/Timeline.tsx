import React from "react";

export default function Timeline() {
  return (
    <div className="p-6 sm:p-10">
      <div className="after:absolute after:inset-y-0 after:w-px after:bg-gray-500/20 relative pl-6 after:left-0 grid gap-10 dark:after:bg-gray-400/20">
        <div className="grid gap-1 text-sm relative">
          <div className="flex aspect-square w-14 text-center justify-center items-center text-semibold text-2xl text-white bg-primary rounded-full absolute -left-6 translate-x-[-29.5px] z-10 top-1">
            01
          </div>
          <div className="ml-6">
            <div className="font-medium">
              <span className="text-primary font-bold">09:00AM - 12:00PM</span>
            </div>
            <div className="font-semibold text-2xl">
              DAY 01 - Norway City Visit
            </div>
            <div className="text-base text-gray-500 dark:text-gray-400">
              Scientists at a leading research institution unveil a
              groundbreaking breakthrough in quantum computing, laying the
              foundation for the future of computing.
            </div>
          </div>
        </div>
        <div className="grid gap-1 text-sm relative">
          <div className="flex aspect-square w-14 text-center justify-center items-center text-semibold text-2xl text-white bg-primary rounded-full absolute -left-6 translate-x-[-29.5px] z-10 top-1">
            02
          </div>
          <div className="ml-6">
            <div className="font-medium">
              <span className="text-primary font-bold">09:00AM - 12:00PM</span>
            </div>
            <div className="font-semibold text-2xl">
              DAY 02 - Norway City Visit
            </div>
            <div className="text-base text-gray-500 dark:text-gray-400">
              The first quantum computer is built by a team of researchers in a
              laboratory in the United States, marking a significant milestone
              in the field of computing.
            </div>
          </div>
        </div>
        <div className="grid gap-1 text-sm relative">
          <div className="flex aspect-square w-14 text-center justify-center items-center text-semibold text-2xl text-white bg-primary rounded-full absolute -left-6 translate-x-[-29.5px] z-10 top-1">
            03
          </div>
          <div className="ml-6">
            <div className="font-medium">
              <span className="text-primary font-bold">09:00AM - 12:00PM</span>
            </div>
            <div className="font-semibold text-2xl">
              DAY 03 - Norway City Visit
            </div>
            <div className="text-base text-gray-500 dark:text-gray-400">
              A group of scientists in Europe publish a series of groundbreaking
              papers on quantum computing research, paving the way for further
              advancements in the field.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
