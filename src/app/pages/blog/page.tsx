import LandingLayout from "../../../components/layout/Landing";
import { HeroDetails } from "../../../components/Hero";
import { Footer } from "../../../components/Footer";
import React from "react";
import { SignupForm } from "../../../components/ui/signup";

export default function Blog() {
  return (
    <main className="flex flex-1 flex-col">
      <LandingLayout>
        <div>
          <HeroDetails title="Blog"></HeroDetails>{" "}
          <section className="py-12 container">
            <div className="max-w-full  md:pb-4 mx-auto">
              <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
                {/* Content */}
                <div className="lg:col-span-2">
                  <div className="py-8 lg:pe-8">
                    <div className="space-y-5 lg:space-y-8">
                      <h2 className="text-3xl font-bold lg:text-5xl dark:text-white">
                        There Are Many Variations Available
                      </h2>
                      <div className="flex items-center gap-x-5">
                        <a
                          className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-800 dark:text-neutral-200"
                          href="#"
                        >
                          Company News
                        </a>
                        <p className="text-xs sm:text-sm text-gray-800 dark:text-neutral-200">
                          January 18, 2023
                        </p>
                      </div>
                      <p className="text-lg text-gray-800 dark:text-neutral-200">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem.
                      </p>
                      <p className="text-lg text-gray-800 dark:text-neutral-200">
                        In a free hour when our power of choice is untrammelled
                        and when nothing prevents our being able to do what we
                        like best, every pleasure is to be welcomed and every
                        pain avoided. But in certain circumstances and owing to
                        the claims of duty or the obligations of business it
                        will frequently occur that pleasures have to be
                        repudiated and annoyances accepted. The wise man
                        therefore always holds in these matters to this
                        principle of selection.
                      </p>
                      <div className="text-center">
                        <div className="grid lg:grid-cols-2 gap-3">
                          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                            <figure className="relative w-full h-60">
                              <img
                                className="size-full absolute top-0 start-0 object-cover rounded-xl"
                                src="/assets/img/blog/2.jpg"
                                alt="Image Description"
                              />
                            </figure>
                            <figure className="relative w-full h-60">
                              <img
                                className="size-full absolute top-0 start-0 object-cover rounded-xl"
                                src="/assets/img/blog/1.jpg"
                                alt="Image Description"
                              />
                            </figure>
                          </div>
                          <figure className="relative w-full h-72 sm:h-96 lg:h-full">
                            <img
                              className="size-full absolute top-0 start-0 object-cover rounded-xl"
                              src="/assets/img/blog/3.jpg"
                              alt="Image Description"
                            />
                          </figure>
                        </div>
                      </div>
                      <p className="text-lg text-gray-800 dark:text-neutral-200">
                        Power of choice is untrammelled and when nothing
                        prevents our being able to do what we like best, every
                        pleasure is to be welcomed and every pain avoided. But
                        in certain circumstances and owing to the claims of duty
                        or the obligations of business it will frequently occur
                        that pleasures have to be repudiated and annoyances
                        accepted. The wise man therefore always holds in these
                        matters to this principle of selection.
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Content */}
                {/* Sidebar */}
                <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-neutral-800">
                  <div className="sticky top-0 start-0 py-8 lg:ps-8">
                    <div className="space-y-6">
                      <h1 className="text-2xl font-bold text-primary">
                        Recent Posts
                      </h1>
                      {/* Media */}
                      <a className="group flex items-center gap-x-6" href="#">
                        <div className="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                          <img
                            className="size-full absolute top-0 start-0 object-cover rounded-lg"
                            src="/assets/img/blog/bs-1.jpg"
                            alt="Image Description"
                          />
                        </div>
                        <div className="grow">
                          <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500">
                            It is a long established fact that a reader
                          </span>
                          <p>09 May, 2024</p>
                        </div>
                      </a>
                      {/* End Media */}
                      {/* Media */}
                      <a className="group flex items-center gap-x-6" href="#">
                        <div className="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                          <img
                            className="size-full absolute top-0 start-0 object-cover rounded-lg"
                            src="/assets/img/blog/bs-1.jpg"
                            alt="Image Description"
                          />
                        </div>
                        <div className="grow">
                          <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500">
                            It is a long established fact that a reader
                          </span>
                          <p>09 May, 2024</p>
                        </div>
                      </a>
                      {/* End Media */}
                      {/* Media */}
                      <a className="group flex items-center gap-x-6" href="#">
                        <div className="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                          <img
                            className="size-full absolute top-0 start-0 object-cover rounded-lg"
                            src="/assets/img/blog/bs-1.jpg"
                            alt="Image Description"
                          />
                        </div>
                        <div className="grow">
                          <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500">
                            It is a long established fact that a reader
                          </span>
                          <p>09 May, 2024</p>
                        </div>
                      </a>
                      {/* End Media */}
                    </div>
                  </div>
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
