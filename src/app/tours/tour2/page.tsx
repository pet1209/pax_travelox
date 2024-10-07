import LandingLayout from "../../../components/layout/Landing";
import { HeroDetails } from "../../../components/Hero";
import { Footer } from "../../../components/Footer";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TourSideBar } from "../../../components/TourSideBar";
import { TourList } from "../../../components/TourStyle";

export default function Tour2() {
  return (
    <main className="flex flex-1 flex-col">
      <LandingLayout>
        <div>
          <HeroDetails title="Tours"></HeroDetails>
          <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
              {/* Sidebar */}
              <TourSideBar />
              {/* End Sidebar */}
              {/* Content */}
              <div className="lg:col-span-2">
                <div className="py-8 lg:pe-8">
                  <div className="space-y-4">
                    <div className="flex">
                      <h2 className="text-xl font-bold dark:text-white">
                        Showing 1-10 of 50 Results
                      </h2>
                      <div className="ml-auto max-w-40  sm:flex-[1_0_0%] dark:border-gray-700">
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Sort By Default" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Sort By Default</SelectLabel>
                              <SelectItem value="adventure">
                                Sort By Featured
                              </SelectItem>
                              <SelectItem value="city">
                                Sort By Latest
                              </SelectItem>
                              <SelectItem value="couple">
                                Sort By Low Price
                              </SelectItem>
                              <SelectItem value="high">
                                Sort By High Price
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <TourList />
                  </div>
                </div>
              </div>
              {/* End Content */}
            </div>
          </div>
        </div>
      </LandingLayout>
      <Footer />
    </main>
  );
}
