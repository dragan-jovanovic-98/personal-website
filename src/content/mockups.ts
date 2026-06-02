// Representative (fake) data for the in-brand dashboard mockups shown on each
// case study. No real client or customer data appears here. These exist to
// visualize the kind of systems Dragan builds, on-brand and privacy-safe.

export type Mockup = {
  product: string;
  url: string;
  kpis: { label: string; value: string }[];
  // Horizontal bar breakdown (call outcomes etc.). pct is 0-100 for bar width.
  bars: { label: string; pct: number }[];
  rows: { left: string; mid: string; right: string }[];
};

export const mockups: Record<string, Mockup> = {
  "primesync-torqi": {
    product: "PrimeSync · Client Portal",
    url: "app.primesync.ai",
    kpis: [
      { label: "Calls this month", value: "1,284" },
      { label: "Minutes used", value: "12,940" },
      { label: "Est. revenue", value: "$48.2k" },
      { label: "Appointments set", value: "312" },
    ],
    bars: [
      { label: "Appointment set", pct: 100 },
      { label: "Quote requested", pct: 64 },
      { label: "Message left", pct: 48 },
      { label: "Transferred", pct: 33 },
      { label: "General inquiry", pct: 26 },
    ],
    rows: [
      { left: "Inbound · 2m 14s", mid: "Appointment set", right: "9:42 AM" },
      { left: "Inbound · 0m 51s", mid: "Quote requested", right: "9:30 AM" },
      { left: "Inbound · 3m 06s", mid: "Transferred", right: "9:12 AM" },
    ],
  },
  "auto-lead-kings": {
    product: "Auto Lead Kings · Outbound",
    url: "dashboard.autoleadkings.com",
    kpis: [
      { label: "Calls dialed", value: "31,420" },
      { label: "Booking rate", value: "10.2%" },
      { label: "Cost / appt", value: "$4.60" },
      { label: "Appointments", value: "3,205" },
    ],
    bars: [
      { label: "No answer", pct: 100 },
      { label: "Not interested", pct: 47 },
      { label: "Callback set", pct: 30 },
      { label: "Booked", pct: 22 },
      { label: "Bad number", pct: 17 },
    ],
    rows: [
      { left: "Outbound · 1m 38s", mid: "Booked", right: "Calendar synced" },
      { left: "Outbound · 0m 12s", mid: "No answer", right: "Retry queued" },
      { left: "Outbound · 2m 02s", mid: "Callback set", right: "SMS sent" },
    ],
  },
  "kingscourt-markham": {
    product: "Kingscourt · Operations",
    url: "ops.kingscourt.ca",
    kpis: [
      { label: "Calls (7 days)", value: "214" },
      { label: "Auto-handled", value: "91%" },
      { label: "Bookings today", value: "11" },
      { label: "Courts active", value: "4 / 5" },
    ],
    bars: [
      { label: "New booking", pct: 100 },
      { label: "Door code resend", pct: 55 },
      { label: "Reschedule", pct: 45 },
      { label: "Transfer to operator", pct: 30 },
      { label: "Net setup request", pct: 20 },
    ],
    rows: [
      { left: "Court 2 · 7:00 PM", mid: "Booked", right: "Code sent" },
      { left: "Court 4 · 8:30 PM", mid: "Rescheduled", right: "Lights set" },
      { left: "Court 1 · 9:00 PM", mid: "Door code", right: "Resent" },
    ],
  },
};
