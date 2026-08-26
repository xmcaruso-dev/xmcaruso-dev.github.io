import type { Metadata } from "next";
import { SampleLeadForm } from "@/components/SampleLeadForm";

export const metadata: Metadata = {
  title: "SAMPLE LAYOUT · New patient visit",
  description:
    "Sample conversion page for a new-patient dental visit. Labeled SAMPLE LAYOUT. Not a live practice.",
};

export default function DentalSamplePage() {
  return (
    <main id="main" className="desk">
      <article className="card">
        <p className="stamp">SAMPLE LAYOUT</p>
        <header className="card-top">
          <p>New patient visit</p>
          <h1>Exam first. Plan second. Treatment when you want it.</h1>
          <p className="card-lead">
            First visit is an exam. X-rays if they are needed. Then a plan in
            the chair, in language you can repeat. You can book treatment that
            day or take the plan home.
          </p>
        </header>

        <div className="visit">
          <div>
            <h2>What the first visit is</h2>
            <ul className="visit-line">
              <li>
                <b>Check in</b>
                Paperwork. Insurance card if you have one.
              </li>
              <li>
                <b>Exam</b>
                Look, and x-rays only if they are needed.
              </li>
              <li>
                <b>The plan</b>
                What was found, said plainly. Not a binder.
              </li>
              <li>
                <b>After</b>
                Book treatment, or leave with the plan.
              </li>
            </ul>
          </div>
          <aside className="bring">
            <h2>Worth bringing</h2>
            <p>Photo ID. Insurance card if you have one. A list of medications. A note about what hurts, if anything.</p>
          </aside>
        </div>

        <SampleLeadForm
          className="slip"
          cta="Request a first visit"
          noteLabel="Preferred days, or what hurts"
          notePlaceholder="Optional"
          choice={{
            legend: "Time of day, if you care",
            options: ["Morning", "Afternoon", "Either"],
          }}
        />
      </article>

      <p className="desk-foot">
        SAMPLE LAYOUT. Friday Page example. Not a dental practice. This form
        does not book a real chair.
      </p>
    </main>
  );
}
