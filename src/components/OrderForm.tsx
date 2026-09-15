"use client";

import { useState, type FormEvent } from "react";

const PHONE_TEL = "+8801778646968";

export default function OrderForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="rounded-2xl border border-brand-green/20 bg-brand-green/5 p-6 text-center">
        <p className="text-2xl">✅</p>
        <h3 className="mt-2 text-lg font-bold text-brand-green-dark">
          অর্ডারের জন্য ধন্যবাদ, {name}!
        </h3>
        <p className="mt-2 text-sm text-foreground/70">
          আপনার অর্ডারটি আমরা পেয়েছি। নিশ্চিতকরণের জন্য শীঘ্রই{" "}
          <span className="font-medium">{phone}</span> নম্বরে যোগাযোগ করা
          হবে।
        </p>
        <a
          href={`tel:${PHONE_TEL}`}
          className="mt-4 inline-block text-sm font-semibold text-brand-maroon hover:underline"
        >
          এখনই কল করুন →
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="mb-1 block text-sm font-medium text-foreground/80"
        >
          নাম
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="আপনার পূর্ণ নাম"
          className="w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-sm text-foreground outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-1 block text-sm font-medium text-foreground/80"
        >
          ফোন নম্বর
        </label>
        <input
          id="phone"
          type="tel"
          required
          pattern="^(\+?88)?01[3-9]\d{8}$"
          title="সঠিক বাংলাদেশি মোবাইল নম্বর দিন, যেমন: ০১৭৭৮৬৪৬৯৬৮"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="০১XXXXXXXXX"
          className="w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-sm text-foreground outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
        />
      </div>

      <div>
        <label
          htmlFor="address"
          className="mb-1 block text-sm font-medium text-foreground/80"
        >
          ঠিকানা
        </label>
        <textarea
          id="address"
          required
          rows={3}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="বাসা/হোল্ডিং, রোড, থানা, জেলা"
          className="w-full resize-none rounded-lg border border-black/15 bg-white px-4 py-2.5 text-sm text-foreground outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-brand-maroon px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-brand-maroon/90"
      >
        অর্ডার নিশ্চিত করুন
      </button>
      <p className="text-center text-xs text-foreground/50">
        অর্ডার নিশ্চিতকরণের জন্য আমরা আপনার সাথে ফোনে যোগাযোগ করব।
      </p>
    </form>
  );
}
