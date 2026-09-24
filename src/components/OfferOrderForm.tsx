"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function OfferOrderForm() {
  const searchParams = useSearchParams();
  const submitted = searchParams.get("submitted") === "1";

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand-green/20 bg-brand-green/5 p-8 text-center">
        <p className="text-4xl">🎉</p>
        <h3 className="mt-3 text-xl font-bold text-brand-green-dark">
          অর্ডারের জন্য আপনাকে ধন্যবাদ!
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground/70">
          আপনার অর্ডারটি আমরা পেয়েছি। শীঘ্রই আমরা আপনার সাথে যোগাযোগ করব।
        </p>
        <a
          href="/offer"
          className="mt-5 inline-block text-sm font-semibold text-brand-maroon hover:underline"
        >
          আরেকটি অর্ডার করুন →
        </a>
      </div>
    );
  }

  return (
    <div>
      {/* Price & Book details */}
      <div className="mb-6 overflow-hidden rounded-xl border border-brand-gold/30 bg-gradient-to-br from-amber-50/80 via-white to-amber-50/40 p-4 sm:p-5 shadow-sm">
        <div className="flex items-center gap-3.5 border-b border-amber-200/60 pb-3.5">
          <div className="relative h-16 w-12 flex-shrink-0 overflow-hidden rounded-md border border-black/5 shadow-sm">
            <Image
              src="/book-cover.png"
              alt="বাংলা জয়যাত্রা বইয়ের প্রচ্ছদ"
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div>
            <h2 className="text-base font-bold text-foreground sm:text-lg">
              বাংলা জয়যাত্রা
            </h2>
            <p className="text-xs text-foreground/60">
              কামরুজজামান সরকার • বিসিএস ও চাকরির প্রস্তুতি
            </p>
          </div>
        </div>

        <div className="mt-3.5 space-y-2.5 text-sm">
          <div className="flex items-center justify-between text-foreground/70">
            <span className="font-medium">কভার মূল্য:</span>
            <span className="font-semibold text-foreground/50 line-through">
              ৭৯০ টাকা
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold text-brand-green-dark">
                বিক্রয়মূল্য :
              </span>
              <span className="rounded-full bg-brand-maroon/10 px-2 py-0.5 text-xs font-bold text-brand-maroon">
                ২৪০ টাকা ছাড়
              </span>
            </div>
            <span className="text-2xl font-black text-brand-maroon">
              ৫৫০ টাকা
            </span>
          </div>

          <div className="flex items-center justify-between border-t border-amber-200/60 pt-2.5">
            <span className="font-medium text-foreground/80">
              ডেলিভারি চার্জ:
            </span>
            <span className="font-bold text-emerald-700">
              ফ্রি{" "}
              <span className="text-xs font-normal text-foreground/60">
                (সিমিত সময়ের জন্য)
              </span>
            </span>
          </div>
        </div>
      </div>

      <form
        action="https://formsubmit.co/mksarker2020@gmail.com"
        method="POST"
        className="space-y-5"
      >
        <input
          type="hidden"
          name="_next"
          value="https://banglajoyjatra.com/offer?submitted=1"
        />
        <input
          type="hidden"
          name="_subject"
          value="নতুন অর্ডার — ওয়েবসাইট স্পেশাল অফার"
        />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="বইয়ের নাম" value="বাংলা জয়যাত্রা" />
        <input
          type="hidden"
          name="মূল্য বিবরণ"
          value="বিক্রয়মূল্য : ৫৫০ টাকা (কভার মূল্য: ৭৯০ টাকা, ডেলিভারি চার্জ: ফ্রি)"
        />

      <div>
        <label
          htmlFor="offer-name"
          className="mb-1.5 block text-sm font-semibold text-foreground/80"
        >
          নাম <span className="text-brand-maroon">*</span>
        </label>
        <input
          id="offer-name"
          type="text"
          name="name"
          required
          placeholder="আপনার পূর্ণ নাম লিখুন"
          className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
        />
      </div>

      <div>
        <label
          htmlFor="offer-address"
          className="mb-1.5 block text-sm font-semibold text-foreground/80"
        >
          ঠিকানা <span className="text-brand-maroon">*</span>
        </label>
        <textarea
          id="offer-address"
          name="address"
          required
          rows={3}
          placeholder="বাসা/হোল্ডিং, রোড, থানা, জেলা"
          className="w-full resize-none rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
        />
      </div>

      <div>
        <label
          htmlFor="offer-phone"
          className="mb-1.5 block text-sm font-semibold text-foreground/80"
        >
          ফোন নম্বর <span className="text-brand-maroon">*</span>
        </label>
        <input
          id="offer-phone"
          type="tel"
          name="phone"
          required
          pattern="^(\+?88)?01[3-9]\d{8}$"
          title="সঠিক বাংলাদেশি মোবাইল নম্বর দিন, যেমন: ০১৭৭৮৬৪৬৯৬৮"
          placeholder="০১XXXXXXXXX"
          className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-brand-maroon px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-brand-maroon/90 active:scale-[0.98]"
      >
        এখনই অর্ডার করুন →
      </button>

      <p className="text-center text-xs text-foreground/50">
        অর্ডার নিশ্চিত করতে আমরা আপনার ফোন নম্বরে যোগাযোগ করব।
      </p>
    </form>
  </div>
  );
}
