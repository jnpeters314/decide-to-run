import { OfficeLevel } from "@/types/office";
import { formatUSD, getTypicalRunProfile } from "@/lib/runProfiles";

export function RunProfileCard({ level }: { level: OfficeLevel }) {
  const profile = getTypicalRunProfile(level);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-base font-semibold text-slate-900">
        Typical effort & budget
      </h2>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 p-4">
          <p className="text-xs font-semibold text-slate-700">Budget range</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">
            {formatUSD(profile.budget.low)} – {formatUSD(profile.budget.high)}
          </p>
          {profile.budget.note ? (
            <p className="mt-2 text-sm text-slate-700 leading-6">
              {profile.budget.note}
            </p>
          ) : null}
        </div>

        <div className="rounded-lg border border-slate-200 p-4">
          <p className="text-xs font-semibold text-slate-700">Time commitment</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">
            {profile.time.lowHoursPerWeek}–{profile.time.highHoursPerWeek} hrs/week
          </p>
          {profile.time.note ? (
            <p className="mt-2 text-sm text-slate-700 leading-6">
              {profile.time.note}
            </p>
          ) : null}
        </div>
      </div>

      {profile.caveats.length ? (
        <div className="mt-4">
          <p className="text-xs font-semibold text-slate-700">Notes</p>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-sm text-slate-700 leading-6">
            {profile.caveats.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
