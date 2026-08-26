import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export default function NotFound() {
  return (
    <SiteShell>
      <main id="main" className="page page-narrow">
        <header className="page-head">
          <h1>No page here.</h1>
          <p>Home, intake, privacy, and the sample layouts still are.</p>
          <Link className="btn btn-primary" href="/">
            Back to Friday Page
          </Link>
        </header>
      </main>
    </SiteShell>
  );
}
