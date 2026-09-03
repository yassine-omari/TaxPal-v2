"use client";

import { useState } from "react";
import Image from "next/image";
import {
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@headlessui/react";

const features = [
  {
    title: "Payroll",
    summary:
      "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
    image: "/payroll.avif",
  },
  {
    title: "Claim expenses",
    summary:
      "All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
    image: "/expenses.avif",
  },
  {
    title: "VAT handling",
    summary:
      "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
    image: "/vat-returns.avif",
  },
  {
    title: "Reporting",
    summary:
      "Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.",
    image: "/reporting.avif",
  },
];

const Features = () => {
  const [selectedIndex, setSelectedIndex] = useState(3);

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32"
    >
      <Image
        alt=""
        width={2245}
        height={1636}
        className=" absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        style={{
          color:"transparent"
        }}
        src="/background-features.avif"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="text-[32px] tracking-tight sm:leading-14 leading-10 text-white sm:text-[40px] md:text-[48px] font-lexend">
            Everything you need to run your books.
          </h2>
          <p className="mt-6 text-lg tracking-tight leading-8 text-blue-100">
            Well everything you need if you aren&rsquo;t that picky about
            minor details like tax compliance.
          </p>
        </div>
        <TabGroup
          as="div"
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
        >
          <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
            <TabList className="relative z-10 flex gap-x-4 px-4 whitespace-nowrap sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
              {features.map((feature, featureIndex) => {
                const isSelected = selectedIndex === featureIndex;
                return (
                  <div
                    key={feature.title}
                    className={`group relative rounded-full px-4 py-1.5 lg:rounded-l-xl lg:rounded-r-none lg:p-6 ${
                      isSelected
                        ? "bg-white lg:bg-white/10 lg:ring-1 lg:ring-white/10 lg:ring-inset"
                        : "hover:bg-white/10 lg:hover:bg-white/5"
                    }`}
                  >
                    <h3>
                      <Tab
                        className={`font-lexend text-lg not-data-focus:outline-hidden lg:text-white ${
                          isSelected
                            ? "text-blue-600"
                            : "text-blue-100 hover:text-white"
                        }`}
                      >
                        <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                        {feature.title}
                      </Tab>
                    </h3>
                    <p className={`mt-2.5 hidden text-sm leading-6 lg:block text-blue-100 group-hover:text-white ${
                      isSelected && "text-white"
                      }`}>
                      {feature.summary}
                    </p>
                  </div>
                );
              })}
            </TabList>
          </div>
          <TabPanels className="lg:col-span-7">
            {features.map((feature) => (
              <TabPanel key={feature.title}>
                <div className="relative sm:px-6 lg:hidden">
                  <div className="absolute -inset-x-4 -top-26 -bottom-17 bg-white/10 ring-1 ring-white/10 ring-inset sm:inset-x-0 sm:rounded-t-xl" />
                  <p className="relative mx-auto max-w-2xl text-base leading-7 text-white sm:text-center">
                    {feature.summary}
                  </p>
                </div>
                <div className="mt-10 w-180 overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-271.25">
                  <Image
                    alt=""
                    width={2174}
                    height={1464}
                    className="w-full"
                    loading="eager"
                    sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                    src={feature.image}
                  />
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </section>
  );
};

export default Features;
