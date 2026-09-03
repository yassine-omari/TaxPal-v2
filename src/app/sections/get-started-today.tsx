import Image from "next/image";
import Link from "next/link";

const GetStartedToday = () => {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        alt=""
        width={2347}
        height={1244}
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src="/background-call-to-action.avif"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="section-title text-white">
            Get started today
          </h2>
          <p className="mt-4 section-p text-white">
            It’s time to take control of your books. Buy our software so you
            can feel like you’re doing something productive.
          </p>
          <Link
            href="/register"
            className="group inline-flex items-center justify-center rounded-full py-2.5 px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
          >
            Get 6 months free
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStartedToday;
