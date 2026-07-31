import type { Metadata } from "next";
import sanitizeHtml from 'sanitize-html';
import { Inter, Poppins, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import { LazyMotion, domMax, LayoutGroup } from 'framer-motion';
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

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Redstone Driving School | Calgary's Trusted Driving School",
    template: "%s | Redstone Driving School",
  },
  description:
    "Learn to drive with confidence. Personalized, patient instruction from a certified Class 5 instructor serving Calgary, Airdrie, Chestermere & Cochrane. Offering basic to elite online and in-car driving courses.",
  keywords: [
    "Driving School Calgary",
    "Class 5 Driving Instructor",
    "Driving Lessons Airdrie",
    "Driving Lessons Chestermere",
    "Online Driving Course Alberta",
    "Redstone Driving School",
    "Insurance Reduction Course",
    "Beginner Driver Education",
  ],
  authors: [{ name: "Redstone Driving School" }],
  creator: "Redstone Driving School",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://redstonedriving.com",
    title: "Redstone Driving School | Calgary's Trusted Driving School",
    description: "Learn to drive with confidence. Personalized, patient instruction from a certified Class 5 instructor serving Calgary, Airdrie, Chestermere & Cochrane.",
    siteName: "Redstone Driving School",
  },
  twitter: {
    card: "summary_large_image",
    title: "Redstone Driving School | Calgary's Trusted Driving School",
    description: "Learn to drive with confidence. Personalized instruction serving Calgary and surrounding areas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.webp',
    apple: '/logo.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DrivingSchool",
              "name": "Redstone Driving School",
              "image": "https://redstonedriving.com/logo.webp",
              "@id": "https://redstonedriving.com",
              "url": "https://redstonedriving.com",
              "telephone": "403-763-9365",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Calgary",
                "addressRegion": "AB",
                "addressCountry": "CA"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "84"
              }
            }))
          }}
        />
      </head>
      <body>
        <LazyMotion features={domMax}>
          <LayoutGroup>
            <LoadingProvider>
              <SiteLoader />
              <Navbar />
              <SmoothScroll>
                <main>{children}</main>
                <Footer />
              </SmoothScroll>
            </LoadingProvider>
          </LayoutGroup>
        </LazyMotion>
      </body>
    </html>
  );
}
