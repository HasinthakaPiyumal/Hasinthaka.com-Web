import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../styles/globals.css";
import { cn } from "@/src/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hasinthaka - Portfolio",
  description: "Personal portfolio website of Hasinthaka",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "antialiased")}>
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  );
}
