export const accentMap: Record<string, string> = {
  cyan: "var(--cyan)",
  violet: "var(--violet)",
  amber: "var(--orange)",
  orange: "var(--orange)",
};

export const statusStyles: Record<string, { bg: string; text: string; dot: string }> = {
  Live: { bg: "rgba(56, 224, 139, 0.15)", text: "#38e08b", dot: "#38e08b" },
  "In development": { bg: "rgba(163, 75, 255, 0.15)", text: "var(--violet)", dot: "var(--violet)" },
  Prototype: { bg: "rgba(255, 173, 50, 0.15)", text: "var(--orange)", dot: "var(--orange)" },
};

export function getAccentStyle(accent: string): React.CSSProperties {
  return { "--accent": accentMap[accent] || "var(--cyan)" } as React.CSSProperties;
}

export function getStatusStyle(status: string): React.CSSProperties {
  const style = statusStyles[status as keyof typeof statusStyles] || statusStyles.Prototype;
  return {
    backgroundColor: style.bg,
    color: style.text,
  } as React.CSSProperties;
}

export function getStatusDotStyle(status: string): React.CSSProperties {
  const style = statusStyles[status as keyof typeof statusStyles] || statusStyles.Prototype;
  return {
    backgroundColor: style.dot,
  } as React.CSSProperties;
}