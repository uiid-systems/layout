import type { Metadata } from "next";

import "@/ui/globals.css";

export const metadata: Metadata = {
  title: "layout",
};

export default function RootLayout({
  children,
}: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
