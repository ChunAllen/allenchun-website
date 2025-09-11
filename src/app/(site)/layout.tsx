import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = {
  title: "Allen Chun — Portfolio",
  description: "Projects, experience, and about me.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="antialiased flex flex-col min-h-screen bg-white text-gray-900 transition-colors">
        <ThemeProvider forcedTheme="light">
          <Nav />
          <main className="flex-1 mx-auto max-w-5xl px-4">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}