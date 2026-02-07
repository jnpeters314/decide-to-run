import { Container } from "@/components/layout/Container";
import { methodologyCopy } from "@/lib/copy/methodology";

export default function MethodologyPage() {
  return (
    <main>
      <Container>
        <div className="py-12 md:py-16 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {methodologyCopy.title}
          </h1>

          <div className="mt-8 space-y-8 text-base leading-7 text-slate-800">
            {methodologyCopy.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-lg font-semibold text-slate-900">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, idx) => (
                  <p key={idx} className="mt-3">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
