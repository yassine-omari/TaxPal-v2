import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/icons/Logo";

const Register = () => {
  return (
    <div className="relative flex min-h-full shrink-0 justify-center md:px-12 lg:px-0">
      <div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28">
        <main className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
          <div className="flex">
            <Link aria-label="Home" href="/">
              <Logo />
            </Link>
          </div>

          <h2 className="mt-20 text-lg leading-8 font-semibold text-gray-900">
            Get started for free
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-700">
            Already registered?{" "}
            <Link className="font-medium text-blue-600 hover:underline" href="/login">
              Sign in
            </Link>{" "}
            to your account.
          </p>

          <form action="#" className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
            <div>
              <label htmlFor="first_name" className="mb-3 block text-sm leading-6 font-medium text-gray-700">
                First name
              </label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                autoComplete="given-name"
                required
                className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-hidden focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="last_name" className="mb-3 block text-sm leading-6 font-medium text-gray-700">
                Last name
              </label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                autoComplete="family-name"
                required
                className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-hidden focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div className="col-span-full">
              <label htmlFor="email" className="mb-3 block text-sm leading-6 font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-hidden focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div className="col-span-full">
              <label htmlFor="password" className="mb-3 block text-sm leading-6 font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-hidden focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div className="col-span-full">
              <label htmlFor="referral_source" className="mb-3 block text-sm leading-6 font-medium text-gray-700">
                How did you hear about us?
              </label>
              <select
                id="referral_source"
                name="referral_source"
                className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2.5 pr-8 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-hidden focus:ring-blue-500 sm:text-sm"
              >
                <option>AltaVista search</option>
                <option>Super Bowl commercial</option>
                <option>Our route 34 city bus ad</option>
                <option>The &ldquo;Never Use This&rdquo; podcast</option>
              </select>
            </div>

            <div className="col-span-full">
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 hover:text-slate-100 active:bg-blue-800 active:text-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <span>
                  Sign up <span aria-hidden="true">→</span>
                </span>
              </button>
            </div>
          </form>
        </main>
      </div>

      <div className="hidden sm:contents lg:relative lg:block lg:flex-1">
        <Image
          alt=""
          src="/background-auth.jpg"
          fill
          priority
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Register;