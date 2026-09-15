import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-green-dark/35 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-gold text-sm font-bold text-brand-green-dark">
            বা
          </span>
          <span className="text-lg font-bold text-amber-50">
            বাংলা জয়যাত্রা
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-amber-50/80 sm:flex">
          <Link href="/#book" className="hover:text-brand-gold">
            বইটি সম্পর্কে
          </Link>
          <Link href="/#jobs" className="hover:text-brand-gold">
            কাদের জন্য
          </Link>
          <Link href="/#author" className="hover:text-brand-gold">
            লেখক পরিচিতি
          </Link>
          <Link href="/#faq" className="hover:text-brand-gold">
            প্রশ্নোত্তর
          </Link>
          <Link href="/#order" className="hover:text-brand-gold">
            অর্ডার
          </Link>
        </nav>
        <Link
          href="/#order"
          className="rounded-full bg-brand-maroon px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-maroon/90 sm:px-5"
        >
          অর্ডার করুন
        </Link>
      </div>
    </header>
  );
}
