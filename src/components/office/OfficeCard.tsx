import Link from "next/link";
import { Office } from "@/types/office";
import { ConfidenceBadge } from "@/components/shared/ConfidenceBadge";
import { SourceLinks } from "@/components/shared/SourceLinks";

export function OfficeCard({ office }: { office: Office }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-slate-900">{office.name}</h3>
          <p className="mt-1 text-sm text-slate-700">{office.jurisdiction}</p>
          <p className="mt-2 text-xs text-slate-600">
            Election cycles: {office.cycleYears.join(", ")}
          </p>
        </div>
        <ConfidenceBadge level={office.confidence} />
      </div>

      <SourceLinks sources={office.sources} />

      <div className="mt-5">
        <Link
          href={`/office/${encodeURIComponent(office.id)}`}
          className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
        >
          View run plan
        </Link>
      </div>
    </div>
  );
}
