"use client";

import { Card, CardContent } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function ComingSoon() {
  const targetDate = new Date("2024-10-31T00:00:00");
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);
  return (
    <main className="flex flex-1 flex-col">
      <div>
        <div
          className="relative h-screen w-full flex flex-col items-center justify-center text-center text-white bg-cover bg-center"
          style={{
            backgroundImage: "url(/assets/img/bg/coming-soon.jpg)",
          }}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-60" />
          <h1 className="text-5xl z-10 font-bold text-white">
            We're Coming Soon
          </h1>
          <p className="mt-4 z-10 text-xl">
            Our website is under construction. We'll be here soon with our new
            awesome site, subscribe to be notified.
          </p>
          <div className="flex items-end justify-center z-10 mt-8">
            <div className="m-2 sm:m-5">
              <Card>
                <CardContent className="pt-4 text-primary font-bold text-xl">
                  <span className="sm:text-5xl">{timeLeft.days}</span>
                  <p>Days</p>
                </CardContent>
              </Card>
            </div>
            <div className="m-2 sm:m-5">
              <Card>
                <CardContent className="pt-4 text-primary font-bold text-xl">
                  <span className="sm:text-5xl">{timeLeft.hours}</span>
                  <p>Hours</p>
                </CardContent>
              </Card>
            </div>
            <div className="m-2 sm:m-5">
              <Card>
                <CardContent className="pt-4 text-primary font-bold text-xl">
                  <span className="sm:text-5xl">{timeLeft.minutes}</span>
                  <p>Minutes</p>
                </CardContent>
              </Card>
            </div>
            <div className="m-2 sm:m-5">
              <Card>
                <CardContent className="pt-4 text-primary font-bold text-xl">
                  <span className="sm:text-5xl">{timeLeft.seconds}</span>
                  <p>Seconds</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="rounded-md shadow z-10 mt-8">
            <form action="#" method="post" className="flex items-center">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="py-4 px-8 bg-white text-muted-foreground rounded-l-full focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary py-4 px-8 text-white rounded-r-full focus:outline-none"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-8 gap-x-4 inline-flex text-white">
              <Facebook /> <Twitter /> <Youtube /> <Linkedin /> <Instagram />
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
