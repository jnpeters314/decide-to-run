import { Container } from "@/components/layout/Container";

export default async function OfficePage({
  params,
}: {
  params: Promise<{ officeId: string }>;
}) {
  const { officeId } = await params;

  return (
    <main>
      <Container>
        <div className="py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Run plan
          </h1>
          <p className="mt-3 text-slate-700 leading-7">
            Office page stub. Next we will show requirements, deadlines, budget
            ranges, sources, and a checklist.
          </p>

          <div className="mt-8 rounded-xl border border-slate-200 p-5 bg-white">
            <p className="text-sm text-slate-700">
              Office ID: <span className="font-mono">{officeId}</span>
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
