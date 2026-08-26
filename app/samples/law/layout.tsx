import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./law.css";

const serif = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--law-serif",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--law-sans",
  display: "swap",
});

export default function LawLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`${serif.variable} ${sans.variable} brief-root`}>{children}</div>;
}
