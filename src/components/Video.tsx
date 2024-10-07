import React from "react";
import { PlayCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Video = () => {
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
            LET'S CHECK OUR VIDEO
          </h1>
          <p className="text-lg text-muted-foreground">
            The best booking platform you can trust
          </p>
        </div>

        <Card className="relative items-center text-center w-full h-96 rounded-xl">
          <img
            className="size-full absolute top-0 start-0 object-cover rounded-xl"
            src="/assets/img/bg/stepantsminda-georgia-night-starry-sky-above-bea-2023-11-27-05-33-58-utc.jpg"
            alt="Image Description"
          />
          <div className="absolute inset-0 m-auto size-12">
            <PlayCircle className="size-20 text-primary-foreground hover:text-primary " />
          </div>
        </Card>
      </div>
      {/* End Features */}
    </section>
  );
};
