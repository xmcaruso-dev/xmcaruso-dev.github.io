import Link from "next/link";
import { LivePreview } from "@/components/LivePreview";
import { SAMPLES } from "@/lib/site";

export function HomeSamples() {
  const [law, hvac, dental] = SAMPLES;

  return (
    <section className="home-work" id="work" aria-labelledby="work-heading">
      <div className="home-copy">
        <h2 id="work-heading">Three I keep around because I build these a lot.</h2>
        <p>
          Immigration consults. HVAC service calls. New patient dental. Open
          them on your phone. Each one says SAMPLE LAYOUT on the page. That is
          not a disclaimer I hid in the footer.
        </p>
      </div>

      <article className="work-law">
        <div className="work-copy">
          <h3>
            <Link href={law.href}>{law.title}</Link>
          </h3>
          <p>{law.blurb}</p>
          <Link className="text-go" href={law.href}>
            Open the consult page
          </Link>
        </div>
        <LivePreview href={law.href} label={law.title} mode="desktop" />
      </article>

      <div className="work-pair">
        <article className="work-hvac">
          <LivePreview href={hvac.href} label={hvac.title} mode="phone" />
          <div className="work-copy">
            <h3>
              <Link href={hvac.href}>{hvac.title}</Link>
            </h3>
            <p>{hvac.blurb}</p>
            <Link className="text-go" href={hvac.href}>
              Open the service page
            </Link>
          </div>
        </article>
        <article className="work-dental">
          <div className="work-copy">
            <h3>
              <Link href={dental.href}>{dental.title}</Link>
            </h3>
            <p>{dental.blurb}</p>
            <Link className="text-go" href={dental.href}>
              Open the first-visit page
            </Link>
          </div>
          <LivePreview href={dental.href} label={dental.title} mode="desktop" />
        </article>
      </div>
    </section>
  );
}
