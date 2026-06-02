// Canonical case study content for the site. Ported from the approved copy
// doc (outputs/2026-05-27-website-v1-copy.md in the review workspace).
// No em dashes in prose. Real client names, permission granted.

export type CaseStudy = {
  slug: string;
  order: number;
  client: string;
  cardLine: string;
  pageTitle: string;
  // Headline stat for cards and the proof strip.
  stat: { value: string; label: string; detail: string };
  situation: string;
  figuredOut: string;
  built: string;
  result: string;
  stack: string;
  metaTitle: string;
  metaDescription: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "primesync-torqi",
    order: 1,
    client: "PrimeSync / TorQi",
    cardLine:
      "Built and now run the technical backbone of an AI voice-receptionist company. Grew into the fractional CTO role, named publicly. 18 months and counting.",
    pageTitle: "Building a company's technical backbone from scratch",
    stat: {
      value: "150,000+",
      label: "call minutes shipped",
      detail:
        "voice-agent minutes shipped in production. ~20 shops, ~45 agents live.",
    },
    situation:
      "PrimeSync set out to build an AI voice receptionist for auto repair shops, with TorQi as the managed service that delivers it. When I joined they had a clear product vision and no technical foundation to deliver it on. This was early in the voice-AI wave, so there was no playbook to copy. Someone had to decide how the whole thing would get built and run, from the agent itself to everything around it.",
    figuredOut:
      "I worked out the product end to end. Starting from their vision, I chose the stack and the architecture that could actually ship it, at a time when very few companies were building voice AI this way. Two calls shaped everything after. First, because the auto-repair use case was so well understood, the agent setup could be productized instead of hand-built every time, without losing the ability to customize. Second, they would own their own dashboards rather than lean on white-label tools, because real visibility for clients and the internal team was going to be the difference between a demo and a business.",
    built:
      "The technical backbone of the company, and the systems the team and clients run on every day. An Agent Factory that turns a prospect intake form into a customized demo agent fast, so a powerful agent gets in front of a prospect early. A client portal where each shop sees call counts, minutes, estimated revenue, call outcomes, full logs, and per-call transcripts and recordings. An internal admin dashboard, built in-house, that gives the team visibility and tooling across every account.",
    result:
      "About 20 shops live, running roughly 45 agents. The platform handles around 13,000 call minutes a month, and I have shipped over 150,000 call minutes to date. I grew from voice solutions manager into the company's fractional CTO, named publicly as CTO on PrimeSync's site, and this is my most consistent engagement over 18 months.",
    stack:
      "Supabase (Postgres, edge functions, auth, storage), Next.js, n8n, Python, Retell (voice), Twilio (telephony). Every dashboard built in-house, no white-label.",
    metaTitle: "PrimeSync / TorQi case study",
    metaDescription:
      "Fractional CTO who built the technical backbone of an AI voice-receptionist platform. 150,000+ call minutes shipped, ~20 shops live, named publicly as CTO.",
  },
  {
    slug: "auto-lead-kings",
    order: 2,
    client: "Auto Lead Kings",
    cardLine:
      "An outbound voice agent that reactivated a dormant lead list. 30,000+ calls, cost per booked appointment down from $15 via ads to $4 to $5.",
    pageTitle: "Working a dead lead list at a fraction of the cost",
    stat: {
      value: "30,000+",
      label: "calls in production",
      detail:
        "calls shipped to reactivate a dormant lead list. Cost per booked appointment down from $15 via ads to $4 to $5.",
    },
    situation:
      "Auto Lead Kings had a large book of automotive leads that had gone cold. New appointments were coming mainly from a paid ad-to-appointment funnel, where each booked appointment cost about $15. The opportunity was to work the existing dormant list again, consistently and at a much lower cost per appointment, without the quality dropping.",
    figuredOut:
      "The leads were warm enough (prior opt-ins) that the real problem was not lead quality. It was consistent, tireless follow-up at a cost that made sense. That is a case where voice genuinely fits: clear revenue tied to dialing volume, and a list worth working far more cheaply than buying fresh appointments through ads. So the move was to put an outbound agent on the dormant list.",
    built:
      "An outbound voice agent on their own Retell, Twilio, and Supabase. It qualifies dormant leads and books appointments straight into the sales team's calendar. A rotating pool of phone numbers keeps it from getting flagged as spam, and retry logic works no-answers across several attempts. After each call the data flows from Retell to Supabase to n8n for CRM sync and a confirmation text. They got a branded dashboard for full visibility, and they own every account end to end.",
    result:
      "Over 30,000 calls shipped in production, a 10% appointment booking rate, and a cost of about $4 to $5 per booked appointment, down from the roughly $15 the same appointment cost through the paid ad funnel.",
    stack:
      "Retell (voice), Twilio (telephony and SMS), Supabase (database, edge functions, dashboard), n8n (CRM sync and follow-up). Client owns every account.",
    metaTitle: "Auto Lead Kings case study",
    metaDescription:
      "An outbound voice agent that reactivated a dormant lead list. 30,000+ calls in production, cost per booked appointment down from $15 via ads to $4 to $5.",
  },
  {
    slug: "kingscourt-markham",
    order: 3,
    client: "Kingscourt Markham",
    cardLine:
      "Automated a local sports facility end to end, from door codes and lighting to a 24/7 voice agent. Started with one email automation and grew into running the operation.",
    pageTitle: "From one email automation to running the operation",
    stat: {
      value: "90%+",
      label: "calls handled with no human",
      detail:
        "of a local facility's calls handled with no human. 6+ months live, ~$1,500/mo in bookings closed by the agent.",
    },
    situation:
      "Kingscourt Markham is a multi-sport court facility. They run on a booking system with no native integrations, so everything around each booking was manual: getting clients their door code, handling liability waivers, setting the lights for the day, and answering the phone. Staff did all of it by hand, every day.",
    figuredOut:
      "Their booking system was the source of truth but a closed box with no real API. Ripping it out would have been disruptive and expensive, so the smarter move was to build automation around it, pulling from the little it exposed and wiring everything else on top. I also started small, with the single most painful manual task, and expanded as the automations proved themselves.",
    built:
      "It started with email automation and grew into running much of their operation. I used the per-court iCal feeds to detect bookings and automatically send each client their door code on the day. I automated liability waivers: sending them, recording who signed, and re-sending to returning clients. I set up a Supabase database as their system of record for every booking and client. I automated the lighting, court by court, straight from the live schedule, so lights come on 15 minutes before a booking and off 15 after, replacing a manual daily setup. I built a 24/7 voice agent that answers every call, makes and reschedules bookings, gives callers their door code when they lose the email, and transfers to an operator when it matters. And a monitoring dashboard the team uses to watch the agent and route situation-specific requests to operators by email.",
    result:
      "A pile of daily manual work, door codes, waivers, lighting, and phones, turned into automated systems running on their own data. The voice agent has been live for over 6 months, answers calls around the clock, handles more than 90% of them without a human, and closes around $1,500 a month in bookings on its own. It was a land-and-expand engagement: it began with one email automation and grew into automating much of the business, which is its own proof of the trust earned and the value delivered.",
    stack:
      "Supabase (system of record), n8n (automation), iCal feed integration, Retell (voice), Twilio (telephony), plus a custom monitoring dashboard and physical lighting control. Built on the client's own accounts.",
    metaTitle: "Kingscourt Markham case study",
    metaDescription:
      "End-to-end automation for a local sports facility, from door codes and lighting to a 24/7 voice agent running on their own data.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function sortedCaseStudies(): CaseStudy[] {
  return [...caseStudies].sort((a, b) => a.order - b.order);
}
