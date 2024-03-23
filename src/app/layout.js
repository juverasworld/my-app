import { Inter } from "next/font/google";
import "./globals.css";


import Menu from "@/components/Menu";
const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: "GSAP THINGS",
  description: "MAke we dey try sha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Menu />
        {children}</body>
    </html>
  );
}
