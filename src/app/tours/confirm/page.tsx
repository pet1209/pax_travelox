import LandingLayout from "../../../components/layout/Landing";
import { HeroDetails } from "../../../components/Hero";
import { Footer } from "../../../components/Footer";
import React from "react";
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
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle } from "lucide-react";

export default function BookingConfirm() {
  return (
    <main className="flex flex-1 flex-col">
      <LandingLayout>
        <div>
          <HeroDetails title="Confirm Booking"></HeroDetails>
          <section className="py-12 container">
            <div className="max-w-full  md:pb-4 mx-auto">
              <Alert variant="success" className="text-primary-foreground">
                <CheckCircle className="h-4 w-4 text-primary-foreground" />
                <AlertTitle>YOUR BOOKING CONFIRMED</AlertTitle>
                <AlertDescription>
                  Thank you for your booking! your payment has been successful
                  done and your booking is now confirmed.A confirmation email
                  has been sent to your email - [email protected].
                </AlertDescription>
              </Alert>
              <div className="lg:grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
                {/* Content */}
                <div className="lg:col-span-2">
                  <div className="space-y-5 lg:space-y-8">
                    <Card className="mt-8 start-0 py-8 lg:px-8">
                      <div>
                        <h3 className="text-2xl mb-4 font-semibold dark:text-white ">
                          Booking Details
                        </h3>
                        <Table>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">
                                Booking ID
                              </TableCell>
                              <TableCell>ABC123</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                First Name
                              </TableCell>
                              <TableCell>John</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Last Name
                              </TableCell>
                              <TableCell>Doe</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Price
                              </TableCell>
                              <TableCell>$99.99</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Email
                              </TableCell>
                              <TableCell>john@example.com</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Phone
                              </TableCell>
                              <TableCell>555-1234</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Card Number
                              </TableCell>
                              <TableCell>1234 5678 9012 3456</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                City
                              </TableCell>
                              <TableCell>New York</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                Address
                              </TableCell>
                              <TableCell>
                                123 Main St, New York, NY 10001
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                      <h3 className="text-2xl py-4 font-semibold dark:text-white ">
                        Booking Details Link
                      </h3>
                      <p className="text-primary">
                        https://www.example.com/booking-234
                      </p>
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
