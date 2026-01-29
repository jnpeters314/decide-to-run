import { Office, OfficeLevel } from "@/types/office";
import { OfficeCard } from "./OfficeCard";

const LEVEL_LABEL: Record<OfficeLevel, string> = {
  federal: "Federal offices",
  state: "State offices",
  local: "Local offices",
};

export function OfficeList({ offices }: { offices: Office[] }) {
  const grouped: Record<OfficeLevel, Office[]> = { federal: [], state: [], local: [] };
  for (const o of offices) grouped[o.level].push(o);

  const levels: OfficeLevel[] = ["federal", "state", "local"];

  return (
    <div className="space-y-10">
      {levels.map((level) => {
        const items = grouped[level];
        if (!items.length) return null;

        return (
          <section key={level} aria-label={LEVEL_LABEL[level]}>
            <h2 className="text-lg font-semibold text-slate-900">{LEVEL_LABEL[level]}</h2>
            <div className="mt-4 space-y-4">
              {items.map((office) => (
                <OfficeCard key={office.id} office={office} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
