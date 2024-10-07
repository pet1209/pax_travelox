import { Button } from "@/components/ui/button";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Search } from "lucide-react";

export function TourSideBar() {
  return (
    <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-neutral-800">
      <Card className="mt-8 start-0 py-8 px-8">
        <div>
          <h3 className="text-2xl mb-4 font-semibold dark:text-white ">
            Search Tour
          </h3>
          <div className="text-start  items-center space-y-6">
            <div className="pb-2 sm:pb-0 sm:flex-[1_0_0%]">
              <Label htmlFor="destination">Destination</Label>
              <Input type="text" id="destination" placeholder="New York, USA" />
            </div>
            <div className="pt-2 sm:pt-0 sm:ps-3  sm:flex-[1_0_0%] dark:border-gray-700">
              <Label htmlFor="checkin">Check in</Label>
              <Input type="date" id="checkin" placeholder="MM/ DD / YY" />
            </div>
            <div className="pt-2 sm:pt-0 sm:ps-3  sm:flex-[1_0_0%] dark:border-gray-700">
              <Label htmlFor="checkout">Check Out</Label>
              <Input type="date" id="checkout" placeholder="MM/ DD / YY" />
            </div>
            <div className="pt-2 sm:pt-0 sm:ps-3  sm:flex-[1_0_0%] dark:border-gray-700">
              <Label htmlFor="checkout">Travel Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Travel Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Travel Type</SelectLabel>
                    <SelectItem value="adventure">Adventure Tours</SelectItem>
                    <SelectItem value="city">City Tours</SelectItem>
                    <SelectItem value="couple">Blueberry Tours</SelectItem>
                    <SelectItem value="group">Group Tours</SelectItem>
                    <SelectItem value="weekend">Weekend Tours</SelectItem>
                    <SelectItem value="business">Business tours</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="pt-4 sm:pt-4  sm:block sm:flex-[0_0_auto] ">
              <Button
                size={"lg"}
                className="justify-center items-center text-lg w-full"
              >
                <Search className="size-5 mr-2" /> Find Now
              </Button>
            </div>
          </div>
        </div>
      </Card>
      <Card className="mt-8 start-0 py-8 px-8">
        <div>
          <h3 className="text-2xl mb-4 font-semibold dark:text-white ">
            Category
          </h3>
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="tour"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Adventure Tours
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" checked={true} />
              <label
                htmlFor="tour"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Business Tours
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="tour"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Group Tours
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" checked={true} />
              <label
                htmlFor="tour"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Couple Tours
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="tour"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                City Tours
              </label>
            </div>
          </div>
        </div>
      </Card>
      <Card className="mt-8 start-0 py-8 px-8">
        <div>
          <h3 className="text-2xl mb-4 font-semibold dark:text-white ">
            Price Range
          </h3>
          <div className="space-y-2">
            <h3 className="font-semibold tracking-tight text-base text-primary">
              $132 - $432
            </h3>
            <Slider defaultValue={[33]} max={100} step={1} />
          </div>
        </div>
      </Card>
      <Card className="mt-8 start-0 py-8 px-8">
        <div>
          <h3 className="text-2xl mb-4 font-semibold dark:text-white ">
            Durations
          </h3>
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="tour"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                0 - 24 Hours
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" checked={true} />
              <label
                htmlFor="tour"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                1 - 3 Days
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="tour"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                3 - 6 Days
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" checked={true} />
              <label
                htmlFor="tour"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                6 - 9 Days
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="tour"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                9 - 10 Days
              </label>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
