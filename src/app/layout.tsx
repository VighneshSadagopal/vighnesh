import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vighnesh Sadagopal",
  description:
    "Passionate about creating beautiful, functional web experiences. Let's connect and build something amazing together!",
  icons: {
    icon: "/joker.svg", // can also use .png or .svg
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vighnesh Sadagopal",
    url: "https://vighneshsadagopal.com",
    sameAs: [
      "https://www.linkedin.com/in/vighnesh-sadagopal/",
      "https://github.com/VighneshSadagopal",
    ],
    jobTitle: "Full Stack Engineer",
    worksFor: {
      "@type": "Organization",
      name: "QED42",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
