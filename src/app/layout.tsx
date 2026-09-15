import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-bengali",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = "https://banglajoyjatra.com";
const TITLE =
  "বাংলা জয়যাত্রা | চাকরির জন্য বাংলা প্রস্তুতি — বিসিএস, ব্যাংক, শিক্ষক নিবন্ধন";
const DESCRIPTION =
  "চাকরির জন্য বাংলা প্রস্তুতির বই 'বাংলা জয়যাত্রা' — বিসিএস প্রিলিমিনারি ও লিখিত, বিজেএস, নন-ক্যাডার, প্রাথমিক শিক্ষক নিয়োগ, শিক্ষক নিবন্ধন, বিশ্ববিদ্যালয় ভর্তি, ব্যাংক ও মন্ত্রণালয় নিয়োগ পরীক্ষার জন্য উপযোগী। লেখক কামরুজজামান সরকার। অর্ডার: ০১৭৭৮৬৪৬৯৬৮।";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | বাংলা জয়যাত্রা",
  },
  description: DESCRIPTION,
  keywords: [
    "বাংলা জয়যাত্রা",
    "কামরুজজামান সরকার",
    "চাকুরির জন্য বাংলা প্রস্তুতি",
    "চাকরির জন্য বাংলা প্রস্তুতি",
    "বিসিএস প্রিলিমিনারি বাংলা প্রস্তুতি",
    "বিসিএস লিখিত পরীক্ষা বাংলা প্রস্তুতি",
    "বিসিএস বাংলা বই",
    "বিজেএস বাংলা প্রস্তুতি",
    "নন ক্যাডার বাংলা প্রস্তুতি",
    "প্রাথমিক শিক্ষক নিয়োগ বাংলা প্রস্তুতি",
    "শিক্ষক নিবন্ধন বাংলা প্রস্তুতি",
    "বিশ্ববিদ্যালয় ভর্তি পরীক্ষা বাংলা প্রস্তুতি",
    "ব্যাংক নিয়োগ পরীক্ষা বাংলা প্রস্তুতি",
    "মন্ত্রণালয় নিয়োগ পরীক্ষা বাংলা প্রস্তুতি",
    "banglajoyjatra",
  ],
  authors: [{ name: "কামরুজজামান সরকার" }],
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "বাংলা জয়যাত্রা",
    locale: "bn_BD",
    type: "website",
    images: [
      {
        url: "/book-cover.png",
        width: 500,
        height: 500,
        alt: "বাংলা জয়যাত্রা বইয়ের প্রচ্ছদ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/book-cover.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="bn" className={`${hindSiliguri.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-bengali">{children}</body>
    </html>
  );
}
