"use client";
import { ZeroDevProvider as ZeroDev } from "@zerodev/privy";

export default function ZeroDevProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!process.env.NEXT_PUBLIC_ZERODEV_PROJECT_ID) {
    console.error("ZeroDev Project ID invalid");
    // Render a placeholder or loading indicator when conditions are not met
    return <div>Set your ENV variables!...</div>;
  }
  return (
    <ZeroDev
      projectId={process.env.NEXT_PUBLIC_ZERODEV_PROJECT_ID}
      onlySendSponsoredTransaction
    >
      {children}
    </ZeroDev>
  );
}
