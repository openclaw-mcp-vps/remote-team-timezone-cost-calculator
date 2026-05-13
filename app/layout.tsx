import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TeamClock — Calculate Meeting Costs Across Timezones",
  description:
    "Analyze calendar data to show the hourly cost of meetings based on team member salaries and timezone penalties. Suggest optimal meeting times for remote teams."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="4892fa3a-504f-4f05-b9b5-4de66ed2d089"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
