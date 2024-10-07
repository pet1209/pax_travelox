import LandingLayout from "../../../components/layout/Landing";
import { HeroDetails } from "../../../components/Hero";
import { Footer } from "../../../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

export default function GuideSingle() {
  return (
    <main className="flex flex-1 flex-col">
      <LandingLayout>
        <div>
          <HeroDetails title="Guide Single"></HeroDetails>
          <section className="py-12 container">
            <div className="lg:px-32 max-w-full  md:pb-4 mx-auto">
              <div className="space-y-5 lg:space-y-16">
                <div className="group sm:flex rounded-xl">
                  <div className="flex-shrink-0 relative rounded-xl overflow-hidden h-[200px] sm:w-[400px] sm:h-[370px] w-full">
                    <img
                      className="size-full absolute top-0 start-0 object-cover"
                      src="/assets/img/team/single.jpg"
                      alt="Image Description"
                    />
                  </div>
                  <div className="grow lg:ml-8">
                    <Card>
                      <CardContent>
                        <div className="p-4 flex flex-col h-full sm:p-6">
                          <h3 className="text-lg sm:text-2xl font-semibold text-muted-foreground">
                            Marie R Lippert
                          </h3>
                          <h3 className="text-lg sm:text-lg font-semibold text-primary">
                            Tour Guide
                          </h3>
                          <p className="mt-2 text-gray-600 dark:text-neutral-400">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters packages and web page
                            editors now usepackages and web page editors now
                            use.
                          </p>
                          <p className="mt-6 gap-x-2 inline-flex text-gray-600 dark:text-neutral-400">
                            <Phone className="text-primary" /> +2 123 4567 897
                          </p>
                          <p className="mt-3 gap-x-2 inline-flex text-gray-600 dark:text-neutral-400">
                            <Mail className="text-primary" /> email protected
                          </p>
                          <p className="mt-6 gap-x-4 inline-flex text-gray-600 dark:text-neutral-400">
                            <Facebook /> <Twitter /> <Youtube /> <Linkedin />{" "}
                            <Instagram />
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="group sm:flex rounded-xl">
                  <div className="grow">
                    <div className="pr-4 flex flex-col h-full ">
                      <h3 className="text-lg sm:text-2xl font-semibold text-muted-foreground">
                        Biography
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-neutral-400">
                        Sed ut perspiciatis unde omnis totam rem chitecto beatae
                        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                        quia voluptas sit aspernatur aut odit aut fugit, sed
                        quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Neque porro quisquam est, qui
                        dolorem ipsum quia dolor sit amet, consectetur, adipisci
                        velit, sed quia non numquam eius modi tempora incidunt
                        ut labore et dolore magnam aliquam quaerat voluptatem.
                      </p>
                      <p className="mt-2 text-gray-600 dark:text-neutral-400">
                        All the Lorem Ipsum generators on the Internet tend to
                        repeat predefined chunks as necessary, making this the
                        first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures, to generate Lorem
                        Ipsum which looks reasonable.
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 relative rounded-xl overflow-hidden h-[200px] sm:w-[400px] sm:h-[300px] w-full">
                    <img
                      className="size-full absolute top-0 start-0 object-cover"
                      src="/assets/img/team/bio.jpg"
                      alt="Image Description"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </LandingLayout>
      <Footer />
    </main>
  );
}
