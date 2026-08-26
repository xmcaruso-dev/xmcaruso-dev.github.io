import Link from "next/link";
import { STRIPE_PAYMENT_LINK } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p className="footer-mark">Friday Page</p>
        <p className="footer-meta">
          One conversion page. 48 hours. $2,500. I write it and I build it.
        </p>
        <nav className="footer-nav" aria-label="Footer">
          <Link href="/">Home</Link>
          <Link href="/#work">Samples</Link>
          <Link href="/intake">Intake</Link>
          <a href={STRIPE_PAYMENT_LINK} data-pay-link="stripe">
            Pay $2,500
          </a>
          <Link href="/privacy">Privacy</Link>
        </nav>
      </div>
    </footer>
  );
}
