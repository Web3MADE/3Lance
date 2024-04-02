import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PrivyProvider from "./frontend/providers/PrivyProvider";
import ZeroDevProvider from "./frontend/providers/ZeroDevProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ZeroDevProvider>
          <PrivyProvider>{children}</PrivyProvider>
        </ZeroDevProvider>
      </body>
    </html>
  );
}
