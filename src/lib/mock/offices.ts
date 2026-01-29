import { Office } from "@/types/office";

const OFFICES_CA: Office[] = [
  {
    id: "fed-us-house-ca",
    name: "U.S. House of Representatives (Your District)",
    level: "federal",
    jurisdiction: "California",
    cycleYears: [2026],
    confidence: "verify",
    sources: [
      { label: "FEC — Candidate resources", url: "https://www.fec.gov/help-candidates-and-committees/", publisher: "FEC" },
      { label: "California Secretary of State — Elections", url: "https://www.sos.ca.gov/elections", publisher: "CA SOS" },
    ],
  },
  {
    id: "state-governor-ca",
    name: "Governor",
    level: "state",
    jurisdiction: "California",
    cycleYears: [2026],
    confidence: "verify",
    sources: [
      { label: "California Secretary of State — Elections", url: "https://www.sos.ca.gov/elections", publisher: "CA SOS" },
    ],
  },
  {
    id: "state-assembly-ca",
    name: "State Assembly (Your District)",
    level: "state",
    jurisdiction: "California",
    cycleYears: [2026],
    confidence: "verify",
    sources: [
      { label: "California Secretary of State — Elections", url: "https://www.sos.ca.gov/elections", publisher: "CA SOS" },
    ],
  },
  {
    id: "local-city-council",
    name: "City Council",
    level: "local",
    jurisdiction: "Your City",
    cycleYears: [2026],
    confidence: "verify",
    sources: [
      { label: "Local election authority (recommended)", url: "https://www.sos.ca.gov/elections", publisher: "CA SOS" },
    ],
  },
];

export function getMockOffices(params: { state?: string }): Office[] {
  const st = (params.state || "").trim().toUpperCase();
  if (st === "CA") return OFFICES_CA;

  return [
    {
      id: "fed-us-house-generic",
      name: "U.S. House of Representatives (Your District)",
      level: "federal",
      jurisdiction: "United States",
      cycleYears: [2026],
      confidence: "verify",
      sources: [
        { label: "FEC — Candidate resources", url: "https://www.fec.gov/help-candidates-and-committees/", publisher: "FEC" },
      ],
    },
    {
      id: "state-leg-generic",
      name: "State Legislature (Your District)",
      level: "state",
      jurisdiction: "Your State",
      cycleYears: [2026],
      confidence: "verify",
      sources: [
        { label: "Find your state election office", url: "https://www.usa.gov/state-election-office", publisher: "USA.gov" },
      ],
    },
    {
      id: "local-city-council-generic",
      name: "City Council",
      level: "local",
      jurisdiction: "Your City",
      cycleYears: [2026],
      confidence: "verify",
      sources: [
        { label: "Election information", url: "https://www.usa.gov/election", publisher: "USA.gov" },
      ],
    },
  ];
}
