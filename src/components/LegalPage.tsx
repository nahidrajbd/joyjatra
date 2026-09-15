import type { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <h1 className="mb-2 text-3xl font-bold text-brand-green-dark">
            {title}
          </h1>
          <p className="mb-10 text-sm text-foreground/50">
            সর্বশেষ হালনাগাদ: {updated}
          </p>
          <div className="space-y-8 text-base leading-relaxed text-foreground/80 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-brand-green-dark [&_p]:mb-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
            {children}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
