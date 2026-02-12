import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
  title: "BRICK3D — Software Consulting Studio",
  description:
    "BRICK3D builds production-ready mobile apps, web platforms, and desktop software. From idea to MVP — fast.",
  keywords: [
    "software consulting",
    "mobile app development",
    "iOS development",
    "Android development",
    "web development",
    "MVP development",
    "desktop apps",
    "BRICK3D",
  ],
  openGraph: {
    title: "BRICK3D — Software Consulting Studio",
    description:
      "From idea to MVP — fast. We build mobile, web, and desktop software that ships.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-dark text-text-primary antialiased">
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#12121A",
              color: "#F1F5F9",
              border: "1px solid #1E293B",
            },
            success: {
              iconTheme: {
                primary: "#00D4FF",
                secondary: "#0A0A0F",
              },
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
