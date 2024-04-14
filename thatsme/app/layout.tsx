import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { ErrorProvider } from "./states/errorstate";
import { ApiUrlProvider } from "./states/api";
import { FetchProvider } from "./states/session";
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
        <ApiUrlProvider>
          <ErrorProvider>
            <FetchProvider>
              <ErrorComp />
              {children}
            </FetchProvider>
          </ErrorProvider>
        </ApiUrlProvider>
      </body>
    </html>
  );
}
