import type { Metadata } from "next";
import { IntakeForm } from "@/components/IntakeForm";
import { PayButton } from "@/components/PayButton";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Intake",
  description:
    "Eight questions. Offer, audience, CTA, proof or a skip, logo if you have one, where leads should go.",
};

export default function IntakePage() {
  return (
    <SiteShell current="intake">
      <main id="main" className="page">
        <header className="page-head">
          <h1>Tell me the offer. I build the page.</h1>
          <p>
            Eight questions. Skip proof if you do not have it. Skip the logo if
            you do not have one. I start when this is filled and payment is in.
          </p>
          <PayButton />
        </header>
        <IntakeForm />
      </main>
    </SiteShell>
  );
}
