import { Figtree, Newsreader } from "next/font/google";
import "./dental.css";

const serif = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--den-serif",
  display: "swap",
});

const sans = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--den-sans",
  display: "swap",
});

export default function DentalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`${serif.variable} ${sans.variable} desk-root`}>{children}</div>;
}
