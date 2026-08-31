import Image from "next/image";
import Link from "next/link";
import HeroUnderline from "../icons/HeroUnderline";
import PlayIcon from "../icons/PlayIcon";

const Hero = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl text-5xl font-medium tracking-tight sm:leading-19.75 leading-14 text-slate-900 sm:text-7xl font-lexend">
        Accounting{" "}
        <span className="relative whitespace-nowrap text-blue-600">
          <HeroUnderline />
          <span className="relative">made simple</span>
        </span>{" "}
        for small businesses.
      </h1>
      <p className="section-p mx-auto mt-6 max-w-2xl tracking-tight ">
        Most bookkeeping software is accurate, but hard to use. We make the
        opposite trade-off, and hope you don&rsquo;t get audited.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Link
          href="/register"
          className="group inline-flex items-center justify-center rounded-full py-2.5 px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
        >
          Get 6 months free
        </Link>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className="group inline-flex ring-1 items-center justify-center rounded-full py-2.5 px-4 text-sm ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300"
        >
          <PlayIcon />
          <span className="ml-3">Watch video</span>
        </a>
      </div>
      <div className="mt-36 lg:mt-44">
        <p className="text-base text-slate-900 font-lexend">
          Trusted by these six companies so far
        </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          <li>
            <ul
              role="list"
              className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
            >
              <li className="flex">
                <Image
                  src="/transistor.svg"
                  alt="Transistor"
                  width={158}
                  height={48}
                />
              </li>
              <li className="flex">
                <Image src="/tuple.svg" alt="Tuple" width={105} height={48} />
              </li>
              <li className="flex">
                <Image
                  src="/statickit.svg"
                  alt="StaticKit"
                  width={127}
                  height={48}
                />
              </li>
            </ul>
          </li>
          <li>
            <ul
              role="list"
              className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
            >
              <li className="flex">
                <Image
                  src="/mirage.svg"
                  alt="Mirage"
                  width={138}
                  height={48}
                />
              </li>
              <li className="flex">
                <Image
                  src="/laravel.svg"
                  alt="Laravel"
                  width={136}
                  height={48}
                />
              </li>
              <li className="flex">
                <Image
                  src="/statamic.svg"
                  alt="Statamic"
                  width={147}
                  height={48}
                />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
