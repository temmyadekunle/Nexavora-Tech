"use client";

import { useState } from "react";
import { site } from "@/lib/content";

const projectTypes = [
  "Build — technology & product development",
  "Design — UI/UX & product design",
  "Grow — digital marketing & social media",
  "Operate — customer experience & operations",
  "Not sure yet",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    type: projectTypes[0],
    message: "",
  });

  const update = (key: keyof typeof form) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((current) => ({ ...current, [key]: event.target.value }));

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Project enquiry — ${form.type.split(" — ")[0]}${form.company ? ` — ${form.company}` : ""}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company: ${form.company}` : "",
      `Interested in: ${form.type}`,
      "",
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
          <span>Name</span>
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
          <span>Email</span>
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
          <span>Company</span>
          <input
            type="text"
            name="company"
            autoComplete="organization"
            placeholder="Company or project"
            value={form.company}
            onChange={update("company")}
          />
        </label>

        <label>
          <span>What do you need?</span>
          <select name="type" value={form.type} onChange={update("type")}>
            {projectTypes.map((option) => (
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

      <button className="btn btn-primary" type="submit">
        Send enquiry
      </button>

      <p className="contact-form__note">
        This opens your email app with the details filled in — no data is stored on this
        site.
      </p>
    </form>
  );
}
