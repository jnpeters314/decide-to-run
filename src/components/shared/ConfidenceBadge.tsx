import { ConfidenceLevel } from "@/types/office";

export function ConfidenceBadge({ level }: { level: ConfidenceLevel }) {
  const isHigh = level === "high";
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${
        isHigh
          ? "border-emerald-200 bg-emerald-50 text-emerald-800"
          : "border-amber-200 bg-amber-50 text-amber-900"
      }`}
      aria-label={isHigh ? "High confidence" : "Verification recommended"}
      title={isHigh ? "High confidence" : "Verification recommended"}
    >
      {isHigh ? "High confidence" : "Verification recommended"}
    </span>
  );
}
