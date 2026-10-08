"use client";

import Image from "next/image";
import { useState } from "react";

// Renders a client logo, falling back to the client's name as a wordmark if
// the artwork is missing or fails to load.
export default function ClientLogo({
  name,
  src,
  width,
  height,
}: {
  name: string;
  src: string;
  width: number;
  height: number;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <span className="logo-tile__name">{name}</span>;
  }

  return (
    <Image
      className="logo-tile__img"
      src={src}
      alt={name}
      width={width}
      height={height}
      onError={() => setFailed(true)}
    />
  );
}
