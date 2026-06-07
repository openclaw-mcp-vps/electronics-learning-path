import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Electronics Learning Path – Personalized Curriculum Generator",
  description: "AI-powered learning path generator for electronics. Get a custom curriculum with projects, milestones, and resources tailored to your goals."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4ff3dec9-a907-4adb-8565-c0e4433d6ed1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
