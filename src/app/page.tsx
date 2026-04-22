import { getAllPublishedDays } from "@/lib/data";
import { ChangelogDay as ChangelogDayType } from "@/lib/types";
import Navbar from "./Navbar";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  });
}

function ProductBadges({ product }: { product: ("mobile" | "web" | "backend")[] }) {
  const config = {
    mobile: { label: "📱 Mobile", className: "bg-blue-50 text-blue-700" },
    web: { label: "🌐 Web", className: "bg-purple-50 text-purple-700" },
    backend: { label: "⚙️ Backend", className: "bg-orange-50 text-orange-700" },
  };
  return (
    <>
      {product.map((cat) => {
        const { label, className } = config[cat];
        return (
          <span
            key={cat}
            className={`inline-block text-xs font-medium px-2 py-0.5 rounded ${className}`}
          >
            {label}
          </span>
        );
      })}
    </>
  );
}

function RepoBadge({ repo }: { repo: "api-wms" | "ui-wms" | "erp-len-api" | "erp-len-ui" | "len-app" | "len-react" | "len-approval-api" | "len-approval-ui" }) {
  const config = {
    "api-wms": { label: "WMS", className: "bg-gray-100 text-gray-700" },
    "ui-wms": { label: "WMS", className: "bg-gray-100 text-gray-700" },
    "erp-len-api": { label: "TMS", className: "bg-gray-100 text-gray-700" },
    "erp-len-ui": { label: "TMS", className: "bg-gray-100 text-gray-700" },
    "len-app": { label: "TMS", className: "bg-gray-100 text-gray-700" },
    "len-react": { label: "Profile", className: "bg-gray-100 text-gray-700" },
    "len-approval-api": { label: "Approval", className: "bg-gray-100 text-gray-700" },
    "len-approval-ui": { label: "Approval", className: "bg-gray-100 text-gray-700" },
  };
  const { label, className } = config[repo];
  return (
    <span
      className={`inline-block text-xs font-medium px-2 py-0.5 rounded ${className}`}
    >
      {label}
    </span>
  );
}

function ReleaseRow({ day }: { day: ChangelogDayType }) {
  return (
    <article className="grid gap-6 items-start md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
      {/* Left: Sticky Date (desktop only) */}
      <div
        className="hidden md:block md:sticky"
        style={{ top: "var(--date-top-offset)" }}
      >
        <time className="text-base text-black/60 font-normal">
          {formatDate(day.date)}
        </time>
      </div>

      {/* Right: All entries for this day */}
      <div>
        {/* Mobile-only date (shown inline above first entry) */}
        <time className="text-sm text-black/50 font-normal mb-3 block md:hidden">
          {formatDate(day.date)}
        </time>
        {day.entries.map((entry, i) => (
          <div key={entry.id} className={i < day.entries.length - 1 ? "pb-12 md:pb-16" : "pb-0"}>
            <div className="mb-2 flex items-center gap-1.5 flex-wrap">
              <ProductBadges product={entry.product} />
              <RepoBadge repo={entry.repo} />
            </div>
            <h2 className="text-2xl md:text-[42px] font-bold leading-tight md:leading-[48px] text-black/95 mb-3">
              {entry.title}
            </h2>
            <div className="changelog-prose">
              <Markdown remarkPlugins={[remarkGfm]}>
                {entry.description}
              </Markdown>
            </div>
            {entry.imageUrl && (
              <div className="mt-5 md:mt-6 rounded-lg overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={entry.imageUrl}
                  alt={entry.title}
                  className="w-full object-cover max-h-[300px] md:max-h-[500px]"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}

export default function ChangelogPage() {
  const days = getAllPublishedDays();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero */}
      <header className="px-4 lg:px-0 pt-10 md:pt-[60px] pb-10 md:pb-12 text-center md:text-left">
        <div className="max-w-[1024px] mx-auto">
          <h1 className="text-4xl md:text-[64px] font-bold text-black/95 leading-tight">
            What&apos;s New
          </h1>
          <p className="text-base md:text-[18px] text-black/90 mt-3">
            Keep up with the latest releases, improvements, and fixes.
          </p>
        </div>
      </header>

      {/* Releases */}
      <div className="flex-1">
      {days.length === 0 ? (
        <div className="flex items-center justify-center pb-24">
          <p className="text-gray-500 text-base">
            No updates yet. Check back soon!
          </p>
        </div>
      ) : (
        <main className="pb-24">
          <div className="max-w-[1024px] mx-auto px-4 lg:px-0">
            {/* Divider between hero and first entry */}
            <hr className="border-gray-200 mb-8" />
            {days.map((day, dayIndex) => (
              <div key={day.date}>
                <ReleaseRow day={day} />
                {/* Divider between day groups */}
                {dayIndex < days.length - 1 && (
                  <hr className="border-gray-200 my-12 md:my-16" />
                )}
              </div>
            ))}
          </div>
        </main>
      )}
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-[1024px] mx-auto px-4 lg:px-0 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} LEN Logistics. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
