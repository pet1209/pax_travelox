import React from "react";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

const FilterBar = () => {
  return (
    <div className="text-start  items-center mx-auto max-w-4xl sm:flex sm:space-x-3 p-5 bg-white border rounded-lg shadow-lg  dark:bg-slate-900 dark:border-gray-700">
      <div className="pb-2 sm:pb-0 sm:flex-[1_0_0%]">
        <Label htmlFor="destination">Destination</Label>
        <Input type="text" id="destination" placeholder="New York, USA" />
      </div>
      <div className="pt-2 sm:pt-0 sm:ps-3 border-t border-gray-200 sm:border-t-0 sm:border-s sm:flex-[1_0_0%] dark:border-gray-700">
        <Label htmlFor="checkin">Check in</Label>
        <Input type="date" id="checkin" placeholder="MM/ DD / YY" />
      </div>
      <div className="pt-2 sm:pt-0 sm:ps-3 border-t border-gray-200 sm:border-t-0 sm:border-s sm:flex-[1_0_0%] dark:border-gray-700">
        <Label htmlFor="checkout">Check Out</Label>
        <Input type="date" id="checkout" placeholder="MM/ DD / YY" />
      </div>
      <div className="pt-2 sm:pt-0 sm:ps-3 border-t border-gray-200 sm:border-t-0 sm:border-s sm:flex-[1_0_0%] dark:border-gray-700">
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
        <Button size={"lg"} className="justify-center items-center text-lg">
          <Search className="size-5 mr-2" /> Find Now
        </Button>
      </div>
    </div>
  );
};

export default FilterBar;
