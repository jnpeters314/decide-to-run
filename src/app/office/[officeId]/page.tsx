import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { getMockOfficeById } from "@/lib/mock/offices";
import { SourceLinks } from "@/components/shared/SourceLinks";
import { ConfidenceBadge } from "@/components/shared/ConfidenceBadge";

export default async function OfficePage({
  params,
  searchParams,
}: {
  params: Promise<{ officeId: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { officeId } = await params;
  const sp = await searchParams;

  const state = typeof sp.state === "string" ? sp.state : undefined;

  const office = getMockOfficeById(officeId, { state });

  if (!office) {
    return (
      <main>
        <Container>
          <div className="py-12 md:py-16">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Run plan
            </h1>
            <p className="mt-3 text-slate-700 leading-7">
              We couldn’t find this office in the current dataset.
            </p>
            <div className="mt-8">
              <Link href="/results" className="text-slate-900 underline">
                Back to results
              </Link>
            </div>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main>
      <Container>
        <div className="py-12 md:py-16">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                {office.name}
              </h1>
              <p className="mt-2 text-slate-700">
                {office.level.toUpperCase()} · {office.jurisdiction}
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Election cycles: {office.cycleYears.join(", ")}
              </p>
            </div>
            <ConfidenceBadge level={office.confidence} />
          </div>

          <div className="mt-10 grid gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h2 className="text-base font-semibold text-slate-900">
                What to expect
              </h2>
              <p className="mt-2 text-slate-700 leading-7">
                This is a starter run plan. Next we’ll make this office-specific
                (district lookups, filing deadlines, and realistic budget ranges).
              </p>
              <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2">
                <li>Confirm eligibility requirements with the filing authority</li>
                <li>Confirm filing window and required forms</li>
                <li>Open a campaign bank account (after filing requirements)</li>
                <li>Build a basic budget and fundraising plan</li>
                <li>Launch your campaign hub and start collecting supporters</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h2 className="text-base font-semibold text-slate-900">
                Set up your campaign
              </h2>
              <p className="mt-2 text-slate-700 leading-7">
                When you’re ready, CrowdBlue can help you set up a campaign page,
                fundraising, and supporter outreach.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href="https://crowdblue.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Go to CrowdBlue
                </a>
                <Link
                  href="/results"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:border-slate-300"
                >
                  Back to results
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <SourceLinks sources={office.sources} />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
