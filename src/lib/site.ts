// Central site configuration. Single source of truth for brand strings,
// nav, and the booking/contact destinations used across the site.

export const site = {
  name: "Dragan Jovanovic",
  role: "Fractional CTO & AI builder",
  positioning:
    "I help tech-friendly business owners work out what's worth doing with AI and what isn't, then build it myself. No hype.",
  url: "https://draganjovanovic.com",
  email: "dragan@draganjovanovic.com",
  // Show the public email line only once the mailbox is live. Never the Courtside address.
  showEmail: true,
  // Google Appointment Scheduling embed URL. Leave empty until provided; the
  // contact page renders a tasteful placeholder while it is empty.
  bookingEmbedUrl:
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3wm6U-vE4E_Yk5KJd6AAxNGmbv8xGvHIi6HHQzuvdHM_biOk8NNaprhfEIYqaQI0ECRGiNaopo?gv=true",
  nav: [
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
  ],
} as const;
