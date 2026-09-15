import Link from "next/link";

const PHONE = "০১৭৭৮৬৪৬৯৬৮";
const EMAIL = "sales@banglajoyjatra.com";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-brand-green-dark text-amber-50/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-8 text-center text-sm sm:px-8">
        <p className="text-lg font-bold text-amber-50">বাংলা জয়যাত্রা</p>
        <p>লেখক: কামরুজজামান সরকার, বিসিএস (সাধারণ শিক্ষা), ৩১তম বিসিএস</p>
        <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <span>{PHONE}</span>
          <span>{EMAIL}</span>
          <span>banglajoyjatra.com</span>
        </p>
        <nav className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-amber-50/70">
          <Link href="/terms" className="hover:text-amber-50">
            শর্তাবলী
          </Link>
          <span className="text-amber-50/30">•</span>
          <Link href="/privacy" className="hover:text-amber-50">
            গোপনীয়তা নীতি
          </Link>
          <span className="text-amber-50/30">•</span>
          <Link href="/refund-policy" className="hover:text-amber-50">
            রিফান্ড নীতি
          </Link>
        </nav>
        <p className="mt-2 text-xs text-amber-50/50">
          © {new Date().getFullYear()} বাংলা জয়যাত্রা। সর্বস্বত্ব সংরক্ষিত।
        </p>
      </div>
    </footer>
  );
}
