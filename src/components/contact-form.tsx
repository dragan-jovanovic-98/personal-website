"use client";

import { useState } from "react";
import { site } from "@/lib/site";

// V1 contact form. With no backend yet, it composes a prefilled email to
// Dragan via the visitor's mail client. Swap for a route handler or a service
// like Formspree later without changing the page.
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Website enquiry${name ? ` from ${name}` : ""}`,
    );
    const body = encodeURIComponent(
      `${message}\n\n---\nName: ${name}\nEmail: ${email}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  const field =
    "mt-2 w-full rounded-sm border border-line bg-paper-raised px-4 py-3 text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="eyebrow">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={field}
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="eyebrow">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={field}
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="eyebrow">
          What are you working on?
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${field} resize-y`}
          placeholder="A bit about your business and what you're trying to solve."
        />
      </div>
      <button
        type="submit"
        className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent-hover"
      >
        Send it
        <span
          aria-hidden
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          &rarr;
        </span>
      </button>
    </form>
  );
}
