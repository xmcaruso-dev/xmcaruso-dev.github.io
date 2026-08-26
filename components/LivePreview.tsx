import Link from "next/link";
import { sampleSrc } from "@/lib/paths";

type LivePreviewProps = {
  href: string;
  label: string;
  mode?: "desktop" | "phone";
};

export function LivePreview({ href, label, mode = "desktop" }: LivePreviewProps) {
  const src = sampleSrc(href);
  const width = mode === "phone" ? 390 : 1180;
  const height = mode === "phone" ? 900 : 1520;
  const scale = mode === "phone" ? 0.52 : 0.42;

  return (
    <figure className={`live-preview live-preview-${mode}`}>
      <figcaption className="live-preview-bar">
        <span className="live-preview-stamp">SAMPLE LAYOUT</span>
        <span className="live-preview-path">{href}</span>
      </figcaption>
      <div
        className="live-preview-clip"
        style={{
          width: `min(100%, ${width * scale}px)`,
          height: height * scale,
        }}
      >
        <iframe
          src={src}
          title={label}
          tabIndex={-1}
          loading="lazy"
          style={{
            width,
            height,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            border: 0,
            pointerEvents: "none",
          }}
        />
        <Link className="live-preview-hit" href={href}>
          <span>Open the live page</span>
        </Link>
      </div>
    </figure>
  );
}
