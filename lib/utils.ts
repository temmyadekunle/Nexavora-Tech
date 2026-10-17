// Shared visual helpers for project records.
// Kept free of "use client" so both server and client components can use them.

import type { CSSProperties } from "react";

export type ProjectStatus = "Live" | "Beta" | "In Development" | "Prototype" | "Concept";

type StatusLook = { bg: string; text: string; dot: string };

/**
 * Status vocabulary is deliberately limited to what the actual project state
 * supports. A product is only "Live" when people can genuinely use it; a
 * working pre-release build is "Beta", not "Live".
 */
export const statusStyles: Record<ProjectStatus, StatusLook> = {
  Live: { bg: "rgba(56, 224, 139, 0.15)", text: "#38e08b", dot: "#38e08b" },
  Beta: { bg: "rgba(53, 213, 255, 0.16)", text: "var(--cyan)", dot: "var(--cyan)" },
  "In Development": { bg: "rgba(163, 75, 255, 0.15)", text: "var(--violet)", dot: "var(--violet)" },
  Prototype: { bg: "rgba(255, 173, 50, 0.15)", text: "var(--orange)", dot: "var(--orange)" },
  Concept: { bg: "rgba(148, 165, 205, 0.14)", text: "var(--muted)", dot: "var(--muted)" },
};

/** Plain-language explanation shown under the badge on project detail pages. */
export const statusNotes: Record<ProjectStatus, string> = {
  Live: "Publicly available and usable today.",
  Beta: "A working release you can try now, still being refined before a full launch.",
  "In Development": "Being built and tested — not yet released to the public.",
  Prototype: "An early build used to explore and validate the idea.",
  Concept: "An idea at planning stage — nothing to try yet.",
};

export const accentMap: Record<string, string> = {
  cyan: "var(--cyan)",
  violet: "var(--violet)",
  amber: "var(--orange)",
  orange: "var(--orange)",
  green: "#38e08b",
};

function look(status: string): StatusLook {
  return statusStyles[status as ProjectStatus] ?? statusStyles.Concept;
}

export function getAccentStyle(accent: string): CSSProperties {
  return { "--accent": accentMap[accent] || "var(--cyan)" } as CSSProperties;
}

export function getStatusStyle(status: string): CSSProperties {
  const s = look(status);
  return { backgroundColor: s.bg, color: s.text };
}

export function getStatusDotStyle(status: string): CSSProperties {
  return { backgroundColor: look(status).dot };
}

export function getStatusNote(status: string): string {
  return statusNotes[status as ProjectStatus] ?? statusNotes.Concept;
}

export interface ExternalAction {
  key: string;
  label: string;
  url: string;
}

/**
 * Ordered external destinations a project may expose, with human labels.
 * Used to render "External website or application" buttons consistently.
 */
export function getExternalActions(
  links?: Record<string, string | undefined> | null,
): ExternalAction[] {
  if (!links) return [];
  const order: { key: string; label: string }[] = [
    { key: "website", label: "Visit Website" },
    { key: "app", label: "Open App" },
    { key: "prototype", label: "View Prototype" },
    { key: "landing", label: "Landing Page" },
    { key: "apk", label: "Download APK" },
    { key: "download", label: "Download" },
    { key: "github", label: "GitHub" },
  ];
  return order
    .map(({ key, label }) => ({ key, label, url: links[key] }))
    .filter((a): a is ExternalAction => Boolean(a.url));
}
