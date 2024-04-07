import { ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { theme } from "./config/theme";
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
          <PrivyProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </PrivyProvider>
        </ZeroDevProvider>
      </body>
    </html>
  );
}
