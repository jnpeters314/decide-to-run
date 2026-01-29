import { SourceRef } from "@/types/office";

export function SourceLinks({ sources }: { sources: SourceRef[] }) {
  return (
    <div className="mt-3">
      <p className="text-xs font-semibold text-slate-700">Sources</p>
      <ul className="mt-2 space-y-1">
        {sources.map((s) => (
          <li key={s.url} className="text-sm">
            <a
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="text-slate-800 underline decoration-slate-300 hover:decoration-slate-600"
            >
              {s.label}
            </a>
            {s.publisher ? (
              <span className="text-slate-500"> · {s.publisher}</span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
