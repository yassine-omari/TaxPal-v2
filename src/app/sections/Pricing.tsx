import Link from "next/link";
import CheckIcon from "../icons/CheckIcon";
import PricingUnderline from "../icons/PricingUnderline";

const plans = [
  {
    name: "Starter",
    price: "$9",
    description:
      "Good for anyone who is self-employed and just getting started.",
    features: [
      "Send 10 quotes and invoices",
      "Connect up to 2 bank accounts",
      "Track up to 15 expenses per month",
      "Manual payroll support",
      "Export up to 3 reports",
    ],
    featured: false,
  },
  {
    name: "Small business",
    price: "$15",
    description: "Perfect for small / medium sized businesses.",
    features: [
      "Send 25 quotes and invoices",
      "Connect up to 5 bank accounts",
      "Track up to 50 expenses per month",
      "Automated payroll support",
      "Export up to 12 reports",
      "Bulk reconcile transactions",
      "Track in multiple currencies",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$39",
    description: "For even the biggest enterprise companies.",
    features: [
      "Send unlimited quotes and invoices",
      "Connect up to 15 bank accounts",
      "Track up to 200 expenses per month",
      "Automated payroll support",
      "Export up to 25 reports, including TPS",
    ],
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="bg-slate-900 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="md:text-center flex flex-col justify-center items-center">
          <h2 className="section-title text-white">
            <span className="relative whitespace-nowrap">
              <PricingUnderline />
              <span className="relative">Simple pricing,</span>
            </span>{" "}
            for everyone.
          </h2>
          <p className="mt-4 section-p text-[#8FA1B9] tracking-normal max-w-3xl">
            It doesn’t matter what size your business is, our software won’t
            work well for you.
          </p>
        </div>
        <div className="-mx-4 mt-16.5 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          {plans.map((plan) => (
            <section
              key={plan.name}
              className={`flex flex-col rounded-3xl px-6 sm:px-8 ${
                plan.featured
                  ? "order-first bg-blue-600 py-8 lg:order-0"
                  : "lg:py-8"
              }`}
            >
              <h3 className="mt-5.5 text-lg leading-8 text-white font-lexend">
                {plan.name}
              </h3>
              <p
                className={`mt-2.5 text-base leading-7 ${
                  plan.featured ? "text-white" : "text-slate-400"
                }`}
              >
                {plan.description}
              </p>
              <p className="order-first text-5xl font-light tracking-tight text-white font-lexend">
                {plan.price}
              </p>
              <ul
                role="list"
                className={`order-last mt-10 flex flex-col gap-y-3 text-sm ${
                  plan.featured ? "text-white" : "text-slate-200"
                }`}
              >
                {plan.features.map((feature) => (
                  <li key={feature} className="flex flex-row items-center ">
                    <span
                      className={
                        plan.featured ? "text-white" : "text-slate-400"
                      }
                    >
                      <CheckIcon />
                    </span>
                    <span className="ml-4">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/register"
                aria-label={`Get started with the ${plan.name} plan for ${plan.price}`}
                className={`mt-8 inline-flex items-center justify-center rounded-full py-2.5 px-4 text-sm ${
                  plan.featured
                    ? "bg-white font-semibold text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    : "group ring-1 ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white"
                }`}
              >
                Get started
              </Link>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
