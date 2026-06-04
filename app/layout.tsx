import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
 export const metadata: Metadata = {
  title: {
    default: "Fazuha Store | Premium E-commerce Experience",
    template: "%s | Fazuha Eclat",
  },

  description:
    "Shop premium luxury products at Fazuha Store. Best quality fashion, accessories, and lifestyle items with fast delivery.",

  keywords: [
    "ecommerce",
    "luxury shopping",
    "online store",
    "fashion",
    "accessories",
    "buy online",
    "Fazuha store",
  ],

  authors: [{ name: "Fazuha Eclat" }],
  creator: "Fazuha Eclat",
  publisher: "Fazuha Eclat",

  metadataBase: new URL("https://fazuhaeclat.com"),

  openGraph: {
    title: "Fazuha Eclat | Premium E-commerce",
    description:
      "Discover luxury fashion and lifestyle products at the best price.",
    url: "https://fazuhaeclat.com",
    siteName: "Fazuha Eclat",
    images: [
      {
        url: "/assets/logo/fazuhaweb.png", // public folder image
        width: 1200,
        height: 630,
        alt: "Fazuha Eclat",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fazuha Eclat | Premium E-commerce",
    description:
      "Shop luxury products online with fast delivery.",
    images: ["/assets/logo/fazuhaweb.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header/>
        {children}
        <Footer/>
        <WhatsAppButton/>
        </body>
    
    </html>
  );
}
