"use client";

import { useState } from "react";
import Image from "next/image";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
import Reporting from "../icons/Reporting";
import Inventory from "../icons/Inventory";
import Contacts from "../icons/Contacts";

const features = [
  {
    title: "Reporting",
    summary: "Stay on top of things with always up-to-date reporting features.",
    description:
      "We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.",
    image: "/profit-loss.webp",
    icon: Reporting,
    iconBg: "bg-blue-600",
  },
  {
    title: "Inventory",
    summary:
      "Never lose track of what’s in stock with accurate inventory tracking.",
    description:
      "We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.",
    image: "/inventory.webp",
    icon: Inventory,
    iconBg: "bg-blue-600",
  },
  {
    title: "Contacts",
    summary:
      "Organize all of your contacts, service providers, and invoices in one place.",
    description:
      "This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.",
    image: "/contacts.webp",
    icon: Contacts,
    iconBg: "bg-blue-600",
  },
];

const SecondaryFeatures = () => {
  const [selectedIndex, setSelectedIndex] = useState(2);

  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pt-20 pb-14 sm:pt-32 sm:pb-20 lg:pb-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="section-title">
            Simplify everyday business tasks.
          </h2>
          <p className="mt-4 section-p mx-auto">
            Because you&rsquo;d probably be a little confused if we suggested
            you complicate your everyday business tasks instead.
          </p>
        </div>

        {/* Mobile: static stacked list, no tabs */}
        <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title}>
                <div className="mx-auto max-w-2xl">
                  <div className={`w-9 rounded-lg ${feature.iconBg}`}>
                    <Icon />
                  </div>
                  <h3 className="mt-6.5 text-sm font-medium text-blue-600">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-xl leading-8 text-slate-900 font-lexend">
                    {feature.summary}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                </div>
                <div className="relative mt-10 pb-10">
                  <div className="absolute -inset-x-4 top-8 bottom-0 bg-slate-200 sm:-inset-x-6" />
                  <div className="relative mx-auto w-211 overflow-hidden rounded-xl bg-white shadow-lg ring-1 shadow-slate-900/5 ring-slate-500/10">
                    <Image
                      alt=""
                      width={1688}
                      height={856}
                      className="w-full"
                      sizes="52.75rem"
                      src={feature.image}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: interactive tab switcher */}
        <TabGroup
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
          className="hidden lg:mt-20 lg:block"
        >
          <TabList className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => {
              const Icon = feature.icon;
              const isSelected = selectedIndex === featureIndex;
              return (
                <div
                  key={feature.title}
                  className={`relative ${
                    isSelected ? "" : "opacity-75 hover:opacity-100"
                  }`}
                >
                  <div
                    className={`w-9 rounded-lg ${
                      isSelected ? "bg-blue-600" : "bg-slate-500"
                    }`}
                  >
                    <Icon />
                  </div>
                  <h3
                    className={`mt-6.5 text-sm font-medium ${
                      isSelected ? "text-blue-600" : "text-slate-600"
                    }`}
                  >
                    <Tab className="not-data-focus:outline-hidden">
                      <span className="absolute inset-0" />
                      {feature.title}
                    </Tab>
                  </h3>
                  <p className="mt-2.5 text-xl leading-8 text-slate-900 font-lexend">
                    {feature.summary}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </TabList>
          <TabPanels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <TabPanel
                  static
                  key={feature.title}
                  className={`px-5 transition duration-500 ease-in-out not-data-focus:outline-hidden ${
                    featureIndex === selectedIndex ? "" : "opacity-60"
                  }`}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                >
                  <div className="w-211 overflow-hidden rounded-xl bg-white shadow-lg ring-1 shadow-slate-900/5 ring-slate-500/10">
                    <Image
                      alt=""
                      width={1688}
                      height={856}
                      className="w-full"
                      sizes="52.75rem"
                      src={feature.image}
                    />
                  </div>
                </TabPanel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-slate-900/10 ring-inset" />
          </TabPanels>
        </TabGroup>
      </div>
    </section>
  );
};

export default SecondaryFeatures;
