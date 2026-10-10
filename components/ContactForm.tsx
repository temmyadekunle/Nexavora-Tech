"use client";

import { useRef, useState } from "react";
import { budgetOptions, contact, serviceOptions, site, timelineOptions } from "@/lib/content";

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  service: serviceOptions[0],
  budget: budgetOptions[0],
  timeline: timelineOptions[0],
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const guard = useRef(false);

  const update =
    (key: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((current) => ({ ...current, [key]: event.target.value }));

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Guard against a double click producing two email drafts.
    if (guard.current) return;
    guard.current = true;
    window.setTimeout(() => {
      guard.current = false;
    }, 1500);

    const subject = `Project enquiry — ${form.service}${
      form.company ? ` — ${form.company}` : ""
    }`;

    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company / project: ${form.company}` : "",
      `What do you need: ${form.service}`,
      `Estimated budget: ${form.budget}`,
      `Preferred timeline: ${form.timeline}`,
      "",
      "The problem:",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="contact-form__row">
        <label>
          <span>Full name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            value={form.name}
            onChange={update("name")}
          />
        </label>

        <label>
          <span>Email address</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={update("email")}
          />
        </label>
      </div>

      <div className="contact-form__row">
        <label>
          <span>
            Company or project <em>optional</em>
          </span>
          <input
            type="text"
            name="company"
            autoComplete="organization"
            placeholder="Company or project name"
            value={form.company}
            onChange={update("company")}
          />
        </label>

        <label>
          <span>What do you need?</span>
          <select name="service" value={form.service} onChange={update("service")}>
            {serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="contact-form__row">
        <label>
          <span>
            Estimated budget <em>optional</em>
          </span>
          <select name="budget" value={form.budget} onChange={update("budget")}>
            {budgetOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label>
          <span>
            Preferred timeline <em>optional</em>
          </span>
          <select name="timeline" value={form.timeline} onChange={update("timeline")}>
            {timelineOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <label>
        <span>Tell us about the problem</span>
        <textarea
          name="message"
          rows={6}
          required
          placeholder="What are you trying to build or fix? What does success look like?"
          value={form.message}
          onChange={update("message")}
        />
      </label>

      <div className="contact-form__actions">
        <button className="btn btn-primary" type="submit">
          Send Inquiry
        </button>
        <p className="contact-form__note" id="contact-form-note">
          {contact.note}
        </p>
      </div>
    </form>
  );
}
