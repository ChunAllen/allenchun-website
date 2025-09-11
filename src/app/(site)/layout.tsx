import type { Metadata } from "next";
import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Allen Chun — Portfolio",
  description: "Projects, experience, and about me.",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: { title: "Allen Chun — Portfolio", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Nav />
        <main className="mx-auto max-w-5xl px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}