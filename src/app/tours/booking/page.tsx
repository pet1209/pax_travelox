import LandingLayout from "../../../components/layout/Landing";
import { HeroDetails } from "../../../components/Hero";
import { Footer } from "../../../components/Footer";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  Select,
} from "@/components/ui/select";

export default function Booking() {
  return (
    <main className="flex flex-1 flex-col">
      <LandingLayout>
        <div>
          <HeroDetails title="Booking"></HeroDetails>
          <section className="py-12 container">
            <div className="max-w-full  md:pb-4 mx-auto">
              <div className="lg:grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
                {/* Content */}
                <div className="lg:col-span-2">
                  <div className="space-y-5 lg:space-y-8">
                    <Card className="mt-8 start-0 py-8 lg:px-8">
                      <div>
                        <h3 className="text-2xl mb-4 font-semibold dark:text-white ">
                          User Details
                        </h3>
                        <form className="space-y-6">
                          <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="firstName">First Name</Label>
                              <Input
                                id="firstName"
                                placeholder="Enter your first name"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="lastName">Last Name</Label>
                              <Input
                                id="lastName"
                                placeholder="Enter your last name"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              placeholder="Enter your email"
                              type="email"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                              id="phone"
                              placeholder="Enter your phone number"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="address">Address</Label>
                            <Textarea
                              className="min-h-[100px]"
                              id="address"
                              placeholder="Enter your address"
                            />
                          </div>
                        </form>
                      </div>
                    </Card>

                    <Card className="mt-8 start-0 py-8 lg:px-8">
                      <div>
                        <h3 className="text-2xl mb-4 font-semibold dark:text-white ">
                          Payment Info
                        </h3>
                        <form className="space-y-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">Card Holder Name</Label>
                            <Input id="name" placeholder="Enter name on card" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="number">Card Number</Label>
                            <Input
                              id="number"
                              placeholder="0000 0000 0000 0000"
                              type="text"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="expire">Expire Date</Label>
                              <div className="grid grid-cols-2 gap-2">
                                <Select>
                                  <SelectTrigger
                                    aria-label="Month"
                                    id="expire-month"
                                  >
                                    <SelectValue placeholder="MM" />
                                  </SelectTrigger>
                                  <SelectContent />
                                </Select>
                                <Select>
                                  <SelectTrigger
                                    aria-label="Year"
                                    id="expire-year"
                                  >
                                    <SelectValue placeholder="YY" />
                                  </SelectTrigger>
                                  <SelectContent />
                                </Select>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cvv">CVV</Label>
                              <Input id="cvv" placeholder="123" type="text" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </Card>
                  </div>
                </div>
                {/* End Content */}
                {/* Sidebar */}
                <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-neutral-800">
                  <Card className="mt-8 start-0 py-8 lg:px-8">
                    <div>
                      <h3 className="text-2xl mb-4 font-semibold dark:text-white ">
                        Booking Summary
                      </h3>
                      <div className="grid gap-4">
                        <div className="flex justify-between items-center">
                          <div className="text-gray-500 dark:text-gray-400">
                            Packages Cost
                          </div>
                          <div>$4,500.00</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-gray-500 dark:text-gray-400">
                            Tour Guide
                          </div>
                          <div>$25.00</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-gray-500 dark:text-gray-400">
                            Discount
                          </div>
                          <div>-$5.00</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-gray-500 dark:text-gray-400">
                            VAT
                          </div>
                          <div>$20.00</div>
                        </div>
                        <div className="flex justify-between items-center font-medium">
                          <div>Sub Total</div>
                          <div>$4,540.00</div>
                        </div>
                        <div className="flex justify-between items-center font-medium">
                          <div>Total</div>
                          <div>$4,540.00</div>
                        </div>
                      </div>
                    </div>
                    <CardFooter className="mt-8">
                      <Button className="w-full p-6">Book Now</Button>
                    </CardFooter>
                  </Card>
                </div>
                {/* End Sidebar */}
              </div>
            </div>
          </section>
        </div>
      </LandingLayout>
      <Footer />
    </main>
  );
}
