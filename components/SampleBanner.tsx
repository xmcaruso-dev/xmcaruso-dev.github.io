import Link from "next/link";
import { PayButton } from "@/components/PayButton";

export function SampleBanner() {
  return (
    <header className="proof-strip">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="proof-strip-inner">
        <p className="proof-stamp">SAMPLE LAYOUT</p>
        <p className="proof-note">
          Friday Page example. Not a live practice. Not a case study.
        </p>
        <nav className="proof-nav" aria-label="Sample chrome">
          <Link href="/">Friday Page</Link>
          <Link href="/#work">All samples</Link>
          <PayButton className="btn-compact" />
        </nav>
      </div>
    </header>
  );
}
