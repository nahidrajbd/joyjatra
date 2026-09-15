import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-bengali",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://banglajoyjatra.com"),
  title: "বাংলা জয়যাত্রা",
  description:
    "কামরুজজামান সরকার (বিসিএস সাধারণ শিক্ষা, ৩১তম বিসিএস) রচিত বই 'বাংলা জয়যাত্রা' — অর্ডার করতে যোগাযোগ করুন ০১৭৭৮৬৪৬৯৬৮।",
  keywords: [
    "বাংলা জয়যাত্রা",
    "কামরুজজামান সরকার",
    "বিসিএস বই",
    "banglajoyjatra",
  ],
  openGraph: {
    title: "বাংলা জয়যাত্রা",
    description:
      "কামরুজজামান সরকার (বিসিএস সাধারণ শিক্ষা, ৩১তম বিসিএস) রচিত বই 'বাংলা জয়যাত্রা'",
    url: "https://banglajoyjatra.com",
    siteName: "বাংলা জয়যাত্রা",
    locale: "bn_BD",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="bn" className={`${hindSiliguri.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-bengali">{children}</body>
    </html>
  );
}
