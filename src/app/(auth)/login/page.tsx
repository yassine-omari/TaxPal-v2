import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/icons/Logo";

const Login = () => {
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
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-700">
            Don&apos;t have an account?{" "}
            <Link className="font-medium text-blue-600 hover:underline" href="/register">
              Sign up
            </Link>{" "}
            for a free trial.
          </p>

          <form action="#" className="mt-10 grid grid-cols-1 gap-y-8">
            <div>
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

            <div>
              <label htmlFor="password" className="mb-3 block text-sm leading-6 font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-hidden focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 hover:text-slate-100 active:bg-blue-800 active:text-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <span>
                  Sign in <span aria-hidden="true">→</span>
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

export default Login;