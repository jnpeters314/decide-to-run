import { OfficeLevel } from "@/types/office";

export type MoneyRange = { low: number; high: number; note?: string };
export type TimeRange = { lowHoursPerWeek: number; highHoursPerWeek: number; note?: string };

export type RunProfile = {
  budget: MoneyRange;
  time: TimeRange;
  caveats: string[];
};

export function formatUSD(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

// These are intentionally conservative + honest for an MVP.
// They are NOT “rules”, they’re planning ranges.
// You’ll refine with real data by state/office type/median media market/etc.
export function getTypicalRunProfile(level: OfficeLevel): RunProfile {
  switch (level) {
    case "local":
      return {
        budget: {
          low: 1000,
          high: 25000,
          note: "Varies widely by city size, competitiveness, and whether the race is at-large or district-based.",
        },
        time: {
          lowHoursPerWeek: 5,
          highHoursPerWeek: 20,
          note: "Often manageable with a day job early on, but ramps up near filing, endorsements, and GOTV.",
        },
        caveats: [
          "Some local races can be won with very little money; others require serious fundraising (especially in larger cities).",
          "Paid mail can become the biggest cost quickly; field + volunteer programs can reduce spend but require time.",
        ],
      };

    case "state":
      return {
        budget: {
          low: 25000,
          high: 500000,
          note: "District size, media market, and party support change the math a lot.",
        },
        time: {
          lowHoursPerWeek: 15,
          highHoursPerWeek: 40,
          note: "Expect multiple call-time blocks per week plus events, canvassing, and stakeholder meetings.",
        },
        caveats: [
          "If the district is competitive, fundraising targets can rise quickly (mail + digital + staff).",
          "Compliance and reporting obligations are more complex than most local races.",
        ],
      };

    case "federal":
      return {
        budget: {
          low: 250000,
          high: 5000000,
          note: "U.S. House vs U.S. Senate differs dramatically; this is a broad planning range.",
        },
        time: {
          lowHoursPerWeek: 30,
          highHoursPerWeek: 70,
          note: "A serious federal run is usually a full-time commitment, especially during the final months.",
        },
        caveats: [
          "Media costs can dominate; fundraising pace is often the main limiting factor.",
          "Federal compliance is strict—plan on professional help for reporting and finance operations.",
        ],
      };

    default:
      // Exhaustiveness fallback
      return {
        budget: { low: 0, high: 0 },
        time: { lowHoursPerWeek: 0, highHoursPerWeek: 0 },
        caveats: [],
      };
  }
}
