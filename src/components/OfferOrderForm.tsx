"use client";

import { useState } from "react";

export default function OfferOrderForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand-green/20 bg-brand-green/5 p-8 text-center">
        <p className="text-4xl">🎉</p>
        <h3 className="mt-3 text-xl font-bold text-brand-green-dark">
          অর্ডারের জন্য আপনাকে ধন্যবাদ, {name}!
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground/70">
          আপনার অর্ডারটি আমরা পেয়েছি। শীঘ্রই আমরা আপনার সাথে যোগাযোগ করব এবং
          সারা বাংলাদেশে বিনামূল্যে ডেলিভারি দেওয়া হবে।
        </p>
      </div>
    );
  }

  return (
    <form
      action="https://formsubmit.co/mksarker2020@gmail.com"
      method="POST"
      onSubmit={() => setSubmitted(true)}
      className="space-y-5"
    >
      {/* Redirect back to this page after submission */}
      <input type="hidden" name="_next" value="https://banglajoyjatra.com/offer?submitted=1" />
      <input type="hidden" name="_subject" value="নতুন অর্ডার — ওয়েবসাইট স্পেশাল অফার" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

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
          value={name}
          onChange={(e) => setName(e.target.value)}
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
  );
}
