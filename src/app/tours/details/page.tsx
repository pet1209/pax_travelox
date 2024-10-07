import { Button } from "@/components/ui/button";
import LandingLayout from "../../../components/layout/Landing";
import { HeroDetails } from "../../../components/Hero";
import { Footer } from "../../../components/Footer";
import React from "react";
import CountryTable from "../../../components/CountryTable";
import { Card } from "../../../components/ui/card";
import { CheckCircle, File } from "lucide-react";
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
import Timeline from "../../../components/Timeline";
import dynamic from "next/dynamic";

// Dynamically import the MapComponent with SSR disabled
const MapComponentWithNoSSR = dynamic(() => import("../../../components/Map"), {
  ssr: false,
});

export default function Destination1() {
  return (
    <main className="flex flex-1 flex-col">
      <LandingLayout>
        <div>
          <HeroDetails title="Tour"></HeroDetails>
          <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="lg:grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
              {/* Content */}
              <div className="lg:col-span-2">
                <div className="py-8 lg:pe-8">
                  <div className="space-y-5 lg:space-y-8">
                    <a
                      className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-500"
                      href="/"
                    >
                      <svg
                        className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                      Back
                    </a>
                    <h2 className="text-3xl font-bold lg:text-5xl dark:text-white">
                      Norway Lake View
                    </h2>
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

                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold dark:text-white">
                        Included And Excluded
                      </h3>
                      <p className="text-lg text-gray-800 dark:text-neutral-200">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga.
                      </p>
                      <CountryTable />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold dark:text-white">
                        Tour Plan
                      </h3>
                      <p className="text-lg text-gray-800 dark:text-neutral-200">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga.
                      </p>
                      <Timeline />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold dark:text-white">
                        Location Map
                      </h3>
                      <p className="text-lg text-gray-800 dark:text-neutral-200">
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment, so
                        blinded by desire, that they cannot foresee the pain and
                        trouble that are bound to ensue; and equal blame belongs
                        to those who fail in their duty through weakness of
                        will, which is the same as saying through shrinking from
                        toil and pain.
                      </p>
                      <MapComponentWithNoSSR />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold dark:text-white">
                        Reviews
                      </h3>
                      <div className="grid grid-cols-12 max-w-sm sm:max-w-full mx-auto">
                        <div className="col-span-12 lg:col-span-10 ">
                          <div className="sm:flex gap-6">
                            <img
                              src="https://pagedone.io/asset/uploads/1704364459.png"
                              alt="Robert image"
                              className="w-32 h-32"
                            />
                            <div className="text">
                              <p className="font-medium text-lg leading-8 text-gray-900 mb-2">
                                Robert Karmazov
                              </p>
                              <div className="flex lg:hidden items-center gap-2 lg:justify-between w-full mb-5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={30}
                                  height={30}
                                  viewBox="0 0 30 30"
                                  fill="none"
                                >
                                  <g clipPath="url(#clip0_13624_2090)">
                                    <path
                                      d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                      fill="#FBBF24"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_13624_2090">
                                      <rect
                                        width={30}
                                        height={30}
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={30}
                                  height={30}
                                  viewBox="0 0 30 30"
                                  fill="none"
                                >
                                  <g clipPath="url(#clip0_13624_2090)">
                                    <path
                                      d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                      fill="#FBBF24"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_13624_2090">
                                      <rect
                                        width={30}
                                        height={30}
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={30}
                                  height={30}
                                  viewBox="0 0 30 30"
                                  fill="none"
                                >
                                  <g clipPath="url(#clip0_13624_2090)">
                                    <path
                                      d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                      fill="#FBBF24"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_13624_2090">
                                      <rect
                                        width={30}
                                        height={30}
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={30}
                                  height={30}
                                  viewBox="0 0 30 30"
                                  fill="none"
                                >
                                  <g clipPath="url(#clip0_13624_2090)">
                                    <path
                                      d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                      fill="#FBBF24"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_13624_2090">
                                      <rect
                                        width={30}
                                        height={30}
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={30}
                                  height={30}
                                  viewBox="0 0 30 30"
                                  fill="none"
                                >
                                  <g clipPath="url(#clip0_13624_2090)">
                                    <path
                                      d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                      fill="#FBBF24"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_13624_2090">
                                      <rect
                                        width={30}
                                        height={30}
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                              <p className="font-normal text-base leading-7 text-gray-400 mb-4 lg:pr-8">
                                There are many variations of passages the
                                majority have suffered in some injected humour
                                or randomised words which don't look even
                                slightly believable.
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="cursor-pointers flex items-center gap-2">
                                  <a
                                    href="javascript:;"
                                    className="font-semibold text-lg cursor-pointer leading-8 text-primary whitespace-nowrap"
                                  >
                                    Reply
                                  </a>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={22}
                                    height={22}
                                    viewBox="0 0 22 22"
                                    fill="none"
                                  >
                                    <path
                                      d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998"
                                      stroke="#4F46E5"
                                      strokeWidth="1.6"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                                <p className="lg:hidden font-medium text-sm leading-7 text-gray-400 lg:text-center whitespace-nowrap">
                                  Nov 01, 2023
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-12 lg:col-span-10 ">
                          <div className="sm:flex gap-6">
                            <img
                              src="https://pagedone.io/asset/uploads/1704364459.png"
                              alt="Robert image"
                              className="w-32 h-32"
                            />
                            <div className="text">
                              <p className="font-medium text-lg leading-8 text-gray-900 mb-2">
                                Robert Karmazov
                              </p>
                              <div className="flex lg:hidden items-center gap-2 lg:justify-between w-full mb-5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={30}
                                  height={30}
                                  viewBox="0 0 30 30"
                                  fill="none"
                                >
                                  <g clipPath="url(#clip0_13624_2090)">
                                    <path
                                      d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                      fill="#FBBF24"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_13624_2090">
                                      <rect
                                        width={30}
                                        height={30}
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={30}
                                  height={30}
                                  viewBox="0 0 30 30"
                                  fill="none"
                                >
                                  <g clipPath="url(#clip0_13624_2090)">
                                    <path
                                      d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                      fill="#FBBF24"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_13624_2090">
                                      <rect
                                        width={30}
                                        height={30}
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={30}
                                  height={30}
                                  viewBox="0 0 30 30"
                                  fill="none"
                                >
                                  <g clipPath="url(#clip0_13624_2090)">
                                    <path
                                      d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                      fill="#FBBF24"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_13624_2090">
                                      <rect
                                        width={30}
                                        height={30}
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={30}
                                  height={30}
                                  viewBox="0 0 30 30"
                                  fill="none"
                                >
                                  <g clipPath="url(#clip0_13624_2090)">
                                    <path
                                      d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                      fill="#FBBF24"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_13624_2090">
                                      <rect
                                        width={30}
                                        height={30}
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={30}
                                  height={30}
                                  viewBox="0 0 30 30"
                                  fill="none"
                                >
                                  <g clipPath="url(#clip0_13624_2090)">
                                    <path
                                      d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                      fill="#FBBF24"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_13624_2090">
                                      <rect
                                        width={30}
                                        height={30}
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                              <p className="font-normal text-base leading-7 text-gray-400 mb-4 lg:pr-8">
                                There are many variations of passages the
                                majority have suffered in some injected humour
                                or randomised words which don't look even
                                slightly believable.
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="cursor-pointers flex items-center gap-2">
                                  <a
                                    href="javascript:;"
                                    className="font-semibold text-lg cursor-pointer leading-8 text-primary whitespace-nowrap"
                                  >
                                    Reply
                                  </a>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={22}
                                    height={22}
                                    viewBox="0 0 22 22"
                                    fill="none"
                                  >
                                    <path
                                      d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998"
                                      stroke="#4F46E5"
                                      strokeWidth="1.6"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                                <p className="lg:hidden font-medium text-sm leading-7 text-gray-400 lg:text-center whitespace-nowrap">
                                  Nov 01, 2023
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-12 lg:col-span-10 ">
                          <div className="sm:flex gap-6">
                            <img
                              src="https://pagedone.io/asset/uploads/1704364459.png"
                              alt="Robert image"
                              className="w-32 h-32"
                            />
                            <div className="text">
                              <p className="font-medium text-lg leading-8 text-gray-900 mb-2">
                                Robert Karmazov
                              </p>
                              <div className="flex lg:hidden items-center gap-2 lg:justify-between w-full mb-5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={30}
                                  height={30}
                                  viewBox="0 0 30 30"
                                  fill="none"
                                >
                                  <g clipPath="url(#clip0_13624_2090)">
                                    <path
                                      d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                      fill="#FBBF24"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_13624_2090">
                                      <rect
                                        width={30}
                                        height={30}
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={30}
                                  height={30}
                                  viewBox="0 0 30 30"
                                  fill="none"
                                >
                                  <g clipPath="url(#clip0_13624_2090)">
                                    <path
                                      d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                      fill="#FBBF24"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_13624_2090">
                                      <rect
                                        width={30}
                                        height={30}
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={30}
                                  height={30}
                                  viewBox="0 0 30 30"
                                  fill="none"
                                >
                                  <g clipPath="url(#clip0_13624_2090)">
                                    <path
                                      d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                      fill="#FBBF24"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_13624_2090">
                                      <rect
                                        width={30}
                                        height={30}
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={30}
                                  height={30}
                                  viewBox="0 0 30 30"
                                  fill="none"
                                >
                                  <g clipPath="url(#clip0_13624_2090)">
                                    <path
                                      d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                      fill="#FBBF24"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_13624_2090">
                                      <rect
                                        width={30}
                                        height={30}
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={30}
                                  height={30}
                                  viewBox="0 0 30 30"
                                  fill="none"
                                >
                                  <g clipPath="url(#clip0_13624_2090)">
                                    <path
                                      d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                      fill="#FBBF24"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_13624_2090">
                                      <rect
                                        width={30}
                                        height={30}
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                              <p className="font-normal text-base leading-7 text-gray-400 mb-4 lg:pr-8">
                                There are many variations of passages the
                                majority have suffered in some injected humour
                                or randomised words which don't look even
                                slightly believable.
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="cursor-pointers flex items-center gap-2">
                                  <a
                                    href="javascript:;"
                                    className="font-semibold text-lg cursor-pointer leading-8 text-primary whitespace-nowrap"
                                  >
                                    Reply
                                  </a>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={22}
                                    height={22}
                                    viewBox="0 0 22 22"
                                    fill="none"
                                  >
                                    <path
                                      d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998"
                                      stroke="#4F46E5"
                                      strokeWidth="1.6"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                                <p className="lg:hidden font-medium text-sm leading-7 text-gray-400 lg:text-center whitespace-nowrap">
                                  Nov 01, 2023
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-12 lg:col-span-10 ">
                          <div className="sm:flex gap-6">
                            <img
                              src="https://pagedone.io/asset/uploads/1704364459.png"
                              alt="Robert image"
                              className="w-32 h-32"
                            />
                            <div className="text">
                              <p className="font-medium text-lg leading-8 text-gray-900 mb-2">
                                Robert Karmazov
                              </p>
                              <div className="flex lg:hidden items-center gap-2 lg:justify-between w-full mb-5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={30}
                                  height={30}
                                  viewBox="0 0 30 30"
                                  fill="none"
                                >
                                  <g clipPath="url(#clip0_13624_2090)">
                                    <path
                                      d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                      fill="#FBBF24"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_13624_2090">
                                      <rect
                                        width={30}
                                        height={30}
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={30}
                                  height={30}
                                  viewBox="0 0 30 30"
                                  fill="none"
                                >
                                  <g clipPath="url(#clip0_13624_2090)">
                                    <path
                                      d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                      fill="#FBBF24"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_13624_2090">
                                      <rect
                                        width={30}
                                        height={30}
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={30}
                                  height={30}
                                  viewBox="0 0 30 30"
                                  fill="none"
                                >
                                  <g clipPath="url(#clip0_13624_2090)">
                                    <path
                                      d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                      fill="#FBBF24"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_13624_2090">
                                      <rect
                                        width={30}
                                        height={30}
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={30}
                                  height={30}
                                  viewBox="0 0 30 30"
                                  fill="none"
                                >
                                  <g clipPath="url(#clip0_13624_2090)">
                                    <path
                                      d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                      fill="#FBBF24"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_13624_2090">
                                      <rect
                                        width={30}
                                        height={30}
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={30}
                                  height={30}
                                  viewBox="0 0 30 30"
                                  fill="none"
                                >
                                  <g clipPath="url(#clip0_13624_2090)">
                                    <path
                                      d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                                      fill="#FBBF24"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_13624_2090">
                                      <rect
                                        width={30}
                                        height={30}
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                              <p className="font-normal text-base leading-7 text-gray-400 mb-4 lg:pr-8">
                                There are many variations of passages the
                                majority have suffered in some injected humour
                                or randomised words which don't look even
                                slightly believable.
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="cursor-pointers flex items-center gap-2">
                                  <a
                                    href="javascript:;"
                                    className="font-semibold text-lg cursor-pointer leading-8 text-primary whitespace-nowrap"
                                  >
                                    Reply
                                  </a>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={22}
                                    height={22}
                                    viewBox="0 0 22 22"
                                    fill="none"
                                  >
                                    <path
                                      d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998"
                                      stroke="#4F46E5"
                                      strokeWidth="1.6"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                                <p className="lg:hidden font-medium text-sm leading-7 text-gray-400 lg:text-center whitespace-nowrap">
                                  Nov 01, 2023
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Content */}
              {/* Sidebar */}
              <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-neutral-800">
                <Card className="mt-8 start-0 py-8 lg:px-8">
                  <div>
                    <h3 className="text-2xl mb-4 font-semibold dark:text-white ">
                      Book This Tour
                    </h3>
                    <div className="text-start  items-center space-y-6">
                      <div className="pb-2 sm:pb-0 sm:flex-[1_0_0%]">
                        <Label htmlFor="destination">Destination</Label>
                        <Input
                          type="text"
                          id="destination"
                          placeholder="New York, USA"
                        />
                      </div>
                      <div className="pt-2 sm:pt-0 sm:ps-3  sm:flex-[1_0_0%] dark:border-gray-700">
                        <Label htmlFor="checkin">Check in</Label>
                        <Input
                          type="date"
                          id="checkin"
                          placeholder="MM/ DD / YY"
                        />
                      </div>
                      <div className="pt-2 sm:pt-0 sm:ps-3  sm:flex-[1_0_0%] dark:border-gray-700">
                        <Label htmlFor="checkout">Check Out</Label>
                        <Input
                          type="date"
                          id="checkout"
                          placeholder="MM/ DD / YY"
                        />
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
                              <SelectItem value="adventure">
                                Adventure Tours
                              </SelectItem>
                              <SelectItem value="city">City Tours</SelectItem>
                              <SelectItem value="couple">
                                Blueberry Tours
                              </SelectItem>
                              <SelectItem value="group">Group Tours</SelectItem>
                              <SelectItem value="weekend">
                                Weekend Tours
                              </SelectItem>
                              <SelectItem value="business">
                                Business tours
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="pt-4 sm:pt-4  sm:block sm:flex-[0_0_auto] ">
                        <Button
                          size={"lg"}
                          className="justify-center items-center text-lg w-full"
                        >
                          <CheckCircle className="size-5 mr-2" /> Book Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              {/* End Sidebar */}
            </div>
          </div>
        </div>
      </LandingLayout>
      <Footer />
    </main>
  );
}
