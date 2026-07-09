import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import { LoadingProvider } from "@/components/LoadingContext";
import SiteLoader from "@/components/SiteLoader/SiteLoader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Redstone Driving School | Calgary's Trusted Driving School",
  description:
    "Learn to drive with confidence. Personalized, patient instruction from a certified Class 5 instructor serving Calgary, Airdrie, Chestermere & Cochrane.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <LoadingProvider>
          <SiteLoader />
          <SmoothScroll>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </LoadingProvider>
      </body>
    </html>
  );
}
