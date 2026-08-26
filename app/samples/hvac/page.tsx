import type { Metadata } from "next";
import { SampleLeadForm } from "@/components/SampleLeadForm";

export const metadata: Metadata = {
  title: "SAMPLE LAYOUT · Service call and install",
  description:
    "Sample conversion page for HVAC repair and install. Labeled SAMPLE LAYOUT. Not a live company.",
};

export default function HvacSamplePage() {
  return (
    <main id="main" className="board">
      <section className="board-hero">
        <p className="board-tag">SAMPLE LAYOUT · service call</p>
        <h1>
          Heat&apos;s out.
          <span>Or the unit is done.</span>
        </h1>
        <p className="board-lead">
          Repair when the system can still earn it. Replace when it cannot. Say
          what is happening. A tech gets on the board from there.
        </p>
        <a className="hv-go" href="#lead">
          Request a call
        </a>
      </section>

      <section className="jobs" aria-label="Repair or replace">
        <article className="job job-repair">
          <h2>System down</h2>
          <p>
            No heat. No cool. Noise. Leak. A tech on site diagnoses, then
            repairs if the unit still earns the visit. That is the service call.
          </p>
        </article>
        <article className="job job-replace">
          <h2>Unit is done</h2>
          <p>
            Old, failing, or already quoted to death. Site visit, a number, then
            an install date. This page is not a catalog of 40 SKUs.
          </p>
        </article>
      </section>

      <section className="ticket-wrap">
        <div className="ready">
          <h2>Have this ready</h2>
          <p>
            Address or a cross street. Heat, cool, or both. Age of the unit if
            you know it. What you already tried, even if it was &quot;turned it
            off and on.&quot;
          </p>
          <p className="ready-note">
            Same-day windows depend on the board. This sample does not invent a
            city or a fleet size.
          </p>
        </div>
        <SampleLeadForm
          className="ticket"
          cta="Request a service call"
          noteLabel="What is happening"
          notePlaceholder="No heat, no cool, noise, leak, or install quote"
          address
          choice={{
            legend: "Job type",
            options: ["Repair", "Replace", "Not sure"],
          }}
        />
      </section>

      <p className="board-foot">
        SAMPLE LAYOUT. Friday Page example. Not an HVAC company. This form does
        not dispatch a truck.
      </p>
    </main>
  );
}
