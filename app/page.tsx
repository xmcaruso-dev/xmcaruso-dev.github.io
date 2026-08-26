import Link from "next/link";
import { HomeSamples } from "@/components/HomeSamples";
import { LivePreview } from "@/components/LivePreview";
import { PageCutaway } from "@/components/PageCutaway";
import { PayButton } from "@/components/PayButton";
import { SiteShell } from "@/components/SiteShell";
import { WixLeftover } from "@/components/WixLeftover";
import { FAQ, PRICE_LABEL } from "@/lib/site";

export default function HomePage() {
  return (
    <SiteShell current="home">
      <main id="main">
        <section className="pitch">
          <div className="pitch-copy">
            <h1>Your ad is paying for a leftover Wix page.</h1>
            <p>
              I write and build one conversion page. {PRICE_LABEL}. Forty-eight
              hours after I have your answers.
            </p>
            <p>
              I keep getting the same site. Welcome to mysite.com. The phone
              number is a mailto to info@. A heading that still says Beautiful
              Title. A news block dated 2014. Then they ask why nobody books.
            </p>
            <p>
              The samples on this site are the other version. Open them. They
              are labeled SAMPLE LAYOUT because they are not case studies. I am
              not going to invent a firm so this looks expensive.
            </p>
            <div className="hero-actions">
              <PayButton />
              <Link className="btn btn-ghost" href="/intake">
                Tell me the offer
              </Link>
            </div>
            <p className="price-quiet">
              {PRICE_LABEL} once. Not a membership. I start when payment and
              intake are both in.
            </p>
          </div>
          <div className="pitch-show">
            <div className="pitch-desktop">
              <LivePreview
                href="/samples/law"
                label="Immigration consult sample"
                mode="desktop"
              />
            </div>
            <div className="pitch-phone">
              <LivePreview
                href="/samples/hvac"
                label="HVAC service sample"
                mode="phone"
              />
            </div>
            <p className="pitch-caption">
              That is a live sample, not a grey phone. Open it and scroll.
            </p>
          </div>
        </section>

        <section className="compare" aria-labelledby="compare-heading">
          <div className="compare-head">
            <h2 id="compare-heading">This is what I still get sent.</h2>
            <p>
              Not a specific client. The leftover pattern. mysite.com, a mailto,
              Beautiful Title, 2014 news still posted. A Friday Page is the
              other column.
            </p>
          </div>
          <div className="compare-grid">
            <figure className="compare-before">
              <figcaption>The leftover</figcaption>
              <WixLeftover />
            </figure>
            <figure className="compare-after">
              <figcaption>A Friday Page</figcaption>
              <LivePreview
                href="/samples/dental"
                label="New patient sample"
                mode="desktop"
              />
            </figure>
          </div>
        </section>

        <section className="anatomy" aria-labelledby="anatomy-heading">
          <div className="home-copy">
            <h2 id="anatomy-heading">What $2,500 is for.</h2>
            <p>
              A conversion page is not a brochure with a button glued on. It is
              an offer, room for proof, a form, and a layout that holds on a
              phone. I write the copy. I build the page. You get a URL. Seven
              days of tweaks after that.
            </p>
            <p>
              If you have an offer and a page that is not doing the job, this
              is for you. I do a lot of law, HVAC, and dental. I will also do a
              coach or a small software offer if it is one page. I do not build
              apps. I do not build shops with 40 products. I do not write a
              brand book.
            </p>
          </div>
          <PageCutaway />
        </section>

        <HomeSamples />

        <section className="how" aria-labelledby="how-heading">
          <h2 id="how-heading">Pay, then the eight questions.</h2>
          <p>
            Offer. Who it is for. The button you want. Three facts you can
            stand behind, or a skip. A logo if you have one. Where leads should
            go. I write from that. I do not start on a maybe.
          </p>
          <p>
            <Link href="/intake">The intake is here.</Link> It stays in your
            browser until you send it. Payments go through Stripe.
          </p>
        </section>

        <section className="ask" aria-labelledby="ask-heading">
          <h2 id="ask-heading">Things people ask.</h2>
          <dl>
            {FAQ.map((item) => (
              <div key={item.q}>
                <dt>{item.q}</dt>
                <dd>{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="close" aria-labelledby="close-heading">
          <h2 id="close-heading">Pay {PRICE_LABEL}. Then tell me the offer.</h2>
          <p>
            Forty-eight hours after I have both. Seven days of tweaks after
            launch. That is the job.
          </p>
          <div className="hero-actions">
            <PayButton />
            <Link className="btn btn-ghost" href="/intake">
              Tell me the offer
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
