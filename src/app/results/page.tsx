import { Container } from "@/components/layout/Container";
import { OfficeList } from "@/components/office/OfficeList";
import { getMockOffices } from "@/lib/mock/offices";

export default function ResultsPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const state = typeof searchParams.state === "string" ? searchParams.state : undefined;
  const city = typeof searchParams.city === "string" ? searchParams.city : undefined;
  const zip = typeof searchParams.zip === "string" ? searchParams.zip : undefined;

  const offices = getMockOffices({ state });

  const locationLabel =
    zip ? `ZIP ${zip}` : city && state ? `${city}, ${state}` : "your location";

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

          <div className="mt-10">
            <OfficeList offices={offices} />
          </div>
        </div>
      </Container>
    </main>
  );
}
