import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type SiteShellProps = {
  children: React.ReactNode;
  current?: "home" | "intake" | "privacy";
};

export function SiteShell({ children, current = "home" }: SiteShellProps) {
  return (
    <div className="site">
      <Header current={current} />
      {children}
      <Footer />
    </div>
  );
}
