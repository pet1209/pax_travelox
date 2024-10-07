import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { reasons } from "../data/content";

export const TravelWithUs = () => {
  return (
    <section className="py-12 bg-secondary ">
      {/* Features */}
      <div className="mx-auto container  pb-8">
        {/* Title */}
        <div
          className="jos mx-auto  mb-12 items-center text-center"
          data-jos_animation="zoom"
        >
          <h1 className="text-4xl mb-2 font-bold tracking-tight text-primary md:text-5xl">
            Why Travel With Us?
          </h1>
          <p className="text-lg text-muted-foreground">
            The best booking platform you can trust
          </p>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 ">
          {reasons.data.map((item, index) => (
            <Card className="items-center text-center" key={index}>
              <CardHeader>
                <div className="flex justify-center items-center size-12 bg-muted-foreground rounded-lg mx-auto">
                  <svg
                    className="flex-shrink-0 size-7 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 10v12" />
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                  </svg>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-4">Security Assurance</CardTitle>
                <CardDescription>
                  Demonstrates commitment to user data security through
                  encryption and secure payment practices
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col">
                <p>Learn More </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      {/* End Features */}
    </section>
  );
};
