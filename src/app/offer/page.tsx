import { Suspense } from "react";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import OfferOrderForm from "@/components/OfferOrderForm";

export const metadata: Metadata = {
  title: "বিশেষ অফার — ওয়েবসাইটে অর্ডারে সারা বাংলাদেশে ফ্রি ডেলিভারি",
  description:
    "বাংলা জয়যাত্রা বইয়ের ওয়েবসাইট বিশেষ অফার — কভার মূল্য ৭৯০ টাকা, বিক্রয়মূল্য ৫৫০ টাকা এবং সারা বাংলাদেশে ফ্রি ডেলিভারি। এখনই অর্ডার করুন!",
};

export default function OfferPage() {
  return (
    <div className="flex min-h-full flex-col bg-background">
      <SiteHeader />

      <main className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 sm:py-16">
        <div className="w-full max-w-lg">
          {/* Offer header */}
          <div className="mb-6 text-center">
            <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-brand-maroon/10 px-3 py-1 text-xs font-bold text-brand-maroon">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-maroon" />
              সীমিত সময়ের অফার
            </span>
            <h1 className="text-2xl font-bold text-brand-green-dark sm:text-3xl">
              ওয়েবসাইটে অর্ডারে{" "}
              <span className="text-brand-maroon">ফ্রি ডেলিভারি</span>
            </h1>
            <p className="mt-1.5 text-sm text-foreground/60">
              সারা বাংলাদেশে সম্পূর্ণ বিনামূল্যে হোম ডেলিভারি
            </p>
          </div>

          {/* Form card */}
          <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm sm:p-7">
            <Suspense>
              <OfferOrderForm />
            </Suspense>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
