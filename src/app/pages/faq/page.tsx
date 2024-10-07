import LandingLayout from "../../../components/layout/Landing";
import { HeroDetails } from "../../../components/Hero";
import { Footer } from "../../../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

export default function Faq() {
  return (
    <main className="flex flex-1 flex-col">
      <LandingLayout>
        <div>
          <HeroDetails title="Faq"></HeroDetails>
          <section className="py-12 container">
            <div className="mx-auto">
              {/* Title */}
              <div
                className="jos mx-auto  mb-12 items-center text-center"
                data-jos_animation="zoom"
              >
                <h1 className="text-4xl mb-2 font-bold tracking-tight text-primary md:text-5xl">
                  General Questions
                </h1>
                <p className="text-lg text-muted-foreground">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
              <div className="md:grid md:grid-cols-2  md:gap-12 xl:gap-12">
                <div className="relative jos" data-jos_animation="fade-right">
                  <img
                    className="rounded-xl"
                    src="/assets/img/faq/1.jpg"
                    alt="Image Description"
                  />
                </div>
                {/* End Col */}
                <div
                  className="jos mt-5 sm:mt-10 lg:mt-0"
                  data-jos_animation="fade-left"
                >
                  <Card>
                    <div className="space-y-6 sm:space-y-8">
                      <Accordion
                        type="single"
                        defaultValue="item-1"
                        collapsible
                      >
                        <CardContent>
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="font-bold text-xl hover:text-primary ">
                              <span className="rounded-full px-3 py-2 bg-primary text-white">
                                01
                              </span>{" "}
                              Do you need a business Plan?
                            </AccordionTrigger>
                            <AccordionContent className="text-lg">
                              On the other hand, we denounce with righteous
                              indignation and dislike men who are so beguiled
                              and demoralized by the charms of pleasure of the
                              moment, so blinded by desire, that they cannot
                              foresee the pain and trouble that are bound to
                              ensue; and equal blame belongs to those who fail
                              in their duty through weakness.
                            </AccordionContent>
                          </AccordionItem>
                        </CardContent>
                        <CardContent>
                          <AccordionItem value="item-2">
                            <AccordionTrigger className="font-bold text-xl hover:text-primary ">
                              <span className="rounded-full px-3 py-2 bg-primary text-white">
                                02
                              </span>{" "}
                              How Long Should a Business Plan Be ?
                            </AccordionTrigger>
                            <AccordionContent className="text-lg">
                              On the other hand, we denounce with righteous
                              indignation and dislike men who are so beguiled
                              and demoralized by the charms of pleasure of the
                              moment, so blinded by desire, that they cannot
                              foresee the pain and trouble that are bound to
                              ensue; and equal blame belongs to those who fail
                              in their duty through weakness.
                            </AccordionContent>
                          </AccordionItem>
                        </CardContent>
                        <CardContent>
                          <AccordionItem value="item-3">
                            <AccordionTrigger className="font-bold text-xl hover:text-primary ">
                              <span className="rounded-full px-3 py-2 bg-primary text-white">
                                03
                              </span>{" "}
                              What Payment Gateway Do you Support?
                            </AccordionTrigger>
                            <AccordionContent className="text-lg">
                              On the other hand, we denounce with righteous
                              indignation and dislike men who are so beguiled
                              and demoralized by the charms of pleasure of the
                              moment, so blinded by desire, that they cannot
                              foresee the pain and trouble that are bound to
                              ensue; and equal blame belongs to those who fail
                              in their duty through weakness.
                            </AccordionContent>
                          </AccordionItem>
                        </CardContent>
                      </Accordion>
                    </div>
                  </Card>
                </div>
                {/* End Col */}
              </div>
            </div>
          </section>
        </div>
      </LandingLayout>
      <Footer />
    </main>
  );
}
