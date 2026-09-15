import Image from "next/image";
import OrderForm from "@/components/OrderForm";

const PHONE = "০১৭৭৮৬৪৬৯৬৮";
const PHONE_TEL = "+8801778646968";
const EMAIL = "sales@banglajoyjatra.com";

const highlights = [
  "সহজ ও প্রাঞ্জল ভাষায় উপস্থাপনা",
  "পরীক্ষা-উপযোগী গুরুত্বপূর্ণ তথ্য ও বিশ্লেষণ",
  "অভিজ্ঞ ও পরীক্ষিত লেখকের রচনা",
  "সাম্প্রতিক তথ্য দ্বারা হালনাগাদকৃত",
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-green text-sm font-bold text-amber-50">
              বা
            </span>
            <span className="text-lg font-bold text-brand-green-dark">
              বাংলা জয়যাত্রা
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/80 sm:flex">
            <a href="#book" className="hover:text-brand-green">
              বইটি সম্পর্কে
            </a>
            <a href="#author" className="hover:text-brand-green">
              লেখক পরিচিতি
            </a>
            <a href="#order" className="hover:text-brand-green">
              অর্ডার
            </a>
          </nav>
          <a
            href="#order"
            className="rounded-full bg-brand-maroon px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-maroon/90 sm:px-5"
          >
            অর্ডার করুন
          </a>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section
          className="relative overflow-hidden text-amber-50"
          style={{
            background:
              "linear-gradient(135deg, var(--brand-green) 0%, var(--brand-green-dark) 70%)",
          }}
        >
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24">
            <div className="order-2 flex flex-col items-start gap-6 md:order-1">
              <span className="rounded-full border border-brand-gold/50 bg-white/5 px-4 py-1 text-xs font-medium tracking-wide text-brand-gold">
                নতুন প্রকাশিত বই
              </span>
              <h1 className="text-4xl font-bold leading-[1.15] sm:text-5xl">
                বাংলা জয়যাত্রা
              </h1>
              <p className="max-w-md text-base leading-relaxed text-amber-50/85 sm:text-lg">
                লিখেছেন{" "}
                <span className="font-semibold text-brand-gold">
                  কামরুজজামান সরকার
                </span>
                , বিসিএস (সাধারণ শিক্ষা), ৩১তম বিসিএস। একটি বই, যা বাংলা ভাষা ও
                সাহিত্যের গভীরতম দিকগুলো সহজ ও সুশৃঙ্খলভাবে তুলে ধরে।
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
                width={500}
                height={500}
                priority
                className="w-full max-w-[320px] rounded-sm shadow-2xl"
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

      {/* Footer */}
      <footer className="border-t border-black/10 bg-brand-green-dark text-amber-50/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-8 text-center text-sm sm:px-8">
          <p className="text-lg font-bold text-amber-50">বাংলা জয়যাত্রা</p>
          <p>লেখক: কামরুজজামান সরকার, বিসিএস (সাধারণ শিক্ষা), ৩১তম বিসিএস</p>
          <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span>{PHONE}</span>
            <span>{EMAIL}</span>
            <span>banglajoyjatra.com</span>
          </p>
          <p className="mt-2 text-xs text-amber-50/50">
            © {new Date().getFullYear()} বাংলা জয়যাত্রা। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </footer>
    </div>
  );
}
