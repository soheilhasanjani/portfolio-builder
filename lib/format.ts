const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export function formatMonthYear(value: string): string {
  if (value === "present") return "Present";
  const match = value.match(/^(\d{4})-(\d{2})$/);
  if (!match) return value;
  const year = match[1];
  const monthIdx = parseInt(match[2], 10) - 1;
  if (monthIdx < 0 || monthIdx > 11) return value;
  return `${MONTH_NAMES[monthIdx]} ${year}`;
}

export function formatPeriod(period?: { start: string; end: string }): string {
  if (!period) return "";
  const start = formatMonthYear(period.start);
  const end = formatMonthYear(period.end);
  return `${start} – ${end}`;
}
