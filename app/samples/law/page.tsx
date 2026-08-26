import type { Metadata } from "next";
import { SampleLeadForm } from "@/components/SampleLeadForm";

export const metadata: Metadata = {
  title: "SAMPLE LAYOUT · Immigration consult",
  description:
    "Sample conversion page for an immigration consult. Labeled SAMPLE LAYOUT. Not a live practice.",
};

export default function LawSamplePage() {
  return (
    <main id="main" className="brief">
      <header className="brief-run">
        <p>Immigration consult</p>
        <p>45 minutes · video or in person</p>
      </header>

      <section className="brief-stage">
        <div className="brief-offer">
          <h1>Bring the facts. Leave with a next step.</h1>
          <p>
            A consult is a working hour. You bring the timeline, the documents
            you already have, and the question you cannot answer from a Google
            result. The call maps options, timing, and whether to file now or
            wait.
          </p>
          <blockquote>
            You do not leave with a speech. You leave with a written next step:
            file, wait, or gather more.
          </blockquote>
          <a className="brief-go" href="#lead">
            Request a consult
          </a>
        </div>
        <SampleLeadForm
          className="docket"
          cta="Request a consult"
          noteLabel="What is the matter"
          notePlaceholder="Family petition, work authorization, status, or other"
        />
      </section>

      <section className="brief-body">
        <div>
          <h2>What the hour is actually for</h2>
          <p>
            Family petitions you need explained before you file. Work
            authorization with a deadline attached. Status you do not want to
            guess at. If the facts are a mess, we sort the mess first. That is
            still the job.
          </p>
          <p>
            The call covers your timeline, the documents in hand, what happens
            if you wait, and what happens if you file now. Then a next step in
            writing. Not legal advice published on the internet. A conversation
            about your facts.
          </p>
        </div>
        <ol className="exhibits">
          <li>
            <span>A</span>
            Notices, receipts, or prior filings, if you have them
          </li>
          <li>
            <span>B</span>
            Passport stamps or IDs that speak to the timeline
          </li>
          <li>
            <span>C</span>
            Deadlines you already know about, even if they are messy
          </li>
          <li>
            <span>D</span>
            Questions you want answered in the room, written down
          </li>
        </ol>
      </section>

      <p className="brief-foot">
        SAMPLE LAYOUT. Friday Page example. Not a law firm. Not legal advice. No
        clients named.
      </p>
    </main>
  );
}
