import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { OfficeList } from "@/components/office/OfficeList";
import { getMockOffices } from "@/lib/mock/offices";
import { Office } from "@/types/office";

type SearchParams = Record<string, string | string[] | undefined>;

function getCycleYears(filter: "current" | "next") {
  // Simple MVP assumption for now:
  // current = 2026, next = 2028
  return filter === "current" ? [2026] : [2028];
}

function filterByCycle(offices: Office[], years: number[]) {
  return offices.filter((o) => o.cycleYears.some((y) => years.includes(y)));
}

export default async function ResultsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;

  const state = typeof sp.state === "string" ? sp.state : undefined;
  const city = typeof sp.city === "string" ? sp.city : undefined;
  const zip = typeof sp.zip === "string" ? sp.zip : undefined;

  const cycleParam =
    typeof sp.cycle === "string" && (sp.cycle === "next" || sp.cycle === "current")
      ? (sp.cycle as "current" | "next")
      : "current";

  const offices = getMockOffices({ state });
  const filtered = filterByCycle(offices, getCycleYears(cycleParam));
  const hasVerify = filtered.some((o) => o.confidence === "verify");

  const locationLabel =
    zip ? `ZIP ${zip}` : city && state ? `${city}, ${state}` : "your location";

  const baseParams = new URLSearchParams();
  if (zip) baseParams.set("zip", zip);
  if (city) baseParams.set("city", city);
  if (state) baseParams.set("state", state);

  const currentHref = `/results?${new URLSearchParams({
    ...Object.fromEntries(baseParams),
    cycle: "current",
  }).toString()}`;

  const nextHref = `/results?${new URLSearchParams({
    ...Object.fromEntries(baseParams),
    cycle: "next",
  }).toString()}`;

  return (
    <main>
      <Container>
        <div className="py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Offices you could run for
          </h1>

          <p className="mt-3 text-slate-700 leading-7 max-w-2xl">
            Based on {locationLabel}, here are offices you may be eligible to run for.
            Each result includes confidence and source links so you can verify details.
          </p>

          <div className="mt-8 flex items-center gap-2">
            <Link
              href={currentHref}
              className={`rounded-full border px-3 py-1.5 text-sm ${
                cycleParam === "current"
                  ? "border-slate-900 text-slate-900"
                  : "border-slate-200 text-slate-700 hover:border-slate-300"
              }`}
              aria-current={cycleParam === "current" ? "page" : undefined}
            >
              Current cycle
            </Link>
            <Link
              href={nextHref}
              className={`rounded-full border px-3 py-1.5 text-sm ${
                cycleParam === "next"
                  ? "border-slate-900 text-slate-900"
                  : "border-slate-200 text-slate-700 hover:border-slate-300"
              }`}
              aria-current={cycleParam === "next" ? "page" : undefined}
            >
              Next cycle
            </Link>
          </div>

          {hasVerify ? (
            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <p>
                <span className="font-semibold text-slate-900">Verification recommended</span>{" "}
                means the office is likely available, but you should confirm deadlines and details
                with the official filing authority before taking action.
              </p>
            </div>
          ) : null}

          <div className="mt-10">
            {filtered.length ? (
              <OfficeList offices={filtered} />
            ) : (
              <div className="mt-10 rounded-xl border border-slate-200 p-5 bg-white">
                <p className="text-slate-700">
                  No offices matched this filter. Try switching cycles.
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}
