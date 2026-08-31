import Link from "next/link";
import Logo from "../icons/Logo";
import XIcon from "../icons/XIcon";
import GithubIcon from "../icons/GithubIcon";

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <Link aria-label="Home" href="#" className="flex justify-center">
            <Logo />
          </Link>
          <nav className="mt-10 text-sm leading-6" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm  text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                href="#features"
              >
                Features
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                href="#testimonials"
              >
                Testimonials
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                href="#pricing"
              >
                Pricing
              </a>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <a className="group" aria-label="TaxPal on X" href="#">
              <XIcon />
            </a>
            <a className="group" aria-label="TaxPal on GitHub" href="#">
              <GithubIcon />
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} TaxPal. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
