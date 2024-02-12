import type { Metadata } from "next";
import { roboto, inter, dancingscript, pacifico, caveat, shadows, greatvibes } from "./Fonts/fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "Valentines App",
  description: "Send an heart warming message to your loved ones this valentines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${roboto.variable} ${inter.variable} ${dancingscript.variable} ${pacifico.variable} ${caveat.variable} ${shadows.variable} ${greatvibes.variable}`}
      >{children}</body>
    </html>
  );
}
