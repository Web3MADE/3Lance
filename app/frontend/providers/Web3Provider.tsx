"use client";

import { PrivyProvider as Privy } from "@privy-io/react-auth";
import { ZeroDevProvider } from "@zerodev/privy";

export default function Web3Provider({
  children,
}: {
  children: React.ReactNode;
}) {
  if (
    !process.env.NEXT_PUBLIC_PRIVY_APP_ID ||
    !process.env.NEXT_PUBLIC_ZERODEV_PROJECT_ID
  ) {
    console.error("Privy App ID or ZeroDev Project ID invalid");
    // Render a placeholder or loading indicator when conditions are not met
    return <div>Set your ENV variables!...</div>;
  }
  return (
    <ZeroDevProvider
      projectId={process.env.NEXT_PUBLIC_ZERODEV_PROJECT_ID}
      onlySendSponsoredTransaction
    >
      <Privy
        appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID}
        config={{
          // Customize Privy's appearance in your app
          appearance: {
            theme: "light",
            accentColor: "#676FFF",
            logo: "https://your-logo-url",
          },
          // Create embedded wallets for users who don't have a wallet
          embeddedWallets: {
            createOnLogin: "users-without-wallets",
          },
        }}
      >
        {children}
      </Privy>
    </ZeroDevProvider>
  );
}
