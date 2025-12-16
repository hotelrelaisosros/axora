"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout34() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <div>
                  <h1 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Expert installation
                  </h1>
                  <p>Our technicians fit your parts right the first time</p>
                  <div className="mt-5 flex items-center gap-4 md:mt-6">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Schedule
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <div>
                  <h1 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Custom builds
                  </h1>
                  <p>Transform your bike into something entirely your own</p>
                  <div className="mt-5 flex items-center gap-4 md:mt-6">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Design
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <div>
                  <h1 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Maintenance support
                  </h1>
                  <p>Keep your machine running strong with our guidance</p>
                  <div className="mt-5 flex items-center gap-4 md:mt-6">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Contact
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
