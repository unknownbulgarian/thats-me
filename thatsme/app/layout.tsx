import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { ErrorProvider } from "./states/errorstate";
import ErrorComp from "./global-components/error/error";

export const metadata: Metadata = {
  title: "Thats-Me",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ErrorProvider>
          <ErrorComp />
          {children}
        </ErrorProvider>
      </body>
    </html>
  );
}
