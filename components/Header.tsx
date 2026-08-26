import Link from "next/link";
import { PayButton } from "@/components/PayButton";

type HeaderProps = {
  current?: "home" | "intake" | "privacy";
};

export function Header({ current = "home" }: HeaderProps) {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-header-inner">
        <Link
          className="wordmark"
          href="/"
          aria-current={current === "home" ? "page" : undefined}
        >
          Friday Page
        </Link>
        <nav className="nav" aria-label="Primary">
          <Link href="/#work">Samples</Link>
          <Link href="/intake" aria-current={current === "intake" ? "page" : undefined}>
            Intake
          </Link>
          <PayButton className="btn-compact" />
        </nav>
      </div>
    </header>
  );
}
