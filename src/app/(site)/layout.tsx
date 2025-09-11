import "@/styles/globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Allen Chun — Portfolio",
  description: "Projects, experience, and about me.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="antialiased flex flex-col min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem themes={["light","dark"]}>
          <Nav />
          <main className="flex-1 mx-auto max-w-5xl px-4">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}