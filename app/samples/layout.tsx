import type { Metadata } from "next";
import { SampleBanner } from "@/components/SampleBanner";
import "./banner.css";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function SamplesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SampleBanner />
      {children}
    </>
  );
}
