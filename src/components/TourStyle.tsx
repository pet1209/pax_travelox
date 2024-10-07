import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { packages } from "../data/content";
import { ArrowRight, Heart, Star } from "lucide-react";
import { Button } from "./ui/button";

export function TourCols() {
  return (
    <div className="grid lg:grid-cols-2  gap-4 ">
      {packages.data.map((item, index) => (
        <Card key={index} className="w-full">
          <CardContent className="p-0 hover:scale-110 transition-transform duration-500 ease-in-out">
            <div className="relative aspect-w-16 aspect-h-9">
              <div className="absolute top-2 right-2">
                <Button className="bg-primary hover:bg-white p-1 rounded-full shadow-md focus:outline-none">
                  <Heart className="p-1 hover:text-primary" />
                </Button>
              </div>
              <div className="absolute top-2 left-2 bg-destructive  py-1.5 px-6 rounded-full">
                <p
                  tabIndex={0}
                  className="focus:outline-none text-xs text-primary-foreground"
                >
                  Sale
                </p>
              </div>
              <img
                className="w-full object-cover rounded-xl h-72 "
                src={item.url}
                alt={item.title}
              />
            </div>
          </CardContent>
          <CardFooter className="p-4  items-start flex-col text-start">
            <CardTitle className="text-xl">{item.title}</CardTitle>
            <CardDescription className="text-muted-foreground text-sm mb-1">
              Manhattan, New York
            </CardDescription>
            <div className="flex items-center mb-2">
              <span className="text-secondary-foreground">Rating:</span>
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
                <li className="inline ml-2 text-muted-foreground text-xs">
                  1202 reviews
                </li>
              </ul>
            </div>
            <div className="pt-2 flex w-full justify-between items-center border-t border-slate-100 dark:border-gray-800">
              <h5 className="text-base font-medium text-primary">$ 58 / Day</h5>
              <a
                href=""
                className="inline-flex items-center text-base text-muted-foreground hover:text-primary"
              >
                Book Now <ArrowRight className="ml-2 size-5" />
              </a>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export function TourList() {
  return (
    <div className="flex flex-col">
      {packages.data.map((item, index) => (
        <Card key={index} className="w-full md:flex md:items-center mb-4">
          <CardContent className="p-0 hover:scale-110 transition-transform duration-500 ease-in-out">
            <div className="relative aspect-w-16 aspect-h-9">
              <div className="absolute top-2 right-2">
                <Button className="bg-primary hover:bg-white p-1 rounded-full shadow-md focus:outline-none">
                  <Heart className="p-1 hover:text-primary" />
                </Button>
              </div>
              <div className="absolute top-2 left-2 bg-destructive  py-1.5 px-6 rounded-full">
                <p
                  tabIndex={0}
                  className="focus:outline-none text-xs text-primary-foreground"
                >
                  Sale
                </p>
              </div>
              <img
                className=" object-cover rounded-xl h-40 w-96 "
                src={item.url}
                alt={item.title}
              />
            </div>
          </CardContent>
          <CardFooter className="p-4 w-full items-start flex-col text-start">
            <CardTitle className="text-xl">{item.title}</CardTitle>
            <CardDescription className="text-muted-foreground text-sm mb-1">
              Manhattan, New York
            </CardDescription>
            <div className="flex items-center mb-2">
              <span className="text-secondary-foreground">Rating:</span>
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
                <li className="inline ml-2 text-muted-foreground text-xs">
                  1202 reviews
                </li>
              </ul>
            </div>
            <div className="pt-2 flex w-full justify-between items-center border-t border-slate-100 dark:border-gray-800">
              <h5 className="text-base font-medium text-primary">$ 58 / Day</h5>
              <a
                href=""
                className="inline-flex items-center text-base text-muted-foreground hover:text-primary"
              >
                Book Now <ArrowRight className="ml-2 size-5" />
              </a>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export function TourGrid() {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
      {packages.data.map((item, index) => (
        <Card key={index} className="w-full">
          <CardContent className="p-0 hover:scale-110 transition-transform duration-500 ease-in-out">
            <div className="relative aspect-w-16 aspect-h-9">
              <div className="absolute top-2 right-2">
                <Button className="bg-primary hover:bg-white p-1 rounded-full shadow-md focus:outline-none">
                  <Heart className="p-1 hover:text-primary" />
                </Button>
              </div>
              <div className="absolute top-2 left-2 bg-destructive  py-1.5 px-6 rounded-full">
                <p
                  tabIndex={0}
                  className="focus:outline-none text-xs text-primary-foreground"
                >
                  Sale
                </p>
              </div>
              <img
                className="w-full object-cover rounded-xl h-72 "
                src={item.url}
                alt={item.title}
              />
            </div>
          </CardContent>
          <CardFooter className="p-4  items-start flex-col text-start">
            <CardTitle className="text-xl">{item.title}</CardTitle>
            <CardDescription className="text-muted-foreground text-sm mb-1">
              Manhattan, New York
            </CardDescription>
            <div className="flex items-center mb-2">
              <span className="text-secondary-foreground">Rating:</span>
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
                <li className="inline ml-2 text-muted-foreground text-xs">
                  1202 reviews
                </li>
              </ul>
            </div>
            <div className="pt-2 flex w-full justify-between items-center border-t border-slate-100 dark:border-gray-800">
              <h5 className="text-base font-medium text-primary">$ 58 / Day</h5>
              <a
                href=""
                className="inline-flex items-center text-base text-muted-foreground hover:text-primary"
              >
                Book Now <ArrowRight className="ml-2 size-5" />
              </a>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
