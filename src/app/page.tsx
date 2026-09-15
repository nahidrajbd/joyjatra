import Image from "next/image";
import OrderForm from "@/components/OrderForm";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const PHONE = "০১৭৭৮৬৪৬৯৬৮";
const PHONE_TEL = "+8801778646968";
const EMAIL = "sales@banglajoyjatra.com";

const highlights = [
  "সহজ ও প্রাঞ্জল ভাষায় উপস্থাপনা",
  "পরীক্ষা-উপযোগী গুরুত্বপূর্ণ তথ্য ও বিশ্লেষণ",
  "অভিজ্ঞ ও পরীক্ষিত লেখকের রচনা",
  "সাম্প্রতিক তথ্য দ্বারা হালনাগাদকৃত",
];

const reasons = [
  "বর্তমান সময়ে বিসিএস প্রিলিমিনারি পরীক্ষার ব্যতিক্রমী প্রশ্নের উত্তর দেওয়ার জন্য নির্ভরযোগ্য বাংলা বই",
  "বাংলা একাডেমি প্রণীত প্রমিত বাংলা বানানের নিয়ম অনুযায়ী রচিত",
  "এনসিটিবি নির্ধারিত নবম-দশম শ্রেণির নতুন ব্যাকরণের সাথে আপডেট",
  "বাংলা সাহিত্যের ৩০০ জন কবি-সাহিত্যিক সম্পর্কে সমৃদ্ধ ও নির্ভুল তথ্য",
  "বাংলা ভাষা ও সাহিত্যের সকল টপিকের বিস্তারিত আলোচনা",
  "একসঙ্গে বিসিএস প্রিলিমিনারি ও লিখিত পরীক্ষার প্রস্তুতি",
  "বাংলা একাডেমি প্রণীত আধুনিক বাংলা অভিধানের গুরুত্বপূর্ণ ১০০০+ শব্দার্থ",
  "বিগত ৩০ বছরের চাকরি পরীক্ষার ৮০০০+ বহুনির্বাচনি প্রশ্নসংবলিত",
];

const examCategories = [
  "বিসিএস প্রিলিমিনারি পরীক্ষা",
  "বিসিএস লিখিত পরীক্ষা",
  "বিজেএস (বিচার বিভাগীয় চাকরি)",
  "নন-ক্যাডার নিয়োগ পরীক্ষা",
  "প্রাথমিক শিক্ষক নিয়োগ পরীক্ষা",
  "শিক্ষক নিবন্ধন পরীক্ষা",
  "বিশ্ববিদ্যালয় ভর্তি পরীক্ষা",
  "ব্যাংক নিয়োগ পরীক্ষা",
  "বিভিন্ন মন্ত্রণালয়ের নিয়োগ পরীক্ষা",
];

const faqs = [
  {
    q: "চাকরির জন্য বাংলা প্রস্তুতির জন্য কেন “বাংলা জয়যাত্রা” বইটি পড়া উচিত?",
    a: "“বাংলা জয়যাত্রা” বইটি চাকরির পরীক্ষার বাংলা অংশের জন্য সহজবোধ্য ভাষায়, সুশৃঙ্খলভাবে ও সাম্প্রতিক তথ্য দিয়ে সাজানো। বিসিএস, বিজেএস, নন-ক্যাডার, প্রাথমিক শিক্ষক নিয়োগ, শিক্ষক নিবন্ধন, বিশ্ববিদ্যালয় ভর্তি, ব্যাংক ও বিভিন্ন মন্ত্রণালয়ের নিয়োগ পরীক্ষা — সব ধরনের চাকরির পরীক্ষার বাংলা প্রস্তুতির জন্য এটি উপযোগী।",
  },
  {
    q: "বিসিএস প্রিলিমিনারি ও লিখিত পরীক্ষার জন্য বাংলা প্রস্তুতি কীভাবে নেব?",
    a: "বিসিএস প্রিলিমিনারি ও লিখিত — উভয় পরীক্ষার বাংলা অংশের জন্য গুরুত্বপূর্ণ তথ্য, বিশ্লেষণ ও মডেল উপস্থাপনা নিয়ে “বাংলা জয়যাত্রা” বইটি রচিত হয়েছে, যা ধাপে ধাপে প্রস্তুতিতে সহায়ক।",
  },
  {
    q: "এই বই কি ব্যাংক নিয়োগ ও শিক্ষক নিবন্ধন পরীক্ষার জন্যও উপযোগী?",
    a: "হ্যাঁ। ব্যাংক নিয়োগ পরীক্ষা, প্রাথমিক শিক্ষক নিয়োগ, শিক্ষক নিবন্ধন পরীক্ষা, বিশ্ববিদ্যালয় ভর্তি পরীক্ষা ও বিভিন্ন মন্ত্রণালয়ের নিয়োগ পরীক্ষায় আসা বাংলা বিষয়ের সাধারণ প্রশ্নপত্রের ধরন অনুসরণ করেই বইটি সাজানো হয়েছে।",
  },
  {
    q: "বইটি কীভাবে অর্ডার করব?",
    a: "ওয়েবসাইটের অর্ডার ফর্মে নাম, ফোন নম্বর ও ঠিকানা দিয়ে অনলাইনে অর্ডার করতে পারেন, অথবা সরাসরি ০১৭৭৮৬৪৬৯৬৮ নম্বরে কল করে অর্ডার করতে পারেন।",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Book",
      name: "বাংলা জয়যাত্রা",
      author: { "@type": "Person", name: "কামরুজজামান সরকার" },
      inLanguage: "bn",
      description:
        "চাকরির জন্য বাংলা প্রস্তুতির বই — বিসিএস প্রিলিমিনারি ও লিখিত, বিজেএস, নন-ক্যাডার, প্রাথমিক শিক্ষক নিয়োগ, শিক্ষক নিবন্ধন, বিশ্ববিদ্যালয় ভর্তি, ব্যাংক ও মন্ত্রণালয় নিয়োগ পরীক্ষার জন্য উপযোগী।",
      image: "https://banglajoyjatra.com/book-cover.png",
      url: "https://banglajoyjatra.com",
      publisher: { "@type": "Organization", name: "বাংলা জয়যাত্রা" },
      audience: {
        "@type": "Audience",
        audienceType:
          "বিসিএস, বিজেএস, নন-ক্যাডার, প্রাথমিক শিক্ষক নিয়োগ, শিক্ষক নিবন্ধন, বিশ্ববিদ্যালয় ভর্তি, ব্যাংক নিয়োগ ও মন্ত্রণালয় নিয়োগ পরীক্ষার্থী",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-screen items-center overflow-hidden text-amber-50">
          <Image
            src="/hero.jpg"
            alt=""
            fill
            priority
            aria-hidden="true"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, rgba(7,51,40,0.92) 0%, rgba(7,51,40,0.75) 42%, rgba(7,51,40,0.35) 75%)",
            }}
          />
          <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 py-24 sm:px-8 md:grid-cols-2">
            <div className="order-2 flex flex-col items-start gap-6 md:order-1">
              <span className="rounded-full border border-brand-gold/50 bg-white/5 px-4 py-1 text-xs font-medium tracking-wide text-brand-gold">
                ৩য় সংস্করণ
              </span>
              <h1 className="text-4xl font-bold leading-[1.15] sm:text-5xl">
                বাংলা জয়যাত্রা
              </h1>
              <p className="text-lg font-semibold text-brand-gold sm:text-xl">
                চাকরির জন্য বাংলা প্রস্তুতির সম্পূর্ণ গাইড
              </p>
              <p className="max-w-md text-base leading-relaxed text-amber-50/85 sm:text-lg">
                লিখেছেন{" "}
                <span className="font-semibold text-brand-gold">
                  কামরুজজামান সরকার
                </span>
                , বিসিএস (সাধারণ শিক্ষা), ৩১তম বিসিএস। বিসিএস প্রিলিমিনারি ও
                লিখিত পরীক্ষা থেকে শুরু করে ব্যাংক ও শিক্ষক নিয়োগ পরীক্ষা
                পর্যন্ত — বাংলা ভাষা ও সাহিত্যের গভীরতম দিকগুলো সহজ ও
                সুশৃঙ্খলভাবে তুলে ধরে এই বই।
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#order"
                  className="rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-green-dark shadow-lg transition hover:brightness-95"
                >
                  এখনই অর্ডার করুন
                </a>
                <a
                  href="#book"
                  className="rounded-full border border-amber-50/40 px-6 py-3 text-sm font-semibold text-amber-50 transition hover:bg-white/10"
                >
                  বিস্তারিত দেখুন
                </a>
              </div>
            </div>
            <div className="order-1 flex justify-center md:order-2">
              <Image
                src="/book-cover.png"
                alt="বাংলা জয়যাত্রা বইয়ের প্রচ্ছদ"
                width={296}
                height={433}
                priority
                className="w-full max-w-[260px] animate-float sm:max-w-[300px]"
              />
            </div>
          </div>
        </section>

        {/* Highlights strip */}
        <section className="border-b border-black/5 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 py-8 sm:px-8 md:grid-cols-4">
            {highlights.map((h) => (
              <div key={h} className="flex items-start gap-2">
                <span className="mt-1 text-brand-gold">✦</span>
                <p className="text-sm text-foreground/80">{h}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Book details */}
        <section id="book" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
            <div className="md:col-span-3">
              <p className="mb-2 text-sm font-semibold tracking-wide text-brand-maroon">
                বইটি সম্পর্কে
              </p>
              <h2 className="mb-6 text-3xl font-bold text-brand-green-dark">
                “বাংলা জয়যাত্রা” বইয়ের বিস্তারিত
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-foreground/80">
                <p>
                  “বাংলা জয়যাত্রা” একটি যত্ন সহকারে রচিত গ্রন্থ, যেখানে বাংলা
                  ভাষা, সাহিত্য ও সংশ্লিষ্ট বিষয়াবলি সহজবোধ্য ভাষায় সাজানো
                  হয়েছে। লেখক কামরুজজামান সরকারের দীর্ঘদিনের অভিজ্ঞতা ও
                  গবেষণার আলোকে বইটি পাঠকের জন্য একটি নির্ভরযোগ্য দিকনির্দেশনা
                  হয়ে উঠেছে।
                </p>
                <p>
                  পাঠ্যবিষয়ের গভীর বিশ্লেষণ, সাম্প্রতিক তথ্য এবং সুশৃঙ্খল
                  উপস্থাপনার মাধ্যমে বইটি শিক্ষার্থী, চাকরিপ্রার্থী ও সাধারণ
                  পাঠক — সকলের জন্যই সমান উপযোগী করে তৈরি করা হয়েছে।
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 rounded-xl border border-black/10 bg-zinc-50 p-6 sm:grid-cols-3">
                <div>
                  <p className="text-xs text-foreground/50">ভাষা</p>
                  <p className="font-semibold text-foreground">বাংলা</p>
                </div>
                <div>
                  <p className="text-xs text-foreground/50">লেখক</p>
                  <p className="font-semibold text-foreground">
                    কামরুজজামান সরকার
                  </p>
                </div>
                <div>
                  <p className="text-xs text-foreground/50">প্রকাশনা</p>
                  <p className="font-semibold text-foreground">
                    বাংলা জয়যাত্রা
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="sticky top-24 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="mb-1 text-lg font-bold text-brand-green-dark">
                  যোগাযোগ
                </h3>
                <ul className="mb-5 space-y-3 text-sm text-foreground/80">
                  <li className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                      ☎
                    </span>
                    <a href={`tel:${PHONE_TEL}`} className="font-medium hover:text-brand-green">
                      {PHONE}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                      ✉
                    </span>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="font-medium hover:text-brand-green"
                    >
                      {EMAIL}
                    </a>
                  </li>
                </ul>
                <a
                  href="#order"
                  className="block w-full rounded-full bg-brand-maroon px-6 py-3 text-center text-sm font-semibold text-white shadow transition hover:bg-brand-maroon/90"
                >
                  অনলাইনে অর্ডার করুন ↓
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why read this book */}
        <section id="why" className="bg-zinc-50">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
            <p className="mb-2 text-sm font-semibold tracking-wide text-brand-maroon">
              কেন এই বই
            </p>
            <h2 className="mb-8 max-w-2xl text-3xl font-bold text-brand-green-dark">
              বইটি কেন পড়বেন?
            </h2>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {reasons.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-3 rounded-xl border border-black/10 bg-white px-4 py-4 text-sm leading-relaxed text-foreground/85"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-xs text-brand-gold">
                    ✦
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Who is this book for */}
        <section id="jobs" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="mb-2 text-sm font-semibold tracking-wide text-brand-maroon">
            কাদের জন্য এই বই
          </p>
          <h2 className="mb-4 max-w-2xl text-3xl font-bold text-brand-green-dark">
            যেসব চাকরির পরীক্ষার বাংলা প্রস্তুতিতে সহায়ক
          </h2>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-foreground/80">
            “বাংলা জয়যাত্রা” বইটি নির্দিষ্ট কোনো একটি পরীক্ষার জন্য নয় —
            বাংলাদেশের প্রায় সব ধরনের প্রতিযোগিতামূলক চাকরির পরীক্ষার বাংলা
            অংশের প্রস্তুতির জন্য উপযোগী করে তৈরি করা হয়েছে।
          </p>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {examCategories.map((c) => (
              <li
                key={c}
                className="flex items-center gap-3 rounded-xl border border-black/10 bg-zinc-50 px-4 py-3 text-sm font-medium text-foreground/85"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                  ✓
                </span>
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* Author */}
        <section id="author" className="bg-zinc-50">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3">
              <div className="flex justify-center md:col-span-1">
                <Image
                  src="/author.png"
                  alt="কামরুজজামান সরকার"
                  width={355}
                  height={413}
                  className="h-56 w-48 rounded-2xl object-cover shadow-lg sm:h-64 sm:w-56"
                />
              </div>
              <div className="md:col-span-2">
                <p className="mb-2 text-sm font-semibold tracking-wide text-brand-maroon">
                  লেখক পরিচিতি
                </p>
                <h2 className="mb-4 text-3xl font-bold text-brand-green-dark">
                  কামরুজজামান সরকার
                </h2>
                <p className="mb-2 text-sm font-medium text-brand-gold">
                  বিসিএস (সাধারণ শিক্ষা), ৩১তম বিসিএস
                </p>
                <p className="text-base leading-relaxed text-foreground/80">
                  কামরুজজামান সরকার একজন শিক্ষাবিদ ও লেখক, যিনি ৩১তম বিসিএস
                  পরীক্ষায় সাধারণ শিক্ষা ক্যাডারে উত্তীর্ণ হন। দীর্ঘদিনের
                  শিক্ষকতা ও গবেষণার অভিজ্ঞতা থেকে তিনি “বাংলা জয়যাত্রা”
                  গ্রন্থটি রচনা করেছেন, যা পাঠকদের কাছে বাংলা ভাষা ও সাহিত্যের
                  একটি নির্ভরযোগ্য দিকনির্দেশক হিসেবে বিবেচিত।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="mb-2 text-sm font-semibold tracking-wide text-brand-maroon">
            সচরাচর জিজ্ঞাসা
          </p>
          <h2 className="mb-8 max-w-2xl text-3xl font-bold text-brand-green-dark">
            প্রায়শই জিজ্ঞাসিত প্রশ্ন
          </h2>
          <div className="max-w-3xl divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
            {faqs.map((f) => (
              <details key={f.q} className="group p-5 sm:p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground marker:content-none">
                  {f.q}
                  <span className="shrink-0 text-brand-gold transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Order form */}
        <section id="order" className="bg-zinc-50">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
              <div className="md:col-span-2">
                <p className="mb-2 text-sm font-semibold tracking-wide text-brand-maroon">
                  অর্ডার করুন
                </p>
                <h2 className="mb-4 text-3xl font-bold text-brand-green-dark">
                  আজই সংগ্রহ করুন “বাংলা জয়যাত্রা”
                </h2>
                <p className="text-base leading-relaxed text-foreground/80">
                  ফর্মটি পূরণ করুন, আমরা দ্রুততম সময়ে আপনার সাথে যোগাযোগ করে
                  বই পৌঁছে দেওয়ার ব্যবস্থা করব। চাইলে সরাসরি ফোন বা ইমেইলেও
                  যোগাযোগ করতে পারেন।
                </p>
                <div className="mt-8 space-y-3 text-sm text-foreground/80">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="flex items-center gap-3 hover:text-brand-green"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                      ☎
                    </span>
                    <span className="font-medium">{PHONE}</span>
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-3 hover:text-brand-green"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                      ✉
                    </span>
                    <span className="font-medium">{EMAIL}</span>
                  </a>
                </div>
              </div>

              <div className="md:col-span-3">
                <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
                  <OrderForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
