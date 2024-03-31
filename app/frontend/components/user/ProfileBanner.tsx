"use client";

import Image from "next/image";

export default function ProfileBanner() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Image
        src="/3lanceprofilebanner.jpeg"
        alt="Profile Banner"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
