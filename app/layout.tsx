import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book Digitization App",
  description:
    "A platform with a unique blend of Reading and Activities, Inspired by Charlie’s Big Gift.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return ( 
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/images/Logo.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
