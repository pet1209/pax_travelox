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
import { Users } from "lucide-react";

export const Stats = () => {
  return (
    <section className="py-12 bg-primary">
      {/* Features */}
      <div className="container">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 ">
          {reasons.data.map((item, index) => (
            <Card
              className="items-center text-center bg-primary border-primary-foreground border-2"
              key={index}
            >
              <CardHeader>
                <div className="flex justify-center items-center size-12 mx-auto">
                  <Users className="flex-shrink-0 size-12 text-primary-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-4 font-bold text-5xl text-primary-foreground">
                  30
                </CardTitle>
                <CardDescription className="font-bold text-xl text-primary-muted">
                  + Tour Guides
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* End Features */}
    </section>
  );
};
