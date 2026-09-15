import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-green text-sm font-bold text-amber-50">
            বা
          </span>
          <span className="text-lg font-bold text-brand-green-dark">
            বাংলা জয়যাত্রা
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/80 sm:flex">
          <Link href="/#book" className="hover:text-brand-green">
            বইটি সম্পর্কে
          </Link>
          <Link href="/#author" className="hover:text-brand-green">
            লেখক পরিচিতি
          </Link>
          <Link href="/#order" className="hover:text-brand-green">
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
