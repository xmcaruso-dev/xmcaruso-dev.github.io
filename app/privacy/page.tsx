import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Friday Page handles information.",
};

export default function PrivacyPage() {
  return (
    <SiteShell current="privacy">
      <main id="main" className="page page-narrow">
        <header className="page-head">
          <h1>Small footprint. No invented office.</h1>
        </header>
        <div className="prose">
          <p>
            I run Friday Page. This site sells one product: a conversion landing
            page.
          </p>
          <p>
            The intake form runs in your browser. Answers stay on your device
            unless you copy them or send them. The form does not send mail and
            does not write to a server. Sample pages include a demo form with
            the same rule. Submit does not contact a practice.
          </p>
          <p>
            Payments are processed by Stripe. The Pay $2,500 button opens Stripe
            Checkout for $2,500 USD, one time, card payment. Stripe shows the
            confirmation. This site does not run its own checkout.
          </p>
          <p>
            If you pay and hire the work, I keep what I need to write the page
            and deliver leads to the inbox you name. I do not sell that
            information.
          </p>
          <p>
            This page does not list a street address. There is no invented
            office and no invented team.
          </p>
          <p>
            Questions about this policy can go through the intake contact email
            once a job is open.
          </p>
        </div>
      </main>
    </SiteShell>
  );
}
