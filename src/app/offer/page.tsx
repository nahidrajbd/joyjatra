import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import OfferOrderForm from "@/components/OfferOrderForm";

export const metadata: Metadata = {
  title: "বিশেষ অফার — ওয়েবসাইটে অর্ডারে সারা বাংলাদেশে ফ্রি ডেলিভারি",
  description:
    "বাংলা জয়যাত্রা বইয়ের ওয়েবসাইট বিশেষ অফার — এখনই অর্ডার করুন এবং সারা বাংলাদেশে সম্পূর্ণ বিনামূল্যে হোম ডেলিভারি পান।",
};

export default function OfferPage() {
  return (
    <div className="flex min-h-full flex-col bg-background">
      <SiteHeader />

      <main className="flex flex-1 items-center justify-center px-5 py-16 sm:px-8">
        <div className="w-full max-w-md">
          {/* Offer header */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-brand-green-dark sm:text-3xl">
              ওয়েবসাইটে অর্ডারে{" "}
              <span className="text-brand-maroon">ফ্রি ডেলিভারি</span>
            </h1>
            <p className="mt-2 text-sm text-foreground/60">
              সারা বাংলাদেশে বিনামূল্যে হোম ডেলিভারি
            </p>
          </div>

          {/* Form card */}
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <OfferOrderForm />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
