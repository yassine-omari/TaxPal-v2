import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const siteUrl = "https://tax-pal-v2.vercel.app/";
const title = "TaxPal - Accounting made simple for small businesses";
const description =
  "TaxPal is accounting software that helps small business owners manage invoices, expenses, and taxes without needing an accounting degree.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | TaxPal",
  },
  description,
  keywords: [
    "accounting software",
    "small business accounting",
    "invoicing",
    "expense tracking",
    "tax software",
    "bookkeeping",
  ],
  authors: [{ name: "TaxPal" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "TaxPal",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lexend.variable} h-full scroll-smooth bg-background antialiased`}
    >
      <body className="h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
