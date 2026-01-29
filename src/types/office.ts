export type ConfidenceLevel = "high" | "verify";

export type SourceRef = {
  label: string;
  url: string;
  publisher?: string;
  lastChecked?: string; // ISO date
};

export type OfficeLevel = "local" | "state" | "federal";

export type Office = {
  id: string;
  name: string;
  level: OfficeLevel;
  jurisdiction: string;
  cycleYears: number[];
  confidence: ConfidenceLevel;
  sources: SourceRef[];
};
