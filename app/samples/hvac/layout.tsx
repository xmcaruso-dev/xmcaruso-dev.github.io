import { Barlow, Barlow_Condensed } from "next/font/google";
import "./hvac.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--hv-display",
  display: "swap",
});

const body = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--hv-body",
  display: "swap",
});

export default function HvacLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`${display.variable} ${body.variable} board-root`}>{children}</div>;
}
