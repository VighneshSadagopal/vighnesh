import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vighnesh Sadagopal",
  description: "Passionate about creating beautiful, functional web experiences. Let's connect and build something amazing together!",
  icons: {
    icon: "/joker.svg", // can also use .png or .svg
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
